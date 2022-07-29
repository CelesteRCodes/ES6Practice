var users = [
  {name: 'Jill'},
  {name: 'Alex'},
  {name: 'Bill'}
];

var user;

for (var i = 0; i < users.length; i++) {
	if (users[i].name === 'Alex') {
   user = users[i];
    break; // stop the loop after finding what you want
  }
}

console.log(user);

var users = [
  {name: 'Jill'},
  {name: 'Alex'},
  {name: 'Bill'}
];

users.find(function(user) {
	return user.name === 'Alex'
});

// will iterate until it finds the first element that returns true;
// if there are multiple that would return true, 
// only the first one will be returned

function Car(model) {
	this.model = model;
}

var cars = [
	new Car ('Buick'),
  new Car ('Camaro'),
  new Car ('Focus'),
];

cars.find(function(car) {
	return car.model === 'Focus';
});


var posts = [
  {id: 1, title: 'new post'},
  {id: 2, title: 'old post'}
];

var comment = {postId: 1, content: 'great'};

function postForComment(posts, comment) {
	return posts.find(function(post) {
  	return post.id === comment.postId;
  });
}

postForComment(posts, comment);


