const firebaseConfig = {
      apiKey: "AIzaSyCUB6tQwozT0rjxeyyRaGab8r5loTSU2Dc",
      authDomain: "kwitter-e92b4.firebaseapp.com",
      databaseURL: "https://kwitter-e92b4-default-rtdb.firebaseio.com",
      projectId: "kwitter-e92b4",
      storageBucket: "kwitter-e92b4.appspot.com",
      messagingSenderId: "114483883430",
      appId: "1:114483883430:web:4de48014bc105c35253367",
      measurementId: "G-20K6CEQB8N"
    };

    firebase.initializeApp(firebaseConfig);

    user_name  = localStorage.getItem("usernamekey");

    document.getElementById("name").innerHTML = "Hey " + user_name + "!" ;

    function addroom()
    {
       room_name = document.getElementById("roomname").value;

       firebase.database().ref("/").child(room_name).update({

purpose: "adding room name"

       });

    localStorage.setItem("roomnamekey",room_name);

    }