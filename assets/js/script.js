//gets the current time and adds it to heading
let currentDate= moment();
$("#currentDay").append(currentDate.format("MMM DD, YYYY - hh:mm:ss a"));

//Making arrays for the times and ids of the textareas
let times= [moment('9:00 am', 'hh:mm a'), moment('10:00 am', 'hh:mm a'), moment('11:00 am', 'hh:mm a'), moment('12:00 pm', 'hh:mm a'), moment('1:00 pm', 'hh:mm a'), moment('2:00 pm', 'hh:mm a'), moment('3:00 pm', 'hh:mm a'),  moment('4:00 pm', 'hh:mm a'), moment('5:00 pm', 'hh:mm a')];
let ids= ["#9AM", "#10AM", "#11AM", "#12PM", "#1PM", "#2PM", "#3PM", "#4PM", "#5PM"];

//loops through area and sets background color depending on current time
for(let i=0; i<times.length; i++){
    if (moment(currentDate).isBefore(times[i])){
        $(ids[i]).addClass("future");
    }
    else if(currentDate.isBetween(times[i], times[i+1])){
        $(ids[i]).addClass("present");
    }
    else{
        $(ids[i]).addClass("past");
    }
}


$(".saveBtn").click(function(){
    localStorage.setItem(,$("#9AM").val());
});