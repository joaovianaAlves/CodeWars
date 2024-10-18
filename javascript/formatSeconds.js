function formatDuration(seconds) {
  if (seconds === 0) return "now";

  let year = Math.floor(seconds / (3600 * 24 * 365));
  seconds %= 3600 * 24 * 365;
  let day = Math.floor(seconds / (3600 * 24));
  seconds %= 3600 * 24;
  let hour = Math.floor(seconds / 3600);
  seconds %= 3600;
  let minute = Math.floor(seconds / 60);
  seconds %= 60;
  let timeStamp = [];

  if (year > 0) timeStamp.push(`${year} ${year === 1 ? "year" : "years"}`);
  if (day > 0) timeStamp.push(`${day} ${day === 1 ? "day" : "days"}`);
  if (hour > 0) timeStamp.push(`${hour} ${hour === 1 ? "hour" : "hours"}`);
  if (minute > 0)
    timeStamp.push(`${minute} ${minute === 1 ? "minute" : "minutes"}`);
  if (seconds > 0)
    timeStamp.push(`${seconds} ${seconds === 1 ? "second" : "seconds"}`);

  let filteredTimeStamp = timeStamp.filter((item) => !item.startsWith("0"));

  let result =
    filteredTimeStamp.length > 1
      ? filteredTimeStamp.slice(0, -1).join(", ") +
        " and " +
        filteredTimeStamp.slice(-1)
      : filteredTimeStamp[0];

  return result;
}

console.log(formatDuration(33243586));
