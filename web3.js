import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // we are in the browser and MetaMask is running
  await window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // we are on the server *OR* the user is not running MetaMask
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/8e37cda2efbb43c5b9fe80ac05933711"
  );
  web3 = new Web3(provider);
}

export default web3;
