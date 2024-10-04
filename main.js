const calcbutton = document.getElementById("calc");
const targetrating = document.getElementById("targetrating");
const bestrating = document.getElementById("bestrating");
const newsongrating = document.getElementById("newsongrating");
const addbutton = document.getElementById("add");
const single_recentrating = document.getElementById("recentrating");
const out1 = document.getElementById("out1");
const out2 = document.getElementById("out2");
const out3 = document.getElementById("out3");
const resetbutton = document.getElementById("reset");

let sum_recentrating = 0;
let recentrating_values = [];

function calc_targetrating(targetrating, bestrating, newsongrating) {
    let sum_targetrating = Math.round((targetrating * 55) * 100) / 100;
    let sum_bestrating = Math.round((bestrating * 30) * 100) / 100;
    let sum_newsongrating = Math.round((newsongrating * 15) * 100) / 100;

    sum_recentrating = 0;

    sum_recentrating = sum_targetrating - (sum_bestrating + sum_newsongrating);
    let recentrating = Math.round(sum_recentrating * 100) / 1000

    return recentrating;
}

function print_table(){
    out2.innerHTML = "";
    for(let num in recentrating_values){
        out2.innerHTML += `<tr> <td> ${num*1+1} </td> <td>${recentrating_values[num]}</td> </tr>`;
    }
}

function calc_recentrating(){
    let sum_recentrating_values = [];
    sum_recentrating_values[0] = recentrating_values[0];
    for(let i = 1; i<recentrating_values.length; i++){
        sum_recentrating_values[i] = sum_recentrating_values[i-1] + recentrating_values[i];
    }

    out3.innerHTML="";
    for(let num in sum_recentrating_values) {
        let target = (sum_recentrating - sum_recentrating_values[num]) / (9-num);
        target = Math.round(target * 100) / 100;
        if(target > 0){
            out3.innerHTML += `あと${target}が${9-num}曲<br>`
        }
    }
    out3.innerHTML += "で目標達成！"
}

calcbutton.onclick = () => {
    let recentrating = 0;
    recentrating = calc_targetrating(targetrating.value, bestrating.value, newsongrating.value)
    out1.innerHTML = `リーセント枠(10曲)の平均レート${recentrating}で目標レート達成！`;
}

addbutton.onclick = () => {
    recentrating_values.sort((a, b) => b-a);
    if(single_recentrating.value != null && single_recentrating.value != 0){
        if(recentrating_values.length >= 10){recentrating_values.pop()}
        recentrating_values.push(single_recentrating.value * 1);
        recentrating_values.sort((a, b) => b-a);
    }
    print_table()
    calc_recentrating()
}

resetbutton.onclick = () => {
    recentrating_values = [];
    print_table()
    calc_recentrating()
    out2.innerHTML = "";
    out3.innerHTML = "";
}