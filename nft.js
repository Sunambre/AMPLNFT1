function loadGif(marketRate) {
  
  const gifHolder = document.getElementById("gifDisplay");
  
  if(marketRate > 1.7)
  {
  	gifHolder.src = "https://i.imgur.com/gzj9Ex1.gif";
  }
  if((marketRate <= 1.7)&&(marketRate >= 1.2))
  {
    gifHolder.src = "https://i.imgur.com/RaxHT8K.gif";
  }
  if((marketRate < 1.2)&&(marketRate >= 1.07))
  {
    gifHolder.src = "https://i.imgur.com/eL6tzb9.gif";
  }
  if((marketRate < 1.07)&&(marketRate >= 0.98))
  {
    gifHolder.src = "https://i.imgur.com/fqaxE9O.gif";
  }
  if((marketRate < 0.98)&&(marketRate >= 0.89))
  {
    gifHolder.src = "https://i.imgur.com/PFPhQ2s.gif";
  }
  if((marketRate < 0.89)&&(marketRate >= 0.69))
  {
    gifHolder.src = "https://i.imgur.com/sH6TD6A.gif";
  }
  if((marketRate < 0.69)&&(marketRate >= 0))
  {
    gifHolder.src = "https://i.imgur.com/ucbClGR.gif";
  }
}

document.getElementById("price_slider").addEventListener("input", e => {
  const marketRate = parseFloat((1 + (e.target.value / 100)).toFixed(2));
  document.getElementById("price_slider_output").value = marketRate
  loadGif(marketRate) 
})
             


fetch("https://api.coingecko.com/api/v3/simple/price?ids=ampleforth&vs_currencies=usd").then(async response => {
  const json = await response.json()

  document.getElementById("price_slider_output").value = json.ampleforth.usd
  
  loadGif(json.ampleforth.usd)
})


