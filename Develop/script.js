var btnEl = $(".btn")
var today = dayjs()
$(currentDay).text(today.format('MMM-D-YYYY H:mm A'));


function saveEvents() {
  const id = $(this).parent().attr("id")
  const enteredText = $(this).siblings("textarea").val()
  //save to local storage
  localStorage.setItem(id, enteredText)
}


//check local storage on page load
btnEl.on('click', saveEvents);

//align block color with time
timeNow = today.format("HH");
$(".time-block").each(function () {
  var blockTime = parseInt($(this).attr("id").split("-")[1]);
  if (blockTime < timeNow) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  }
  else if (blockTime == timeNow) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  }
  else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
})

// Save to local storage
$('#hour-09').children("textarea").val(localStorage.getItem('hour-09'));
$('#hour-10').children("textarea").val(localStorage.getItem('hour-10'));
$('#hour-11').children("textarea").val(localStorage.getItem('hour-11'));
$('#hour-12').children("textarea").val(localStorage.getItem('hour-12'));
$('#hour-13').children("textarea").val(localStorage.getItem('hour-13'));
$('#hour-14').children("textarea").val(localStorage.getItem('hour-14'));
$('#hour-15').children("textarea").val(localStorage.getItem('hour-15'));
$('#hour-16').children("textarea").val(localStorage.getItem('hour-16'));
$('#hour-17').children("textarea").val(localStorage.getItem('hour-17'));

