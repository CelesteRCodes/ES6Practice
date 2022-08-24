// 3 states of promises:
// uresolved: waiting for something to finish
// resolved: something finished successfully // callback function = then run this code
// rejected: something finished unsuccessfully // callback function = catch

// will see with mostly AJAX requests

// const promise = new Promise((resolve, reject) => {
//   resolve(); // turns promise into resolved state
// });

// promise.then() registers callbacks
// promise.catch() registers callbacks

// promise
//   .then(() => {
//     console.log("promise resolved");
//   })
//   .then(() => {
//     console.log("I was also ran");
//   })
//   .catch(() => {
//     console.log("I was rejected");
//   });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
  // how AJAX requests are handled with promises
});

promise
  .then(() => {
    console.log("promise resolved");
  })
  .then(() => {
    console.log("I was also ran");
  })
  .catch(() => {
    console.log("I was rejected");
  });
