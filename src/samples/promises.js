const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Gabriel",
      age: 35
    });
    // reject("Something went wrong!");
  }, 4000);
});

console.log("before");

promise
  .then(data => {
    console.log("1 :", data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: "Olaniyi",
          note: "This is the other promise"
        });
        // reject("Something went wrong!");
      }, 5000);
    });
  })
  .then(str => {
    console.log("Does this run?", str);
  })
  .catch(error => {
    console.log("error: ", error);
  });

console.log("after");
