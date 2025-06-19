const { DateTime } = require("luxon");

exports.localTime = () => {
  let date = DateTime.now().setZone("UTC+6");
  let ampm = "";
  if (date.c.hour >= 12 && date.c.hour <= 23) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  if (date.c.hour > 12) {
    date.c.hour = date.c.hour - 12;
  }
  if (date.c.hour === 0) {
    date.c.hour = 12;
  }

  if (date.c.hour < 10) {
    date.c.hour = "0" + date.c.hour;
  }
  if (date.c.minute < 10) {
    date.c.minute = "0" + date.c.minute;
  }
  if (date.c.second < 10) {
    date.c.second = "0" + date.c.second;
  }
  
  const dateObject = {
    date: date.toLocaleString(DateTime.DATE_FULL),
    time: date.toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET),
    formatedTime:
      date.c.hour + ":" + date.c.minute + ":" + date.c.second + " " + ampm,
  };
  return dateObject;
};