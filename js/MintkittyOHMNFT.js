/** 
 * ===================================================================
 * javascript KOM
 *
 * ------------------------------------------------------------------- 
 */
var endDate = "1638777600000";
var leftTime = 0;

$(document).ready(function() {
	countTime();

	$("#connectWalletBtn").click(async function() {
		var isConnect = $("#connectWalletBtn").attr("isconnect");
		if(isConnect == "1") {
			$("#connectWalletBtn").html("Connect Wallet");
			$("#connectWalletBtn").attr("isconnect", "0");
			$("#connectWalletBtn").css("background","#bebebe");
		} else {
			connectWallet();
		}
	})

	$("#approve-btn").click(async function() {

		if(!currentAddr) {
			alertify.error("Error connecting to wallet");
			return;
		}
		$(this).html("Waiting...");
		$(this).attr({"disabled": "disabled"});
		startApproveTime = setInterval("startApprove()",1000);
		
		$(this).css("background","#bebebe");

		var approvePrice = new BigNumber(2000 * 1000000000000000000);
		DaiContract.methods.approve(kittyOHMNFTAddress, approvePrice).send({
			from: currentAddr
		}).then(result => {
			alertify.success("SUCCESS");
			isApprove = true;
			$(this).html("Approve DAI");
			$("#mint-btn").show();
			$("#approve-div").hide();
			$("#approve-btn").removeAttr("disabled");
			$("#approve-btn").css("background","#ffc768");
			
			window.clearInterval(startApproveTime);
		}).catch((err) => {
			$("#approve-btn").removeAttr("disabled");
			$("#approve-btn").css("background","#ffc768");
			$(this).html("Approve DAI");
			
			alertify.error(err.message);
			window.clearInterval(startApproveTime);
		});
	})
})


var startApproveTime;
function startApprove(){
	var datetime = new Date().getTime();
	
	var mmm = datetime % 3;
	if(mmm == 0){
		$("#approve-btn").html("Waiting..");
	}else if(mmm == 1){
		$("#approve-btn").html("Waiting...");
	}else if(mmm == 2){
		$("#approve-btn").html("Waiting....");
	}
}

var startMintTime;
function startMint(){
	var datetime = new Date().getTime();
	
	var mmm = datetime % 3;
	if(mmm == 0){
		$("#mint-btn").html("Waiting..");
	}else if(mmm == 1){
		$("#mint-btn").html("Waiting...");
	}else if(mmm == 2){
		$("#mint-btn").html("Waiting....");
	}
}

async function connectWallet() {
	await ethereum.enable(); // Request access
	let accounts = await web3.eth.getAccounts()
	currentAddr = accounts[0]

	daiMintPrice = await presaleContract.methods.daiMintPrice().call();
	$("#connectWalletBtn").html("Disconnect");
	$("#connectWalletBtn").attr("isconnect", "1");
	$("#connectWalletBtn").css("background","#ffc768");

	
	let isApproveStr = await DaiContract.methods.allowance(currentAddr,kittyOHMNFTAddress).call();
	if(isApproveStr == '0'){
		isApprove = false;
		$("#approve-div").show();
	}else{
		$("#mint-btn").show();
		isApprove = true;
	}
}

window.addEventListener('load', async function() {
	if(window.ethereum) {
		window.web3 = new Web3(ethereum);
	} else if(window.web3) {
		window.web3 = new Web3(web3.currentProvider);
	} else {
		alertify.error("Error connecting to wallet!");
		return;
	}
	
	connectWallet();

	presaleContract = await new web3.eth.Contract(kittyOHMNFTABI, kittyOHMNFTAddress);
	DaiContract = await new web3.eth.Contract(DaiABI, DaiAddress);

});

window.ethereum.on('accountsChanged', function(accounts) {
	// Time to reload your interface with accounts[0]!
	location.reload();
})

window.ethereum.on('networkChanged', function(networkId) {
	// Time to reload your interface with the new networkId
	location.reload();
})

function mintTokensFromInvite(amount, ref, callback) {
	$("#mint-btn").html("Waiting...");
	$("#mint-btn").attr({"disabled": "disabled"});
	$("#mint-btn").css("background","#bebebe");

	var valstr = new BigNumber(amount * daiMintPrice);
	presaleContract.methods.mintTokensFromInviteByDAI(amount,ref, valstr).send({
		from: currentAddr
	}).then(result => {
		alertify.success("SUCCESS");
		showMintBtn();
		$("#mint-success").show();
	}).catch((err) => {
		showMintBtn();
		alertify.error("Transaction Error. Exception thrown in contract code");
	});
}






function mintTokens(amount, callback) {
	$("#mint-btn").html("Waiting...");
	$("#mint-btn").attr({"disabled": "disabled"});
	$("#mint-btn").css("background","#bebebe");

	startMintTime = setInterval("startMint()",1000);

	var valstr = new BigNumber(amount * daiMintPrice);
	presaleContract.methods.mintTokensByDAI(amount, valstr).send({
		from: currentAddr
	}).then(result => {
		alertify.success("SUCCESS");
		window.clearInterval(startMintTime);
		showMintBtn();
		$("#mint-success").show();
	}).catch((err) => {
		window.clearInterval(startMintTime);
		showMintBtn();
		alertify.error("Transaction Error. Exception thrown in contract code");
	});
}

function showMintBtn() {
	$("#mint-btn").html("Mint Kitty NFT");
	$("#mint-btn").removeAttr("disabled");
	$("#mint-btn").css("background","#ffc768");
}

function mintNFTToken() {
	if(!currentAddr) {
		alertify.error("Error connecting to wallet");
		return;
	}
	
	if(!isApprove) {
		alertify.error("First time bonding DAI?Please approve Kitty to use your DAI for bonding");
		return;
	}

	var amount = document.getElementById('mintcountinput').value;
	if(amount == "" || amount.indexOf(".") >-1) {
		alertify.error("Please enter a number from 1-50");
		return;
	}

	var amoutInt = parseInt(amount);
	if(amoutInt > 50 || amoutInt <= 0) {
		alertify.error("Please enter a number from 1-50");
		return;
	}
	// invited address
	var invitedAddress = document.getElementById('inviteaddress').value.toString();
	if(invitedAddress == '') {
		mintTokens(amount, function() {})
	} else {
		mintTokensFromInvite(amount, invitedAddress, function() {})
	}
}

function countTime() {
	var date = new Date();
	var now = date.getTime();
	var end = endDate;
	leftTime = end - now;
	var d, h, m, s, ms;
	if(leftTime >= 0) {
		// d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
		h = Math.floor(leftTime / 1000 / 60 / 60);
		m = Math.floor(leftTime / 1000 / 60 % 60);
		s = Math.floor(leftTime / 1000 % 60);
		ms = Math.floor(leftTime % 1000);
		if(ms < 100) {
			ms = "0" + ms;
		}
		if(s < 10) {
			s = "0" + s;
		}
		if(m < 10) {
			m = "0" + m;
		}
		if(h < 10) {
			h = "0" + h;
		}
	} else {
		$("#mint-approve-div").show();
		$("#comingsoon-div").hide();
		$("#showTime").hide();
		return;
	}
	$("#comingsoon-div").show();
	document.getElementById("showTime").innerHTML = h + ":" + m + ":" + s;
	setTimeout(countTime, 1000);
}