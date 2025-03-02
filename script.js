
function backToHome() {
    window.location.href = "index.html";
}

function gotoQA() {
    window.location.href = "fahimblog.html";
}

function completeTask(taskId, btnId) {
    var task = document.getElementById(taskId).innerText;
    console.log(task);
    var completedTasks = document.getElementById("completed-tasks").innerText;
    var remainingTasks = document.getElementById("remaining-tasks").innerText;
    completedTasks = parseInt(completedTasks);
    remainingTasks  = parseInt(remainingTasks);

    document.getElementById("completed-tasks").innerText = (completedTasks + 1).toString();
    document.getElementById("remaining-tasks").innerText = (remainingTasks - 1).toString();

    const activity = document.createElement("div");
    activity.className = "flex flex-col items-center justify-center p-2 m-4 gap-4 bg-slate-200 rounded-2xl";
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var ampm = hh >= 12 ? 'PM' : 'AM';
    if (hh > 12) {
        hh -= 12;
    }
    else if (hh == 0) {
        hh = 12;
    }
    const currentTime = hh+':'+mm+':'+ss+' '+ampm;
    console.log(currentTime);
    activity.textContent = 'You have completed the task ' + task + 'at ' + currentTime;
    document.getElementById("activities").appendChild(activity);

    alert("Board 🤩 modified successfully!");
    if (remainingTasks == 1) {
        alert("🎉 Congratulations! You've successfully wrapped up all your tasks! 🚀✅");
    }

    document.getElementById(btnId).disabled = true;
    
}

function clearHistory() {
    document.getElementById("activities").innerHTML = "";
}

function themeChange() {
    var color = "#"+(Math.floor(Math.random()*0xffffff)).toString(16);
    document.getElementsByTagName("body")[0].style.backgroundColor = color;

}

const date = new Date();
const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const day = week[date.getDay()];
const dd = String(date.getDate()).padStart(2, '0'); // ensure two digit
const mm = months[date.getMonth()]; // Month Name
const yy = date.getFullYear();
const formattedDate = `${mm} ${dd} ${yy}`;

console.log(day, formattedDate);
document.getElementById("day").innerText = day + ',';
document.getElementById("date").innerText = formattedDate;

