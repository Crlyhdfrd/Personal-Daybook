$(document).ready(function () {
  var date = new Date();
  var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
  var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
  var date_time = current_date+" "+current_time;
  document.getElementById("currentDay").innerHTML = date_time;

  $("#clearBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  $(".time").each(function () {
    var time = $(this).attr("id").split("-")[1];

    if (current_time == time) {
      $(this).addClass("present");
      $(this).children("description").addclass("gray-text");
    } else if (current_time < time) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (current_time > time) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  const description = document.querySelector(".description");

  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  $("#hour-9 .time-block").val(localStorage.getItem("9"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
});


