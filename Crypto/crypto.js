let btc = document.querySelector("#bitcoin");
let eth = document.querySelector("#ethereum");
let doge = document.querySelector("#dogecoin");

let settings = {
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    console.log(response.bitcoin.usd);
    
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
});