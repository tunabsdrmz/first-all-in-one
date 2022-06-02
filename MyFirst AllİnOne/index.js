let dailyBtn = document.getElementById("Daily");
let weeklyBtn = document.getElementById("Weekly");
let monthlyBtn = document.getElementById("Monthly");

dailyBtn.addEventListener("click" , getday);
function getday(){
   document.getElementById("playh1").textContent = "1hr";
   document.getElementById("playp").textContent = "Previous - 2hrs";
   document.getElementById("workh1").textContent = "5hrs";
   document.getElementById("workp").textContent = "Previous - 7hrs";
   document.getElementById("studyh1").textContent = "0hrs";
   document.getElementById("studyp").textContent = "Previous - 1hrs";
   document.getElementById("exerciseh1").textContent = "1hrs";
   document.getElementById("exercisep").textContent = "Previous - 1hrs";
   document.getElementById("socialh1").textContent = "1hrs";
   document.getElementById("socialp").textContent = "Previous - 3hrs";
   document.getElementById("selfcareh1").textContent = "0hrs";
   document.getElementById("selfcarep").textContent = "Previous - 1hrs";
}

weeklyBtn.addEventListener("click" , getweek);
function getweek(){
   document.getElementById("playh1").textContent = "10hrs";
   document.getElementById("playp").textContent = "Previous - 8hrs";
   document.getElementById("workh1").textContent = "32hrs";
   document.getElementById("workp").textContent = "Previous - 36hrs";
   document.getElementById("studyh1").textContent = "4hrs";
   document.getElementById("studyp").textContent = "Previous - 7hrs";
   document.getElementById("exerciseh1").textContent = "4hrs";
   document.getElementById("exercisep").textContent = "Previous - 5hrs";
   document.getElementById("socialh1").textContent = "5hrs";
   document.getElementById("socialp").textContent = "Previous - 10hrs";
   document.getElementById("selfcareh1").textContent = "2hrs";
   document.getElementById("selfcarep").textContent = "Previous - 2hrs";
   
}
monthlyBtn.addEventListener("click", ()=>{
   document.getElementById("playh1").textContent = "23hrs";
   document.getElementById("playp").textContent = "Previous - 29hrs";
   document.getElementById("workh1").textContent = "103hrs";
   document.getElementById("workp").textContent = "Previous - 128hrs";
   document.getElementById("studyh1").textContent = "13hrs";
   document.getElementById("studyp").textContent = "Previous - 19hrs";
   document.getElementById("exerciseh1").textContent = "11hrs";
   document.getElementById("exercisep").textContent = "Previous - 18hrs";
   document.getElementById("socialh1").textContent = "21hrs";
   document.getElementById("socialp").textContent = "Previous - 23hrs";
   document.getElementById("selfcareh1").textContent = "7hrs";
   document.getElementById("selfcarep").textContent = "Previous - 11hrs";
});