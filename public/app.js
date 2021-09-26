document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();
    checkLogInStatus();
        


})

function checkLogInStatus(){
    const app = firebase.app();
    if(window.location == 'index.html'){
        app.auth().onAuthStateChanged(user => {
            if(!user) {
            window.location = 'login.html'; 
            }
        });
}
}


function login(event){
    const app = firebase.app();

    event.preventDefault();
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    app.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location = 'index.html';
        // console.log(userCredential);
     })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById('error').innerHTML = error.message;
    });
}

function createAccount(event){
    event.preventDefault();
    const app = firebase.app();
    email = document.getElementById('email-create').value;
    password = document.getElementById('password-create').value;
    app.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

}

function logout(){
    const app = firebase.app();

    app.auth().signOut().then(() => {
        window.location = 'login.html';

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
        window.location = 'index.html';
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
    window.location = 'index.html';


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

