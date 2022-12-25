const btn=document.getElementById('btn');
const emojiName=document.getElementById('emo');
const emoji=[];

async function myEmoji(){
    let data= await fetch('https://emoji-api.com/emojis?access_key=c53594ae5cbf32e7fb012bee4c981da829ade537');
    let res= await data.json();
    for(let i=0;i<1000;i++)
    {
        emoji.push({
            emojiName:res[i].character,
            emojiCode:res[i].unicodeName
        });
    }
    // console.log(emoji);
}
myEmoji();
btn.addEventListener('click',()=>{
    let random=Math.floor(Math.random()*emoji.length);
    console.log(random,emoji.length);
    btn.innerText=emoji[random].emojiName;
    emojiName.innerText=emoji[random].emojiCode;
});

