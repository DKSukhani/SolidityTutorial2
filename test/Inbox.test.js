const assert = require('assert');
const ganache = require ('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require ('../compile')

let accounts;
let inboxContract;

beforeEach (async () => {
// Get a list of all accounts
accounts = await web3.eth.getAccounts(function(err, res){
	 console.log(res)});

// Use one of those accounts to deploy the contract

inboxContract = await web3.eth.contract(JSON.parse(interface)).deploy({ data: bytecode, arguments : ["Hi there Dipesh!"]}).send({ from: accounts[0], gas: "1000000"});

});



describe('Inbox', ()=> {
	it('deploys a contract', () => {
		console.log(inbox);

	})
})