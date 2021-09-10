var firebaseConfig = {
    apiKey: "AIzaSyAfVBD8HXNV-80oSCWBSHRihe1fgvB_bLM",
    authDomain: "kwitter-ef820.firebaseapp.com",
    databaseURL: "https://kwitter-ef820-default-rtdb.firebaseio.com",
    projectId: "kwitter-ef820",
    storageBucket: "kwitter-ef820.appspot.com",
    messagingSenderId: "912498079470",
    appId: "1:912498079470:web:e932d8734b464e4fd8e5ff"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update
({purpose : "adding user"});
}