importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
   apiKey: "AIzaSyD7F3acJUd5kuaW6olgnRsOuwy91q2XMKk",
    authDomain: "easydeed-439aa.firebaseapp.com",
    projectId: "easydeed-439aa",
    storageBucket: "easydeed-439aa.appspot.com",
    messagingSenderId: "654423772279",
    appId: "1:654423772279:web:91c4070961b97c57970a72",
    measurementId: "G-GJR32MB1EY"
 };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });