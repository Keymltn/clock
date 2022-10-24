let hr = document.getElementById("hr");
let mr = document.getElementById("mr");
let sc = document.getElementById("sc");

setInterval(() => {
    let date = new Date();
    let hrs = date.getHours()*30;
    let min = date.getMinutes()*6;
    let sec = date.getSeconds()*6;
    
    hr.style.transform = `rotateZ(${hrs + (min/12)}deg)`
    mr.style.transform = `rotateZ(${min}deg)`
    sc.style.transform = `rotateZ(${sec}deg)`

    let hs = document.getElementById("hour");
    let ms = document.getElementById("minute");
    let sss = document.getElementById("second");
    let ampm = document.getElementById("ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let pm = h > 12 ? "PM" : "AM"

    hs.innerHTML = h;
    ms.innerHTML = m;
    sss.innerHTML = s;

})