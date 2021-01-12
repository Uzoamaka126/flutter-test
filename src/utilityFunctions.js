export const getHumanDate = (isoformat) => {
  var readable = new Date(isoformat); // When we pass the ISO format to the JS Date constructor, the return is "Fri Jul 04 2014 21:06:08 GMT-0400 (Eastern Daylight Time)"
  var m = readable.getMonth(); // returns 6 (note that this number is one less than the number of the month in isoformat)
  var d = readable.getDate(); // returns 15
  var y = readable.getFullYear(); // returns 2012

  // we define an array of the months in a year
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // we get the text name of the month by using the value of m to find the corresponding month name
  var mlong = months[m];
  return d + " " + mlong + " " + y;
};

export const getFullDate = (isoformat) => {
  var readable = new Date(isoformat); // When we pass the ISO format to the JS Date constructor, the return is "Fri Jul 04 2014 21:06:08 GMT-0400 (Eastern Daylight Time)"
  var m = readable.getMonth(); // returns 6 (note that this number is one less than the number of the month in isoformat)
  var d = readable.getDate(); // returns 15
  var y = readable.getFullYear(); // returns 2012
  var dy = readable.getDay();
  var time = readable.getTime();

  // we define an array of the months in a year
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // we get the text name of the month by using the value of m to find the corresponding month name
  var mlong = months[m];
  var day = days[dy]
  return day + " " + mlong + " " + d + " " + y + "," + time;
};
