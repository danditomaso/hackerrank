{
  // const input = "07:05:45PM";
  const input = "11:40:22AM";

  function timeConversion(s: string): string {
    const [hour, minute, rawSecond] = s.split(":");
    console.log(hour, minute, rawSecond);
    let convertedTime = "";

    const second = rawSecond.slice(0, 2);
    const TOD = rawSecond.slice(2);

    // if time of day is AM go into this if statement
    if (TOD == "AM") {
      if (hour === "12") {
        convertedTime = `00:${minute}:${second}`;
        return convertedTime;
      }
      convertedTime = `${hour}:${minute}:${second}`;
    }

    if (TOD === "PM") {
      if (hour === "12") {
        convertedTime = `${hour}:${minute}:${second}`;
        return convertedTime;
      }
      convertedTime = `${parseInt(hour) + 12}:${minute}:${second}`;
    }

    return convertedTime;
  }

  console.log(timeConversion(input));
}

// 07:05:45PM
// Output: 19:05:45
// Split it by colon, then slice the AM/PM from second variable
