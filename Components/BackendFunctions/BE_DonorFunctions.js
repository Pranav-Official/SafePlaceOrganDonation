import Router from 'next/router';
const Web3 = require('web3');
const DonorContract = require('../../blockchain/build-info/DonorContract.json');
const RPC_URL = "HTTP://127.0.0.1:7545";
//const RPC_URL = "https://rpc.sepolia.org";

let accounts, web3, donorContract;

/**
 * Functions:-
 * 1. DonorSignUpFunction - Function to call DonorSignUp
 * 2. DonorLoginFunction - Function to call DonorLogin 
 **/

async function init(){
    // popup - get the user's address
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });

    // using web3 just as a helper to generate the transaction
    // (see the `data` field and `encodeABI`) - not to sign it
    web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
    donorContract = new web3.eth.Contract(DonorContract.abi, DonorContract.address);
}

export async function DonorSignUpFunction( firstname, lastname, contact, email, resAddress ){
    try{
        // popup - get the user's address
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        // using web3 just as a helper to generate the transaction
        // (see the `data` field and `encodeABI`) - not to sign it
        web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
        donorContract = new web3.eth.Contract(DonorContract.abi, DonorContract.address);

        const transactionParameters = {
            from: accounts[0],
            to: DonorContract.address,
            data: donorContract.methods.DonorSignUp(
                firstname,
                lastname,
                contact,
                email,
                resAddress
            ).encodeABI(),
            gasPrice: '3000000000', // custom gas price
        };

        // popup - request the user to sign and broadcast the transaction
        const transactionHash = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });


        const receipt = await web3.eth.getTransactionReceipt(transactionHash);

        console.log("status: ",receipt.status);
        if (receipt.status == "0x1"){
        console.log("Transaction Complete");
        // Route to 'DonorDashboard2' page
        Router.push('/DonorDashboard2');
        }else {
        console.log("Transaction Failed");
        }

        } catch(error){
            console.log("Error: ",error);
        }
        
    }

    export async function DonorLoginFunction( email ){
        try{
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
            donorContract = new web3.eth.Contract(DonorContract.abi, DonorContract.address);

            const result = await donorContract.methods.DonorLogin(email).call({
                from: accounts[0]
            });
            console.log("result",result);

            if (result){
                console.log("Transaction Complete");
                // Route to 'DonorDashboard2' page
                Router.push('/DonorDashboard2');
            }else {
                console.log("Transaction Failed");
            } 
            
        }catch(error){
            console.log("Error: ",error);
        }
    }

//This function gets the Donor details by taking the address of the Donor
export async function GetDonorDetailsFunction(){
    try{
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
        donorContract = new web3.eth.Contract(DonorContract.abi, DonorContract.address);
        
        const donorDetails = await donorContract.methods.GetDonorDetails(accounts[0]).call();     

        return donorDetails;

    }catch (error) {
        console.log('Error: ', error);
        return null;
    }
}

//This function returns the donor details bytaking the donor ID
export async function GetDonorFunction( ID ){
    try{
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
        donorContract = new web3.eth.Contract(DonorContract.abi, DonorContract.address);
        
        const donorDetails = await donorContract.methods.donors(ID).call();     
        return donorDetails;
    }catch (error) {
        console.log('Error: ', error);
        return null;
    }
}

export async function RegisterDonorFunction( bloodType, organType){
    try{
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
        donorContract = new web3.eth.Contract(DonorContract.abi, DonorContract.address);

        const transactionParameters = {
            from: accounts[0],
            to: DonorContract.address,
            data: donorContract.methods.DonorRegistration(
                bloodType,
                organType
            ).encodeABI(),
            gasPrice: '3000000000',
        };

        const transactionHash = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });

        const receipt = await web3.eth.getTransactionReceipt(transactionHash);

        // console.log("status: ",receipt.status);
        if (receipt.status == "0x1"){
            console.log("Transaction Complete");
            // Route to 'DonorDashboard2' page
            Router.push('/DonorDashboard2');
        }else {
            console.log("Transaction Failed");
        } 


        

    }catch (error) {
        console.log('Error: ', error);
        return null;
    }
}

export async function GetDonorCount(){
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });

    web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
    donorContract = new web3.eth.Contract(DonorContract.abi, DonorContract.address);    

    const count = await donorContract.methods.GetDonorCount().call();

    return count;
}