import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyB2MymBqKe5AFxUtMiVAsy2LVIHIN9Awv4",
    authDomain: "assurlytest.firebaseapp.com",
    projectId: "assurlytest",
    storageBucket: "assurlytest.appspot.com",
    messagingSenderId: "271658075723",
    appId: "1:271658075723:web:99ee2a4a38158cefb0afce",
    atabaseURL: "https://assurlytest-default-rtdb.firebaseio.com",
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


var _generatedUIDs = {};
function generateUID() {
    while (true) {
        var uid = ("0000" + ((Math.random() * Math.pow(36, 4)) | 0).toString(36)).slice(-4);
        if (!_generatedUIDs.hasOwnProperty(uid)) {
            _generatedUIDs[uid] = true;
            return uid;
        }
    }
}

var userId = generateUID()


function getValue_() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var birthday = document.getElementById("birthday").value;

    var now = new Date();
    var annee = now.getFullYear();
    var mois = now.getMonth() + 1;
    var jour = now.getDate();
    var heure = now.getHours();
    var minute = now.getMinutes();
    var seconde = now.getSeconds()
    var date = (jour + "/" + mois + "/" + annee + " - " + heure + ":" + minute + ":" + seconde)


    function writeUserData() {
        set(ref(db, 'users/' + userId), {
            firstname: firstname,
            lastname: lastname,
            birthday: birthday,
            date: date
        });
    }
    writeUserData()
}


export default getValue_;
