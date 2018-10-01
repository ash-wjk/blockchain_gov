import Web3 from 'web3';

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let votingABI=[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votingsReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"projectList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"projectNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"project","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"project","type":"bytes32"}],"name":"voteForProject","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
let votingAddress='0x101b97a1793020daf1c2772fd04daa4f7a9defd1';
web3.eth.defaultAccount = web3.eth.accounts[0]


const votingContract=web3.eth.contract(votingABI).at(votingAddress);
export {votingContract};