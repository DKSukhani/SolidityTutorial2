const assert = require('assert');
const ganache = require ('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require ('../compile')

let accounts;
let inboxContract;
// const INITIAL_MESSAGE = "Hi Dipesh!"

beforeEach (async () => {
// Get a list of all accounts
accounts = await web3.eth.getAccounts(function(err, res){
	 console.log(res)});

// Use one of those accounts to deploy the contract

	inboxContract = await web3.eth.contract(JSON.parse(interface)).new(["Hi Dipesh!"], { data: bytecode,from: accounts[0], gas: "1000000"});

});



describe('Inbox', ()=> {
	it('deploys a contract', () => {
		assert.ok(inboxContract.options.address);
	});
	// in this test we are checking the default message
	it('it has a default message', async () => {
		const message  = await inboxContract.methods.message().call();
		console.log(message);
		assert.equal(message, "Hi Dipesh!")
	});

	// in this test we will modify the message and test if

});