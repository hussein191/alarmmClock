let hours = document.querySelector('.hurs');
let minutes = document.querySelector('.mument')
let seconds = document.querySelector('.second')
let typeDate = document.querySelector('.typeDate')

let AddAlarm = document.querySelector('.AddAlarm')
let countetId = 0;
let hoursUser = document.querySelector('.hoursUser')
let mumentUser = document.querySelector('.mumentUser')
let all_alarm = document.querySelector('.all_alarm')


let winner = document.querySelector('.winner')
let stopalarm = document.querySelector('.stopalarm')
let IconDeleALL = document.querySelector('.DeleALL')
let deletAll = document.querySelector('.delet')
let mode = document.querySelector('.mode')

let options = document.querySelector('.options')
function date(){
    let data = new Date()
    hours.textContent = data.getHours();
    minutes.textContent = data.getMinutes() 
    seconds.textContent = data.getSeconds()
    if(hours.textContent > 12){
        typeDate.textContent = "PM"
    }else{
        typeDate.textContent = "AM"
    }
}
//date()
setInterval(date,1000);

AddAlarm.addEventListener("click",function(){
    if(!hoursUser.value || !mumentUser.value || !options.value){
        confirm("Plaes enter the  hours and muments...")
    }else{
        countetId++;
        let elment = `
        <div id=${countetId} class="Alarm">
        
        <div class="left">
            <P class="timeHours">${hoursUser.value}</p>
            <p>:</p>
            <p class="time">${mumentUser.value}</p>
            <p class="option">${options.value}</p>
        </div>
        <div class="right">
            <div id=${countetId}  class="OffOn">
                <div id=${countetId} onclick = "ChengActive(this)" class="toles"></div>
            </div>
            <i onclick="Delet(this)" id=${countetId} class="uil uil-trash"></i>
        </div>
    </div>
        `
        let creatediv = document.createElement("div");
        creatediv.innerHTML = elment;
        all_alarm.appendChild(creatediv)
    }
    hoursUser.value = ""
    mumentUser.value = ""
    options.value = ""
})

setInterval(function(){
    let getAlarm = document.querySelectorAll('.Alarm');
    let retirnDelet = getAlarm.length? IconDeleALL.style.display="flex":IconDeleALL.style.display="none"
    return retirnDelet;
    
},1000)

function Delet(elem){
    let getAlarm = document.querySelectorAll('.Alarm')
    for(let i=0; i<getAlarm.length;i++){
        if( getAlarm[i].id === elem.id){
            getAlarm[i].remove()
        }
    }
}

deletAll.addEventListener("click",function(){
    let getAlarms = document.querySelectorAll('.Alarm');
    for(let i=0; i<getAlarms.length;i++){
        getAlarms[i].remove()
    }
})


function ChengActive(elm){
    let getoption = document.querySelectorAll('.option')
    let gettimeHours = document.querySelectorAll('.timeHours')
    let gettimee = document.querySelectorAll('.time')
    elm.classList.toggle("AddToles")
    let getOffOn = document.querySelectorAll('.OffOn');
    for(let i=0; i<getOffOn.length;i++){
        if(elm.id === getOffOn[i].id){
            getOffOn[i].classList.toggle("AddOffOn")
            gettimee[i].classList.toggle("Active")
            setInterval(function(){
                if(gettimee[i].classList.contains("Active") && gettimee[i].textContent === minutes.textContent && gettimeHours[i].textContent === hours.textContent && getoption[i].textContent.toUpperCase() === typeDate.textContent ){
                    gettimee[i].id="1"
                }
            },1000)
        }
    }
}

function ActiveTime(){
    let gettime = document.querySelectorAll('.time');
    for(let i=0; i<gettime.length;i++){
        if(gettime[i].id === "1"){
            document.querySelector('.ActivesArames').style.display="flex"
            winner.play()
        }else{
            winner.pause() 
        }
    }
}

setInterval(ActiveTime,1000)

stopalarm.addEventListener("click",function(){
    let gettimees = document.querySelectorAll('.time')
    let gettoles = document.querySelectorAll('.toles')
    let getOffOns = document.querySelectorAll('.OffOn');
    document.querySelector('.ActivesArames').style.display="none"
    for(let i =0; i<gettoles.length;i++){
        gettimees[i].id = "0"
            gettoles[i].classList.remove("AddToles")
            gettimees[i].classList.remove("Active")
            getOffOns[i].classList.remove("AddOffOn")
    }
})

let iocon_cheng = document.querySelector('.iocon_cheng')
let BodyHome = document.querySelector('.BodyHome')

mode.addEventListener("click",function(){
    mode.classList.toggle("nigthmode")
    iocon_cheng.classList.toggle("iocon_chengnigth")
    BodyHome.classList.toggle("background_body")
    
})