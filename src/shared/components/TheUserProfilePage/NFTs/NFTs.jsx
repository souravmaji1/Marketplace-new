import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { useAddress } from "@thirdweb-dev/react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { ethers } from "ethers";


export const NFTs = () => {
  const { contract } = useContract("0x5ef84e1B60E892e7929D6Af21521480732f21367");
  const address = useAddress();
  const { data, isLoading } = useContractRead(contract, "getUserBoughtNFTs", [address]);
  const { mutateAsync: listNFTForSale, isLoading: listIsLoading } = useContractWrite(contract, "listNFTForSale");
  const { mutateAsync: createAuction, isLoading: isCreatingAuction } = useContractWrite(contract, "createAuction");

  const [selectedNFT, setSelectedNFT] = useState(null);
  const [_name, setName] = useState("");
  const [_description, setDescription] = useState("");
  const [_price, setPrice] = useState("");
  const [_tokenId, setTokenId] = useState("");
  const [_startingPrice, setStartingPrice] = useState("");
  const [_duration, setDuration] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuctionModalOpen, setIsAuctionModalOpen] = useState(false);

  useEffect(() => {
    // You can do something with the data or handle loading state changes here
    if (!isLoading) {
      console.log("User's bought NFTs:", data);
    }
  }, [data, isLoading]);

  const handleListForSale = async () => {
    if (selectedNFT) {
      try {
        // Automatically set tokenId when listing for sale
        setTokenId(selectedNFT.tokenId.toString());

        const mintprice = ethers.utils.parseUnits(_price, "ether");

        // Call the contract method to list NFT for sale
        const data = await listNFTForSale({
          args: [selectedNFT.tokenId.toString(), mintprice, _name, _description],
        });

        console.info("List NFT for Sale success:", data);
        // Add any additional logic or UI updates as needed
      } catch (err) {
        console.error("List NFT for Sale failure:", err);
      }
    }
  };

  const handleCreateAuction = async () => {
    if (selectedNFT) {
      try {
        // Automatically set tokenId when creating an auction
        setTokenId(selectedNFT.tokenId.toString());

        // Call the contract method to create an auction
        const data = await createAuction({
          args: [selectedNFT.tokenId.toString(), _startingPrice, _duration, _name, _description],
        });

        console.info("Create Auction success:", data);
        // Add any additional logic or UI updates as needed
      } catch (err) {
        console.error("Create Auction failure:", err);
      }
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openAuctionModal = () => {
    setIsAuctionModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeAuctionModal = () => {
    setIsAuctionModalOpen(false);
  };

  return (
    <Box>
      {/* Render your component content here */}
      {isLoading && <p>Loading...</p>}

      {!isLoading && data && data.length > 0 && (
        <Box>
          <h2>List NFTs for Sale:</h2>
          <Box>
            {data.map((nft, index) => (
              <Box
                key={index}
                onClick={() => {
                  setSelectedNFT(nft);
                  openModal();
                }}
                cursor="pointer"
                border={selectedNFT === nft ? "2px solid blue" : "2px solid transparent"}
                p={4}
                mb={4}
                borderRadius="md"
              >
                {/* Display your NFT content here */}
                <img src={`https://ipfs.io/ipfs/${nft.tokenURI.split("ipfs://")[1]}`} alt={`NFT ${index}`} />
                <p>Token ID: {nft.tokenId.toString()}</p>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Input fields for listing NFT for sale */}
      {selectedNFT && (
        
        <Modal isOpen={isModalOpen} onClose={closeModal} size="md">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>List NFT for Sale</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl mb={4}>
                <FormLabel>Name:</FormLabel>
                <Input type="text" value={_name} onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Description:</FormLabel>
                <Input type="text" value={_description} onChange={(e) => setDescription(e.target.value)} />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Price:</FormLabel>
                <Input type="text" value={_price} onChange={(e) => setPrice(e.target.value)} />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Token ID:</FormLabel>
                <Input type="text" value={_tokenId} readOnly />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleListForSale}>
                List for Sale
              </Button>
              <Button onClick={closeModal}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      {/* Input fields for creating an auction */}
      {selectedNFT && (
        <Modal isOpen={isAuctionModalOpen} onClose={closeAuctionModal} size="md">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Auction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl mb={4}>
                <FormLabel>Name:</FormLabel>
                <Input type="text" value={_name} onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Description:</FormLabel>
                <Input type="text" value={_description} onChange={(e) => setDescription(e.target.value)} />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Starting Price:</FormLabel>
                <Input type="text" value={_startingPrice} onChange={(e) => setStartingPrice(e.target.value)} />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Duration (in seconds):</FormLabel>
                <Input type="text" value={_duration} onChange={(e) => setDuration(e.target.value)} />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Token ID:</FormLabel>
                <Input type="text" value={_tokenId} readOnly />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleCreateAuction}>
                Create Auction
              </Button>
              <Button onClick={closeAuctionModal}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      {/* Buttons to trigger modals */}
      {selectedNFT && (
        <Box>
          <Button colorScheme="blue" mr={3} onClick={openModal}>
            List for Sale
          </Button>
          <Button colorScheme="teal" onClick={openAuctionModal}>
            Create Auction
          </Button>
        </Box>
      )}
    </Box>
  );
};


