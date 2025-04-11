document.addEventListener("DOMContentLoaded", function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split("; ");
    let cookie = cookieArray.find((row) => row.startsWith(name + "="));
    return cookie ? cookie.split("=")[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }

  // 1. Get the value of the 'count' cookie
  // 2. If the cookie exists, increment the value and update the cookie
  // 3. If the cookie does not exist, create it and set the value to 1
  // 4. Display the count on the webpage

  // Get the current count from cookies
  let count = getCookie("count");

  // Initialize cookie if it doesn't exist or increment existing value
  if (count === null) {
    // First visit - set count to 1
    count = 1;
  } else {
    // Return visit - parse and increment count
    count = parseInt(count) + 1;
  }

  // Update the cookie with the new count value (expires in 30 days)
  setCookie("count", count, 30);

  // Display the count on the webpage
  document.getElementById("countDisplay").textContent = count;
});
