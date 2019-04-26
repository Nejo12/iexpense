import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

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

// // database
// //   .ref("location/city")
// //   .set("Berlin")
// //   .then(() => {
// //     console.log("data changed successfully");
// //   })
// //   .catch(e => {
// //     console.log("Error changing data:", e);
// //   });

// database.ref("age").set(35);
// // database.ref("location/city").set("Poznan");
// // database.ref("location/Country").set("Poland");

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
//     // console.log("This is the resolved attribute msg!");
//   })
//   .catch(e => {
//     console.log("This is errer: ", e);
//   });

// // database
// //   .ref("isSingle")
// //   .remove()
// //   .then(() => {
// //     console.log("Data was removed");
// //   })
// //   .catch(e => {
// //     console.log("Removal was unsuccessful");
// //   });

// database.ref("expenses").push({
//   description: "WBread",
//   note: "Wheat bread for sandwish",
//   amount: "€3,00",
//   createdAt: "12:00"
// });

// database.ref("expenses").push({
//   description: "sweet bread",
//   note: "fortea",
//   amount: "€2,50",
//   createdAt: "12:30"
// });

// database.ref("expenses").push({
//   description: "bill",
//   note: "So much to pay",
//   amount: "€35,50",
//   createdAt: "13:00"
// });

// database.ref("expenses").on("value", snapshot => {
//   const val = snapshot.val();
//   // console.log(val);
// });

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log("child removed: ", snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log("child changed: ", snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log("child added: ", snapshot.key, snapshot.val());
// });

// // database
// //   .ref("expenses")
// //   .once("value")
// //   .then(snapshot => {
// //     const expenses = [];
// //     snapshot.forEach(childSnapshot => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref("expenses").on(
// //   "value",
// //   snapshot => {
// //     const expenses = [];
// //     snapshot.forEach(childSnapshot => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   },
// //   e => {
// //     console.log("Error fetching data : ", e);
// //   }
// // );

// // setTimeout(() => {
// //   database.ref("age").set(30);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref("age").off("value");
// // }, 7000);

// // setTimeout(() => {
// //   database.ref("age").set(33);
// // }, 10500);

// // database
// //   .ref()
// //   .once("value")
// //   .then(snapshot => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch(e => {
// //     console.log("Error fetching data : ", e);
// //   });
