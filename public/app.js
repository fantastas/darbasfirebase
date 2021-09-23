document.addEventListener("DOMContentLoaded", event =>{
    const app = firebase.app();
    const db = firebase.firestore();
    const user = db.collection('users').doc('user1');  
    
    user.get()
    .then(doc => {
        const data = doc.data();
        document.write(data.pavadinimas + '<br>');
        document.write(data.apie)
    }) 
//     user.onSnapshot(doc => {                                 // real time monitorin
   
//             const data = doc.data();
//             document.write(data.pavadinimas + '<br>');
//             document.write(data.apie)
//         }) 

   }) 

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        const user = result.user;
        document.write(`Hello ${user.displayName}`);
        console.log(user);
    })
}