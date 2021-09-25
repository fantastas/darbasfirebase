
// const firebaseConfig = {
//     apiKey: "AIzaSyBEV0Mw7tlDunJAxT5otEtXJ7T7I6p2I3s",
//     authDomain: "darbas-c7094.firebaseapp.com",
//     projectId: "darbas-c7094",
//     storageBucket: "darbas-c7094.appspot.com",
//     messagingSenderId: "193937865291",
//     appId: "1:193937865291:web:3504e55a271c75dc80abce",
//     measurementId: "G-MD0LGWX62L"
//   };

// const app = firebase.initializeApp(firebaseConfig);



  document.addEventListener("DOMContentLoaded", event =>{
    const app = firebase.app();
    const db = firebase.firestore();
    
    app.auth().onAuthStateChanged((user) => {
        var not_logged_in = document.getElementById('not-logged-in');
        var logged_in = document.getElementById('loggeg-in');
    
        if (user) {
            logged_in.style.display = 'block';
            not_logged_in.style.display = 'none';
            document.getElementById('fbL_login_btn').style.display = 'none';
            document.getElementById('google_login_btn').style.display = 'none';
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          // ...
        } else {
            not_logged_in.style.display = 'block';
            logged_in.style.display = 'none';
            document.getElementById('fbL_login_btn').style.display = 'block';
            document.getElementById('google_login_btn').style.display = 'block';
          // User is signed out
          // ...
        }
      });


      

      

})


function login(event){
    const app = firebase.app();

    event.preventDefault();
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    app.auth().signInWithEmailAndPassword(email, password)
   

    
.then((userCredential) => {
    // Signed in
    var user = userCredential.user;

})
.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
});
}


function logout(){
    const app = firebase.app();

    app.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

}

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        const user = result.user;
        // document.write(`Hello ${user.displayName}`);
        console.log(user);
    })
}


function facebookLogin(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;


    // ...
  });
//   firebase.auth().signInWithRedirect(provider);


}









  




// function getCollectionData(collection_name){
//     const db = firebase.firestore();
//     const allData = db.collection(collection_name);
//     allData.get()
//         .then(posts => {
//             posts.forEach(post => {
//                 data = post.data();
//                 console.log(data);
//             });
//         })
// } 

// function getCollectionAttributeWhere(collection_name){
//         const query = db.collection(collection_name).where('sritis','==', 'IT' );      // gauti pagal kazka fcijom

//         query.get()
//         .then(darbai => {
//                 darbai.forEach(doc => {
//                     data = doc.data();
//                     // document.write(data.sritis + '<br>')

//                 });
//         }) 
// }
    
// function getUser(id){
//         const user = db.collection('users').doc(id);  
//         user.get()
//         .then(doc => {
//             const data = doc.data();
//             // document.write(data.pavadinimas + '<br>');
//             // document.write(data.apie)
//         }) 

// }



   


// function updateUser(e){
//         const db = firebase.firestore();
//         const user = db.collection('users').doc('user1');
//         user.update({
//             pavadinimas: e.target.value,
        
//         });

// }

// function uploadFile(files) {
//         const storageRef = firebase.storage().ref();
//         console.log(storageRef)
//         const imgRef = storageRef.child('horse.jpg');

//         const file = files.item(0);

//         const task = imgRef.put(file)
//         .then(snapshot => {
//             return snapshot.ref.getDownloadURL();   // Will return a promise with the download link
//         })
    
//         .then(downloadURL => {
//         console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
//         return document.querySelector('#cv').setAttribute("href", downloadURL);

//         })
    

        

        
// }






















//  //orderBy pagal kazka galima rikiuoti ir grazinti
//     // const query = db.collection('darbai').orderBy('atttr','desc').limit(1)   
//     // gauti pagal kazka fcijom
//     // firebase storage kur desim user cv's ar kitus doksus


//         // user.onSnapshot(doc => {                                 // real time monitorin
   
//     //         const data = doc.data();
//     //         // document.write(data.pavadinimas + '<br>');
//     //         // document.write(data.apie)
//     //         document.querySelector('#pavadinimas').innerHTML = data.pavadinimas
//     //     }) 

// //    }) 