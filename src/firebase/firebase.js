import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAR1FfFPnAZ2U7dZfWn5JibMYl0fD4SLCQ",
  authDomain: "iexpense-41683.firebaseapp.com",
  databaseURL: "https://iexpense-41683.firebaseio.com",
  projectId: "iexpense-41683",
  storageBucket: "iexpense-41683.appspot.com",
  messagingSenderId: "403104639957"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref("expenses").on("child_removed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").on("child_changed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").on("child_added", snapshot => {
  console.log(snapshot.key, snapshot.val());
});
// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(val);
// });
// database.ref("expenses").push({
//   description: "Bought condoms",
//   note: "Actor never dies",
//   amount: "€10,50",
//   createdAt: "11:30"
// });

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Error fetching data : ", e);
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 3500);

// setTimeout(() => {
//   database.ref().off("value");
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(33);
// }, 10500);

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fetching data : ", e);
//   });
// database.ref().set({
//   name: "Gabriel Olaniyi",
//   age: 33,
//   stressLevel: 6,
//   job: {
//     title: "software developer",
//     company: "Google"
//   },
//   isSingle: false,
//   location: {
//     city: "Berlin",
//     Country: "Germany"
//   }
// });

// database
//   .ref("location/city")
//   .set("Berlin")
//   .then(() => {
//     console.log("data changed successfully");
//   })
//   .catch(e => {
//     console.log("Error changing data:", e);
//   });

// database.ref().set("This is my Data.");

// database.ref("age").set(35);
// database.ref("location/city").set("Poznan");
// database.ref("location/Country").set("Poland");

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database
//   .ref("attributes")
//   .set({
//     height: "187cm",
//     weight: "90kg"
//   })
//   .then(() => {
//     console.log("This is the resolved msg!");
//   })
//   .catch(e => {
//     console.log("This is errer: ", e);
//   });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch(e => {
//     console.log("Removal was unsuccessful");
//   });
