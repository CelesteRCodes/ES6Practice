// can enter 'fetch' on browser console
// returns function fetch() {[native code]}

url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url);
// paste in console
// returns Promist {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}

fetch(url).then((data) => console.log(data));
// paste in console
// returns object of response we got from server
// response does not contain data immediately

fetch(url).then((response) => response.json());
// turns response into data

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
// returns list of objects = data from endpoint requests

url = "https://jsonplaceholder.typicode.com/posts123456/";
// expects server to throw 404 for url returning catch statement

fetch(url)
  .then((response) => console.log(response))
  .catch((error) => console.log("error", error));

// if server returns error code, it doesn't enter catch statement
// only hits if network request failed to be made

url = "https://jsonplaceholder.typicode123.com/posts123456/";

// this url would throw a network request failure
