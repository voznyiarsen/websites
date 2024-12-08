
function timeHour() {
  const d = new Date();
  document.getElementById("timehours").textContent = d.getHours();
}
function timeMin() {
  const d = new Date();
  document.getElementById("timeminutes").textContent = d.getMinutes();
}
setTimeout(timeHour, 0.001);
setTimeout(timeMin, 0.001);
setInterval(timeHour, 1000);
setInterval(timeMin, 1000);