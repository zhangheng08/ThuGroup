var config = {
    apiKey: "AIzaSyBkY-CDKORz3mw2PLnDKvZJN3Is7CPeOs4",
    authDomain: "smartsensor-group.firebaseapp.com",
    databaseURL: "https://smartsensor-group.firebaseio.com",
    projectId: "smartsensor-group",
    storageBucket: "smartsensor-group.appspot.com",
    messagingSenderId: "774007246507"
};

var fireBaseApp = firebase.initializeApp(config);

var database = firebase.database();

var storage = firebase.storage();

var uiConfig = {

    signInSuccessUrl: '/auth/prof',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '/auth/prof'

};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

function getDateStr(timeStamp) {

    var d = new Date(timeStamp);

    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    var monthStr = month < 10 ? "0" + month : "" + month;
    var dayStr = day < 10 ? "0" + day : "" + day;
    var hStr = h < 10 ? "0" + h : "" + h;
    var mStr = m < 10 ? "0" + m : "" + m;
    var sStr = s < 10 ? "0" + s : "" + s;

    var timeStr = year + "-" + monthStr + "-" + dayStr + " " + hStr + ":" + mStr + ":" + sStr;

    return timeStr;

}