const icoAddress = "0xe41b1f4dd1F275097241E9bE87F4a84c5A55496A";

const icoLeftTimeText = document.querySelector('#ico-time');
const icoLeftTokensText = document.querySelector('#ico-tokens');
const icoPriceText = document.querySelector('#ico-price');

var userAccount;
var icoContract;

addEventListener('load', async function() {
    if (typeof web3 !== 'undefined') {
      web3js = new Web3(window.ethereum);

      await web3js.eth.net.getId().then(res => {
          if (res != 56) {
              alert("Please Connect to BSC Network");
          }
      });
  
    } else {
      alert("Please Install Metamask.");
    }


    icoContract = new web3js.eth.Contract(icoAbi, icoAddress);

    await ethereum.request({ method: 'eth_requestAccounts' })
    .then(function(result) {
    userAccount = result[0];
    });

})



async function buyTokens() {

}
