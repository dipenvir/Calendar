const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

//Getting new date, current year and month

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"];

const renderCalender = () => {
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //to get last date of month
    firstDateofMonth = new Date(currYear, currMonth ,1).getDate(), //to get last date of month
    lastDateofLastMonth = new Date(currYear, currMonth ,0).getDate(), //to get last date of month
    lastDayofMonth = new Date(currYear, currMonth ,lastDateofMonth).getDay(); //to get last date of month

    
    let liTag = "";
    //To create list of previpus month last days
    for(let i = firstDateofMonth; i > 0; i--){
        liTag +=  `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    //To create list of all days of current month
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active": "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    //To create list of next month first days
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalender();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", ()=> {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear, currMonth);
            currYear= date.getFullYear();
            currMonth = date.getMonth();
        }else{
            date = new Date();
        }
        renderCalender();
    });
});