Redux Timer
-----------
Your challenge is to build a timer using React and Redux.

Requirements:
1) Display Minutes and Seconds
2) Start Button
3) Stop Button
4) Reset Button
5) Style creatively using whatever CSS tools you prefer

Bonus Points:
1) Display Milliseconds
2) Create a "lap" button that saves the current time and pushes it to an array that displays your overall lap history.

Tips:
*Your Redux state should contain the current time, defaulted to zero.
*You will need a component to display the time, as well as a separate component that contains the timing buttons.
*The setInterval and clearInterval methods will be very helpful.
*Use the Date object to make setting minutes and seconds easier. For example:

let time = new Date(0);
let secs = date.getSeconds();
// 0
let mins = date.getMinutes();
// 0
