window.onload = function () {
  document.getElementById("time1").innerHTML = "32hrs";
  document.getElementById("time2").innerHTML = "10hrs";
  document.getElementById("time3").innerHTML = "4hrs";
  document.getElementById("time4").innerHTML = "4hrs";
  document.getElementById("time5").innerHTML = "5hrs";
  document.getElementById("time6").innerHTML = "2hrs";

  document.getElementById("t1").innerHTML = "36hrs";
  document.getElementById("t2").innerHTML = "8hrs";
  document.getElementById("t3").innerHTML = "7hrs";
  document.getElementById("t4").innerHTML = "5hrs";
  document.getElementById("t5").innerHTML = "10hrs";
  document.getElementById("t6").innerHTML = "2hrs";

  document.getElementById("weekly").style.color = "#fff";
};

document.getElementById("daily").onclick = function () {dailydata();};
 function dailydata() {
  document.getElementById("time1").innerHTML = "5hrs";
  document.getElementById("time2").innerHTML = "1hrs";
  document.getElementById("time3").innerHTML = "0hrs";
  document.getElementById("time4").innerHTML = "1hrs";
  document.getElementById("time5").innerHTML = "1hrs";
  document.getElementById("time6").innerHTML = "0hrs";
  document.getElementById("daily").style.color = "#fff";

  document.getElementById("t1").innerHTML = "7hrs";
  document.getElementById("t2").innerHTML = "2hrs";
  document.getElementById("t3").innerHTML = "1hrs";
  document.getElementById("t4").innerHTML = "1hrs";
  document.getElementById("t5").innerHTML = "3hrs";
  document.getElementById("t6").innerHTML = "1hrs";

  document.getElementById("monthly").style.color = "hsl(236, 100%, 87%)";
  document.getElementById("weekly").style.color = "hsl(236, 100%, 87%)";
};

document.getElementById("weekly").onclick = function () {weekdata();};

function weekdata() {
  document.getElementById("time1").innerHTML = "32hrs";
  document.getElementById("time2").innerHTML = "10hrs";
  document.getElementById("time3").innerHTML = "4hrs";
  document.getElementById("time4").innerHTML = "4hrs";
  document.getElementById("time5").innerHTML = "5hrs";
  document.getElementById("time6").innerHTML = "2hrs";

  document.getElementById("t1").innerHTML = "36hrs";
  document.getElementById("t2").innerHTML = "8hrs";
  document.getElementById("t3").innerHTML = "7hrs";
  document.getElementById("t4").innerHTML = "5hrs";
  document.getElementById("t5").innerHTML = "10hrs";
  document.getElementById("t6").innerHTML = "2hrs";

  document.getElementById("weekly").style.color = "#fff";
  document.getElementById("daily").style.color = "hsl(236, 100%, 87%)";
  document.getElementById("monthly").style.color = "hsl(236, 100%, 87%)";

}

document.getElementById("monthly").onclick = function () {monthdata();};

function monthdata() {
  document.getElementById("time1").innerHTML = "103hrs";
  document.getElementById("time2").innerHTML = "23hrs";
  document.getElementById("time3").innerHTML = "13hrs";
  document.getElementById("time4").innerHTML = "11hrs";
  document.getElementById("time5").innerHTML = "21hrs";
  document.getElementById("time6").innerHTML = "7hrs";

  document.getElementById("t1").innerHTML = "128hrs";
  document.getElementById("t2").innerHTML = "29hrs";
  document.getElementById("t3").innerHTML = "19hrs";
  document.getElementById("t4").innerHTML = "18hrs";
  document.getElementById("t5").innerHTML = "23hrs";
  document.getElementById("t6").innerHTML = "11hrs";

  document.getElementById("monthly").style.color = "#fff";
  document.getElementById("daily").style.color = "hsl(236, 100%, 87%)";
  document.getElementById("weekly").style.color = "hsl(236, 100%, 87%)";

}
