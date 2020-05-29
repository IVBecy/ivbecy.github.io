// Defining our canvas
const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

//Setting up variables that we need
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = screen.height;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);
const x = canvas.width / 2;
const y = screen.height / 2.5;

//Check user agent
var result = bowser.getParser(window.navigator.userAgent);
// If the user agent is microst edge, the matrix animation won't work, so we only output "Hello World!"
//  and disable the animation
if (result.parsedResult.browser.name == "Microsoft Edge"){
  ctx.fillStyle = '#000020';
  ctx.fillStyle = '#B305B3';
  ctx.font = '5vw Bungee';
  ctx.textAlign = 'center';
  ctx.fillText('Hello World!', x, y);
  console.log(result);
}// else happens, the animation carries on
else{
  function matrix () {
    ctx.fillStyle = '#0021';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#B305B3';
    ctx.font = '5vw Bungee';
    ctx.textAlign = 'center';
    ctx.fillText('Hello World!', x, y);
    ctx.textAlign = 'end';
    ctx.fillStyle = '#1942E9';
    ctx.font = '15pt monospace';
    //Making + pushing the characters
    ypos.forEach((y, ind) => {
      const text = String.fromCharCode(Math.random() * 128);
      const x = ind * 20;
      ctx.fillText(text, x, y);
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
      else ypos[ind] = y + 20;
    });
  }
  //every 0.3 seconds a new line appears
  setInterval(matrix, 30);
}
