const calcbutton = document.getElementById("calc");
const targetrating = document.getElementById("targetrating");
const bestrating = document.getElementById("bestrating");
const newsongrating = document.getElementById("newsongrating");
const out1 = document.getElementById("out1");

function calc_targetrating(targetrating, bestrating, newsongrating) {
    let sum_targetrating = Math.round((targetrating * 55) * 100) / 100;
    let sum_bestrating = Math.round((bestrating * 30) * 100) / 100;
    let sum_newsongrating = Math.round((newsongrating * 15) * 100) / 100;

    let sum_recentrating = sum_targetrating - (sum_bestrating + sum_newsongrating);
    let recentrating = Math.round(sum_recentrating * 100) / 1000

    return recentrating;
}

calcbutton.onclick = () => {
    let recentrating = 0;
    recentrating = calc_targetrating(targetrating.value, bestrating.value, newsongrating.value)
    out1.innerHTML = `リーセント枠(10曲)の平均レート${recentrating}で目標レート達成！`;
}