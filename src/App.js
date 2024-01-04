// import logo from './logo.svg';
import './App.css';
import React from "react";
import { useState } from "react";

const App = () => {
    let currentDate = new Date().toLocaleDateString() 
    let currentTime = new Date().toLocaleTimeString()
    let day = new Date()
    let currentDay = day.getDay()
    let dayName = ""
    if(currentDay === 0){
      dayName = "Sunday"
    }
    else if(currentDay === 1){
      dayName = "Monday"
    }
    else if(currentDay === 2){
      dayName = "Tuesday"
    }
    else if(currentDay === 3){
      dayName = "Wednesday"
    }
    else if(currentDay === 4){
      dayName = "Thursday"
    }
    else if(currentDay === 5){
      dayName = "Friday"
    }
    else if(currentDay === 6){
      dayName = "Saturday"
    }
    else{
      dayName = "Sunday"
    }
    const[cdate, udate] = useState(currentDate)
    const[ctime, utime] = useState(currentTime)
    const updateDate = () => {
        currentDate = new Date().toLocaleDateString()
        udate(currentDate)
    }
    const updateTime = () => {
        currentTime = new Date().toLocaleTimeString()
        utime(currentTime)
    }
    setInterval(updateDate)
    setInterval(updateTime)
    return <div>
              <div>
                 <h1 class="head">Digital Watch</h1>
              </div>
              <div class="time">
                 <div class="time_row1">
                     <div class="day_date">
                       <p class="Day">{dayName},</p>
                       <p class="date_1"> {cdate}</p>
                     </div>
                     <p class="time_1">{ctime}</p>
                 </div>
              </div>
           </div>
}
export default App;
