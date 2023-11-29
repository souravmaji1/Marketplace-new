// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@thirdweb-dev/contracts/eip/interface/IERC721Supply.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
contract NFTMarketplace is Ownable, IERC721Supply {
    
    address public nftContract;
    uint256 public listingPrice;
    uint256 private tokenIdCounter;
    uint256 public totalNFTs;
    uint256 public totalAuction;
    constructor(address _nftContract, uint256 _listingPrice) {
        tokenIdCounter = 1;
        nftContract = _nftContract;
        listingPrice = _listingPrice;
    }

    struct AuctionDetails {
    uint256 tokenId;
    uint256 startingPrice;
    uint256 duration;
    uint256 endTime;
    address highestBidder;
    uint256 highestBid;
    string name;
    string description;
    string tokenURI;
}


     struct Listing {
        address seller;
        uint256 price;
        string name;         // New field for NFT name
        string description;  // New field for NFT description
        string tokenURI;
    }

    struct ListingDetails {
       uint256 tokenId;
       uint256 price;
       string name;
       string description;
       string tokenURI;
    }

     struct Transaction {
        address from;
        address to;
        uint256 tokenId;
        uint256 oldPrice;
        uint256 newPrice;
        uint256 timestamp;
    }

    struct Auction {
        address seller;
        uint256 tokenId;
        uint256 startingPrice;
        uint256 duration;
        uint256 endTime;
        address highestBidder;
        uint256 highestBid;
        bool ended;
        string name;         // New field for NFT name in Auction
        string description;  // New field for NFT description in Auction
    }

    mapping(uint256 => Listing) public listings;
    mapping(uint256 => Auction) public auctions;

   

     // Mapping to track user-listed NFTs
    mapping(address => uint256[]) public userListedNFTs;
    mapping(uint256 => address) public nftToSeller;
    // Mapping to track user-bought NFTs
    mapping(address => uint256[]) public userBoughtNFTs;

    mapping(uint256 => Transaction[]) public nftTransactionHistory;

    mapping(uint256 => bool) public isNFTListed;


    event NFTListed(uint256 indexed tokenId, address indexed seller, uint256 price, string name, string description, string tokenURI);
    event NFTSold(uint256 indexed tokenId, address indexed buyer, address indexed seller, uint256 price);
     event AuctionCreated(
        uint256 indexed tokenId,
        address indexed seller,
        uint256 startingPrice,
        uint256 duration,
        string name,
        string description,
        string tokenURI  // Add tokenURI to the event
    );
    event AuctionEnded(uint256 indexed tokenId, address indexed winner, uint256 highestBid);

    function setListingPrice(uint256 _price) external onlyOwner {
        listingPrice = _price;
    }



     function listNFTForSale(uint256 _tokenId, uint256 _price, string memory _name, string memory _description) external {
        require(msg.sender == ERC721(nftContract).ownerOf(_tokenId), "You don't own this NFT");

        string memory tokenURI = ERC721(nftContract).tokenURI(_tokenId);

        listings[_tokenId] = Listing({
            seller: msg.sender,
            price: _price,
            name: _name,
            description: _description,
            tokenURI: tokenURI
        });

        userListedNFTs[msg.sender].push(_tokenId);  // Track user-listed NFTs

         // Record the transaction details
        Transaction memory transaction = Transaction({
            from: msg.sender,
            to: address(0), // Initially listed for sale, so 'to' is set to the null address
            tokenId: _tokenId,
            oldPrice: 0, // No previous price when initially listed
            newPrice: _price,
            timestamp: block.timestamp
        });

        nftTransactionHistory[_tokenId].push(transaction);

        isNFTListed[_tokenId] = true;

        totalNFTs += 1;


        emit NFTListed(_tokenId, msg.sender, _price, _name, _description, tokenURI);
    }

    function getAllListedNFTs() external view returns (ListingDetails[] memory) {

    uint totalListed = totalNFTs;
    
    ListingDetails[] memory listedNFTs = new ListingDetails[](totalListed);

    uint currentIndex = 0;

    for (uint i = 0; i < totalNFTs; i++) {
        if (isNFTListed[i]) {
            Listing storage listing = listings[i];
            
            listedNFTs[currentIndex] = ListingDetails({
                tokenId: i,
                price: listing.price,
                name: listing.name,
                description: listing.description, 
                tokenURI: listing.tokenURI
            });
            
            currentIndex++;
        }
    }

    return listedNFTs;
}

function getAllListedAuctions() external view returns (AuctionDetails[] memory) {
    uint totalAuctions = totalAuction; // Assuming tokenIdCounter is used for generating unique token IDs
    
    AuctionDetails[] memory listedAuctions = new AuctionDetails[](totalAuctions);

    uint currentIndex = 0;

    for (uint i = 0; i < totalAuctions; i++) {
        Auction storage auction = auctions[i];
        if (!auction.ended) {
            listedAuctions[currentIndex] = AuctionDetails({
                tokenId: i,
                startingPrice: auction.startingPrice,
                duration: auction.duration,
                endTime: auction.endTime,
                highestBidder: auction.highestBidder,
                highestBid: auction.highestBid,
                name: auction.name,
                description: auction.description,
                tokenURI: ERC721(nftContract).tokenURI(i)
            });

            currentIndex++;
        }
    }

    return listedAuctions;
}


    function getTotalListed() external view returns (uint256) {
  return totalNFTs; 
}

   function totalSupply() external view returns (uint256){
    return tokenIdCounter;
   }

   function getTotalAuction() external view returns (uint256) {
  return totalAuction; 
}








function getNFTTransactionHistory(uint256 _tokenId) external view returns (Transaction[] memory) {
    return nftTransactionHistory[_tokenId];
  }



    function buyNFT(uint256 _tokenId) external payable {
        Listing storage listing = listings[_tokenId];
        require(listing.price > 0, "NFT is not listed for sale");
        require(msg.value >= listing.price, "Insufficient funds sent");

        address seller = listing.seller;
        uint256 price = listing.price;

        delete listings[_tokenId];
        ERC721(nftContract).safeTransferFrom(seller, msg.sender, _tokenId);

         // Track user-bought NFT
        userBoughtNFTs[msg.sender].push(_tokenId);

        Transaction memory transaction = Transaction({
            from: seller,
            to: msg.sender,
            tokenId: _tokenId,
            oldPrice: listing.price,
            newPrice: msg.value,
            timestamp: block.timestamp
        });

        nftTransactionHistory[_tokenId].push(transaction);

        isNFTListed[_tokenId] = false;

        (bool success, ) = payable(seller).call{value: price}("");
        require(success, "Transfer to seller failed");

        emit NFTSold(_tokenId, msg.sender, seller, price);
    }

    function resellNFT(uint256 _tokenId, uint256 _price, string memory _name, string memory _description) external {
    require(msg.sender == ERC721(nftContract).ownerOf(_tokenId), "You don't own this NFT");

    // Ensure the NFT is not already listed for sale
    require(!isNFTListed[_tokenId], "NFT is already listed for sale");

    // Transfer ownership of the NFT to the contract
    ERC721(nftContract).safeTransferFrom(msg.sender, address(this), _tokenId);

    // Add the NFT to the listings
    listings[_tokenId] = Listing({
        seller: msg.sender,
        price: _price,
        name: _name,
        description: _description,
        tokenURI: ERC721(nftContract).tokenURI(_tokenId)
    });

    userListedNFTs[msg.sender].push(_tokenId);  // Track user-listed NFTs

    // Record the transaction details
    Transaction memory transaction = Transaction({
        from: msg.sender,
        to: address(0), // Initially listed for sale, so 'to' is set to the null address
        tokenId: _tokenId,
        oldPrice: 0, // No previous price when initially listed
        newPrice: _price,
        timestamp: block.timestamp
    });

    nftTransactionHistory[_tokenId].push(transaction);

    isNFTListed[_tokenId] = true;
}





    function createAuction(uint256 _tokenId, uint256 _startingPrice, uint256 _duration, string memory _name, string memory _description) external {
        require(msg.sender == ERC721(nftContract).ownerOf(_tokenId), "You don't own this NFT");
        require(_duration > 0, "Auction duration must be greater than zero");

        string memory tokenURI = ERC721(nftContract).tokenURI(_tokenId);

        uint256 endTime = block.timestamp + _duration;
        auctions[_tokenId] = Auction({
            seller: msg.sender,
            tokenId: _tokenId,
            startingPrice: _startingPrice,
            duration: _duration,
            endTime: endTime,
            highestBidder: address(0),
            highestBid: 0,
            ended: false,
            name: _name,
            description: _description
        });

        totalAuction += 1;

        emit AuctionCreated(_tokenId, msg.sender, _startingPrice, _duration, _name, _description, tokenURI);
    }

    function placeBid(uint256 _tokenId) external payable {
        Auction storage auction = auctions[_tokenId];
        require(!auction.ended, "Auction has ended");
        require(block.timestamp < auction.endTime, "Auction has expired");
        require(msg.value > auction.highestBid, "Bid must be higher than the current highest bid");

        if (auction.highestBidder != address(0)) {
            // Refund the previous highest bidder
            (bool success, ) = payable(auction.highestBidder).call{value: auction.highestBid}("");
            require(success, "Refund to previous highest bidder failed");
        }

        auction.highestBidder = msg.sender;
        auction.highestBid = msg.value;
    }



    function endAuction(uint256 _tokenId) external {
        Auction storage auction = auctions[_tokenId];
        require(!auction.ended, "Auction has already ended");
        require(block.timestamp >= auction.endTime, "Auction has not yet expired");

        auction.ended = true;

        if (auction.highestBidder == address(0)) {
            // If there are no bids, return the NFT to the seller
            delete auctions[_tokenId];
            return;
        }

        address seller = auction.seller;
        uint256 price = auction.highestBid;

        delete auctions[_tokenId];
        ERC721(nftContract).safeTransferFrom(seller, auction.highestBidder, _tokenId);

        (bool success, ) = payable(seller).call{value: price}("");
        require(success, "Transfer to seller failed");

        emit AuctionEnded(_tokenId, auction.highestBidder, price);
    }


function getBiddersAndBids(uint256 _tokenId) external view returns (address[] memory bidders, uint256[] memory bids) {
    Auction storage auction = auctions[_tokenId];

    // Create arrays to store bidder addresses and corresponding bid amounts
    address[] memory _bidders = new address[](1);
    uint256[] memory _bids = new uint256[](1);

    // Populate arrays with data from the ongoing auction
    _bidders[0] = auction.highestBidder;
    _bids[0] = auction.highestBid;

    // Return arrays containing bidder addresses and bid amounts
    return (_bidders, _bids);
}


function getUserListedNFTs(address _user) external view returns (ListingDetails[] memory) {
    uint256[] memory userNFTs = userListedNFTs[_user];
    ListingDetails[] memory result = new ListingDetails[](userNFTs.length);

    for (uint256 i = 0; i < userNFTs.length; i++) {
        uint256 tokenId = userNFTs[i];
        Listing storage listing = listings[tokenId];

        result[i] = ListingDetails({
            tokenId: tokenId,
            price: listing.price,
            name: listing.name,
            description: listing.description,
            tokenURI: listing.tokenURI
        });
    }

    return result;
}

function getUserBoughtNFTs(address _user) external view returns (ListingDetails[] memory) {
    uint256[] memory userNFTs = userBoughtNFTs[_user];
    ListingDetails[] memory result = new ListingDetails[](userNFTs.length);

    for (uint256 i = 0; i < userNFTs.length; i++) {
        uint256 tokenId = userNFTs[i];

        // Retrieve NFT details directly from the NFT contract
        string memory tokenURI = ERC721(nftContract).tokenURI(tokenId);

        result[i] = ListingDetails({
            tokenId: tokenId,
            price: 0,  // Set the price to 0, as it's not available for bought NFTs
            name: "", // You may want to add metadata in the NFT contract for name and description
            description: "",
            tokenURI: tokenURI
        });
    }

    return result;
}

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Withdrawal failed");
    }
}
