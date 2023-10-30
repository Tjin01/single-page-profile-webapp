let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');


let changehrs = function(str1, str2) {
    let tet =  document.getElementsByClassName('time');
    for(let i = 0; i<tet.length; i++){
        if(i % 2 !== 0){
            tet[i].innerHTML = `${str1}-${i}hrs`;
        } else {
            tet[i].innerHTML = `${str2}Hrs`;
        }
    }

}
daily.onclick = function () {
   changehrs("Daily", "32");
}

weekly.onclick = function () {
    changehrs("Weekly", "78");
}

monthly.onclick = function () {
    changehrs("Monthly", "300");
}


