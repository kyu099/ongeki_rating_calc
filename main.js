const calcbutton = document.getElementById("calc");
const targetrating = document.getElementById("targetrating");
const bestrating = document.getElementById("bestrating");
const newsongrating = document.getElementById("newsongrating");
const out1 = document.getElementById("out1");

calcbutton.onclick = () => {
    let recentrating = ((targetrating.value * 55) - (bestrating.value * 30) - (newsongrating.value * 15)) / 10;
    recentrating = Math.floor(recentrating * 10000) / 10000;
    out1.innerHTML = `リーセント枠(10曲)の平均レート${recentrating}で目標レート達成！`;
}