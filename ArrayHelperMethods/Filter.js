var products = [
  {name: 'cucumber', type: 'veggie'},
  {name: 'celery', type: 'veggie'},
  {name: 'apple', type: 'fruit'},
  {name: 'berries', type: 'fruit'}
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
	if (products[i].type === 'fruit') {
  	filteredProducts.push(products[i]);
  }
}

filteredProducts;

// using the filter helper function
products.filter(function(product) {
	return product.type === 'fruit'
});

var products = [
  {name: 'cucumber', type: 'veggie', qty: 0, price: 1},
  {name: 'celery', type: 'veggie', qty: 10, price: 15},
  {name: 'beet', type: 'veggie', qty: 30, price: 3},
  {name: 'berries', type: 'fruit', qty: 3, price: 5}
];

// type is 'veggie', qty > 0, price < 10

products.filter(function(product) {
	return product.type === 'veggie' 
  && product.qty > 0 
  && product.price < 10
});

var post = {id: 4, title: 'new post'};
var comments = [
  {postId: 4, content: 'awesome job'},
  {postId: 3, content: 'youre amazaing'},
  {postId: 4, content: 'excellence'}
];

function commentsForPost(post, comments) {
	return comments.filter(function(comment) {
  	return comment.postId === post.id;
  });
}

commentsForPost(post, comments);