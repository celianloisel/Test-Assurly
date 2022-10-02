
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";


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
const users = ref(db, 'users')

var secu = new Array();

function tab() {

    onValue(users, (snapshot) => {
        // var body = document.getElementsByTagName("body")[0]

        var tbl = document.getElementsByTagName("table")[0]
        var tblbody = document.createElement("tbody")

        var data = snapshot.val()
        var i = 0;


        for (const [key, value] of Object.entries(data)) {

            if (key !== secu[i]) {
                var row = document.createElement("tr")

                var cell = document.createElement("td")
                var celltext = document.createTextNode(value.firstname)
                cell.appendChild(celltext)
                row.appendChild(cell)

                var cell = document.createElement("td")
                var celltext = document.createTextNode(value.lastname)
                cell.appendChild(celltext)
                row.appendChild(cell)

                var cell = document.createElement("td")
                var celltext = document.createTextNode(value.birthday)
                cell.appendChild(celltext)
                row.appendChild(cell)

                var cell = document.createElement("td")
                var celltext = document.createTextNode(value.date)
                cell.appendChild(celltext)
                row.appendChild(cell)

                tblbody.appendChild(row)

                secu.splice(i, 0, key)
            }
            i = i + 1
        }


        tbl.appendChild(tblbody)

        tbl.setAttribute("Border", 2)

    })
}


export default tab;