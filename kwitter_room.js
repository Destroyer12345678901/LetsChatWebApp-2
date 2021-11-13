var firebaseConfig = {
    apiKey: "AIzaSyAcPMUnYkjlLp8W4hAZRuf8ES9Mh1-_BK0",
    authDomain: "covid19boot-dajv.firebaseapp.com",
    projectId: "covid19boot-dajv",
    storageBucket: "covid19boot-dajv.appspot.com",
    messagingSenderId: "771166327671",
    appId: "1:771166327671:web:e8e410e8839a10256ac772"
  };

// Initialize Firebase
var app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
  document.getElementById("room_make").value;
  localStorage.setItem("room_name", room_name);
}

//Start code
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//End code
});});}
getData();