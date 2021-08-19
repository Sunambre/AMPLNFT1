function loadGif(marketRate,targetPrice) {
  
  let upA = targetPrice * 1.05;
  let upB = targetPrice * 1.25;
  let upC = targetPrice * 1.5;

  let downA = targetPrice * 0.95;
  let downB = targetPrice * 0.75;
  let downC = targetPrice * 0.5;
  
  const gifHolder = document.getElementById("gifDisplay");
  
  if(marketRate > upC)
  {
    gifHolder.src = "https://i.imgur.com/gzj9Ex1.gif";
  }
  if((marketRate <= upC)&&(marketRate >= upB))
  {
    gifHolder.src = "https://i.imgur.com/RaxHT8K.gif";
  }
  if((marketRate < upB)&&(marketRate >= upA))
  {
    gifHolder.src = "https://i.imgur.com/GbK3uJ4.gifv";
  }
  if((marketRate < upA)&&(marketRate >= downA))
  {
    gifHolder.src = "https://i.imgur.com/fqaxE9O.gif";
  }
  if((marketRate < downA)&&(marketRate >= downB))
  {
    gifHolder.src = "https://i.imgur.com/PFPhQ2s.gif";
  }
  if((marketRate < downB)&&(marketRate >= downC))
  {
    gifHolder.src = "https://i.imgur.com/sH6TD6A.gif";
  }
  if((marketRate < downC)&&(marketRate >= 0))
  {
    gifHolder.src = "https://i.imgur.com/ucbClGR.gif";
  }
}

let targetPrice = 0;

function checkMarket() {
  
  fetch("https://web-api.ampleforth.org/eth/token-info").then(async response => {
    const json = await response.json();
    targetPrice = json.lastRebaseInfo.targetRateAtRebase;

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=ampleforth&vs_currencies=usd").then(async response => {
       const json = await response.json();
       document.getElementById("price_slider_output").value = parseFloat(json.ampleforth.usd).toFixed(2);
       document.getElementById("price_slider").value = (parseFloat(json.ampleforth.usd)* 100 - 100).toFixed(2);

       loadGif(json.ampleforth.usd,targetPrice)
    })
  })
 
}

document.getElementById("price_slider").addEventListener("input", e => {
  const marketRate = parseFloat((1 + (e.target.value / 100)).toFixed(2));
  document.getElementById("price_slider_output").value = marketRate;
  loadGif(marketRate,targetPrice) ;
})
             

document.getElementById("check_market_button").addEventListener("click", e => {
  checkMarket();
})

checkMarket();
