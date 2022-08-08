// function makeAjaxRequest(url, method) {
//   if (!method) {
//   	method = 'GET';
//   }
// 	// logic to make request
// }

// makeAjaxRequest('google.com');
// makeAjaxRequest('google.com', 'GET');

function makeAjaxRequest(url, method = "GET") {
  // method = 'GET' is a default argument if no method is specified
  if (!method) {
    method = "GET";
  }
  // logic to make request
}

makeAjaxRequest("google.com");
makeAjaxRequest("google.com", "POST");
// if argument is passed, default argument will not be used

function User(id) {
  this.id = id;
}

// new User(1)

function generateId() {
  return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}
// make user an admin

const user = new User(generateId());
// create user from scratch
createAdminUser();
