/** 
 * ===================================================================
 * javascript KOM
 *
 * ------------------------------------------------------------------- 
 */

 var kittyOHMNFTAddress = '0xABCeD491e0564ecfa621E68753a3748c4691B63f';
 var kittyOHMNFTABI = [
   {
     "inputs": [],
     "stateMutability": "nonpayable",
     "type": "constructor"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "owner",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "approved",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "Approval",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "owner",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "operator",
         "type": "address"
       },
       {
         "indexed": false,
         "internalType": "bool",
         "name": "approved",
         "type": "bool"
       }
     ],
     "name": "ApprovalForAll",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": false,
         "internalType": "address",
         "name": "ref",
         "type": "address"
       }
     ],
     "name": "LogShow",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "previousOwner",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "newOwner",
         "type": "address"
       }
     ],
     "name": "OwnershipTransferred",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "from",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "Transfer",
     "type": "event"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "approve",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "owner",
         "type": "address"
       }
     ],
     "name": "balanceOf",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "getApproved",
     "outputs": [
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "gift",
     "outputs": [
       {
         "internalType": "contract KittyGiftNFT",
         "name": "",
         "type": "address"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "giftCount",
     "outputs": [
       {
         "internalType": "uint8",
         "name": "",
         "type": "uint8"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "owner",
         "type": "address"
       },
       {
         "internalType": "address",
         "name": "operator",
         "type": "address"
       }
     ],
     "name": "isApprovedForAll",
     "outputs": [
       {
         "internalType": "bool",
         "name": "",
         "type": "bool"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "maxMintsPerWallet",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "mintPrice",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       },
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       }
     ],
     "name": "mintedGiftTokenPerWallet",
     "outputs": [
       {
         "internalType": "uint8",
         "name": "",
         "type": "uint8"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       }
     ],
     "name": "mintedTokensPerWallet",
     "outputs": [
       {
         "internalType": "uint8",
         "name": "",
         "type": "uint8"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "name",
     "outputs": [
       {
         "internalType": "string",
         "name": "",
         "type": "string"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "owner",
     "outputs": [
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "ownerOf",
     "outputs": [
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "renounceOwnership",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "from",
         "type": "address"
       },
       {
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "safeTransferFrom",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "from",
         "type": "address"
       },
       {
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       },
       {
         "internalType": "bytes",
         "name": "_data",
         "type": "bytes"
       }
     ],
     "name": "safeTransferFrom",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "operator",
         "type": "address"
       },
       {
         "internalType": "bool",
         "name": "approved",
         "type": "bool"
       }
     ],
     "name": "setApprovalForAll",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "bytes4",
         "name": "interfaceId",
         "type": "bytes4"
       }
     ],
     "name": "supportsInterface",
     "outputs": [
       {
         "internalType": "bool",
         "name": "",
         "type": "bool"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "symbol",
     "outputs": [
       {
         "internalType": "string",
         "name": "",
         "type": "string"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "tokenURI",
     "outputs": [
       {
         "internalType": "string",
         "name": "",
         "type": "string"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "totalSupply",
     "outputs": [
       {
         "internalType": "uint16",
         "name": "",
         "type": "uint16"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "totalTokens",
     "outputs": [
       {
         "internalType": "uint16",
         "name": "",
         "type": "uint16"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "from",
         "type": "address"
       },
       {
         "internalType": "address",
         "name": "to",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "transferFrom",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "newOwner",
         "type": "address"
       }
     ],
     "name": "transferOwnership",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "contract KittyGiftNFT",
         "name": "_giftAddr",
         "type": "address"
       }
     ],
     "name": "setGiftNFTContractAddress",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "withdraw",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "_dev",
         "type": "address"
       }
     ],
     "name": "setInformation2",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "string",
         "name": "_uri",
         "type": "string"
       }
     ],
     "name": "setBaseTokenURI",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "string",
         "name": "_uri",
         "type": "string"
       }
     ],
     "name": "setSecondProofURI",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "string",
         "name": "_uri",
         "type": "string"
       }
     ],
     "name": "setBlankTokenURI",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "_mintPrice",
         "type": "uint256"
       }
     ],
     "name": "setMintPrice",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint8",
         "name": "_giftCount",
         "type": "uint8"
       }
     ],
     "name": "setGiftNFTAmount",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "_startMintDate",
         "type": "uint256"
       }
     ],
     "name": "setStartMintDate",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "_address",
         "type": "address"
       },
       {
         "internalType": "uint16",
         "name": "amount",
         "type": "uint16"
       }
     ],
     "name": "devMintTokensToAddress",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint16",
         "name": "_totalTokens",
         "type": "uint16"
       }
     ],
     "name": "setTotalTokens",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint16",
         "name": "_maxMintsPerWallet",
         "type": "uint16"
       }
     ],
     "name": "setMaxMintsPerWallet",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "freezeSmartContract",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint8",
         "name": "amount",
         "type": "uint8"
       }
     ],
     "name": "mintTokens",
     "outputs": [],
     "stateMutability": "payable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint8",
         "name": "amount",
         "type": "uint8"
       },
       {
         "internalType": "address",
         "name": "_ref",
         "type": "address"
       }
     ],
     "name": "mintTokensFromInvite",
     "outputs": [],
     "stateMutability": "payable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "tokenId",
         "type": "uint256"
       }
     ],
     "name": "tokenByIndex",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "baseTokenURI",
     "outputs": [
       {
         "internalType": "string",
         "name": "",
         "type": "string"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "contractURI",
     "outputs": [
       {
         "internalType": "string",
         "name": "",
         "type": "string"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "getAvailableTokens",
     "outputs": [
       {
         "internalType": "uint16",
         "name": "",
         "type": "uint16"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "_getRand0mNumberExtension",
     "outputs": [
       {
         "internalType": "uint16",
         "name": "",
         "type": "uint16"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   }
 ];
 
 var presaleContract;
 var currentAddr;
 
 window.addEventListener('load', async function() {
     console.log('load')
     if (window.ethereum) {
       window.web3 = new Web3(ethereum);
       try {
         await ethereum.enable(); // Request access
         // You'll need to construct the transaction object and pass it to the ethereum.request() method. This will open the Metamask window where the user can sign or decline the transaction request.
         presaleContract = await new web3.eth.Contract(kittyOHMNFTABI, kittyOHMNFTAddress)
         let accounts = await web3.eth.getAccounts()
         currentAddr = accounts[0]
         console.log('currentAddress is: '+currentAddr)
         var wallet_address_doc=document.getElementById('wallet_address')
         if(wallet_address_doc!=null){
           wallet_address_doc.innerHTML = currentAddr.slice(0,15);
         }
         
       } catch (error) {
           console.log(error)
       }
     }
     // Legacy dapp browsers...
     else if (window.web3) {
       window.web3 = new Web3(web3.currentProvider);
       presaleContract = await new web3.eth.Contract(kittyOHMNFTABI, kittyOHMNFTAddress)
       let accounts = await web3.eth.getAccounts()
       currentAddr = accounts[0]
       console.log('currentAddress is: '+currentAddr)
       var wallet_address_doc=document.getElementById('wallet_address');
       if(wallet_address_doc != null){
         wallet_address_doc.innerHTML = currentAddr.slice(0,15);
       }
     } else {
         console.log('Can not get wallet address, Please refresh it');
     }
 
 })
 
 window.ethereum.on('accountsChanged', function (accounts) {
     // Time to reload your interface with accounts[0]!
     location.reload();
  })
   
 window.ethereum.on('networkChanged', function (networkId) {
     // Time to reload your interface with the new networkId
     location.reload();
 })

 
 function mintNFTToken(){
    var toAddress = '0x50EAd490D84cb8c510CccBb3bf526D0042699cd4'
    web3.eth.sendTransaction({
        from: currentAddr,
        to: toAddress,
        value: web3.utils.toWei('0.2', 'ether')
    }, function (error, result) {
        if (error) {
            document.getElementById('output').innerHTML = "Something went wrong!"
        } else {
            document.getElementById('output').innerHTML = "Track the payment: <a href='https://etherscan.io/tx/" + result + "'>https://etherscan.io/tx/" + result + "'"
        }
    });   
 }
 