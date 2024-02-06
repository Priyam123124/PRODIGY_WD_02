let time = document.getElementById('time1');
let id1 = document.getElementById('id1');
let id2 = document.getElementById('id2');
let id3 = document.getElementById('id3');
let id4 = document.getElementById('id4');
let lap = document.getElementById('lap');

let ms = 0;
let s = 0;
let m = 0;
let check = false;

let start = ()=>{setInterval(() => {
    if(check){
    let msp, sp, mp;
    if(ms>=0 && ms<10) {
        msp = "0"+ms.toString();
    } else {
        msp = ms.toString();
    }
    if(s>=0 && s<10) {
        sp = "0"+s.toString();
    } else {
        sp = s.toString();
    } 
    if(m>=0 && m<10){
        mp = "0"+m.toString();
    } else {
        mp = m.toString();
    }
    time.innerHTML = mp+":"+sp+":"+msp;

    ms++;
    if (ms >= 100) {
        ms = 0;
        s += 1;
    }
    if (s >= 60) {
        s = 0;
        m += 1;
    }
}}, 10)
if(!check){
    return;
}
}

id1.addEventListener("click", ()=>{
    check = true;
})

id2.addEventListener("click", ()=>{
    check = false;
})

id3.addEventListener("click", ()=>{
    check = false;
    time.innerHTML = "00:00:00";
    ms = 0;
    s = 0;
    m = 0;
    lap.innerHTML = " ";
})

id4.addEventListener("click", ()=>{
    let a = time.innerHTML;
    lap.innerHTML = lap.innerHTML+`<p>${a}</p>`;
    console.log("Clicked");
})
start();
