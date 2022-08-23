// 3 states of promises:
// uresolved: waiting for something to finish
// resolved: something finished successfully // callback function = then run this code
// rejected: something finished unsuccessfully // callback function = catch

// will see with mostly AJAX requests

const promise = new Promise((resolve, reject) => {
  resolve(); // turns promise into resolved state
});
