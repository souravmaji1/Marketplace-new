// import { Provider } from "react-redux";
import { MainRoutes } from "Routes/Routes";
import { BrowserRouter } from "react-router-dom";

// import { UserProvider } from 'Context/User';
// import { CoreProvider } from 'Context/Core';

// Pull the mock data
// import { setupStore } from "../store";

// Create the store
// const store = setupStore();
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import Toast from "Components/Toast";

function getLibrary(provider) {
  return new Web3Provider(provider);
}
function App() {
  return (
    <>
      {/* // <Provider store={store}> */}
      {/* <UserProvider>
        <CoreProvider> */}

      <BrowserRouter>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Toast />
          <MainRoutes />
        </Web3ReactProvider>
      </BrowserRouter>

      {/* </CoreProvider>
      </UserProvider> */}
      {/* // </Provider> */}
    </>
  );
}
export default App;
