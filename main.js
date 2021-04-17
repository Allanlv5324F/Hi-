var firebaseConfig = {
  apiKey: "AIzaSyBUIklFohTsyFQdf55ZGX7YZ5MxRw0FqEc",
  authDomain: "baby-21d7f.firebaseapp.com",
  databaseURL: "https://baby-21d7f-default-rtdb.firebaseio.com",
  projectId: "baby-21d7f",
  storageBucket: "baby-21d7f.appspot.com",
  messagingSenderId: "842298230182",
  appId: "1:842298230182:web:f789ea98ace097b56c3b67",
  measurementId: "G-SBLJDZXB7T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
getData();

function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "chat_page.html";
}

function logout()
{
  window.location = "index.html";
}

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
 room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
       purpose : "Adding room name"
 });
 localStorage.setItem("room_name",room_name);
 window.location = "messgae_page.html";
} 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names
      +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
   function send()
   {
         msg = document.getElementById("msg").value;
         firebase.database().ref(room_name).push({
         name : user_name,
         message : msg,
         like : 0
         });
         document.getElementById("msg").value = "";
   }
   
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "message_page.html";
}
