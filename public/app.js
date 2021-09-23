document.addEventListener("DOMContentLoaded", event =>{
    const app = firebase.app();
    const db = firebase.firestore();
    // const user = db.collection('users').doc('user1');  
    // const query = db.collection('darbai').where('sritis','==', 'IT' );      // gauti pagal kazka fcijom
    //orderBy pagal kazka galima rikiuoti ir grazinti
    // const query = db.collection('darbai').orderBy('atttr','desc').limit(1)   
    // gauti pagal kazka fcijom
    // firebase storage kur desim user cv's ar kitus doksus
    })
   
    function getAllUsers(){
        const allUsers = db.collection('users');
        allUsers.get()
            .then(users => {
                users.forEach(user => {
                    data = user.data();
                    console.log(data)
                });
            })
    } 

    // query.get()
    // .then(darbai => {
    //         darbai.forEach(doc => {
    //             data = doc.data();
    //             document.write(data.sritis + '<br>')

    //         });
    //     }) 
    
    // user.get()
    // .then(doc => {
    //     const data = doc.data();
    //     document.write(data.pavadinimas + '<br>');
    //     document.write(data.apie)
    // }) 
    // user.onSnapshot(doc => {                                 // real time monitorin
   
    //         const data = doc.data();
    //         // document.write(data.pavadinimas + '<br>');
    //         // document.write(data.apie)
    //         document.querySelector('#pavadinimas').innerHTML = data.pavadinimas
    //     }) 

//    }) 

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        const user = result.user;
        document.write(`Hello ${user.displayName}`);
        console.log(user);
    })
}

function updateUser(e){
    const db = firebase.firestore();
    const user = db.collection('users').doc('user1');
    user.update({
        pavadinimas: e.target.value,
       
    });

}

function uploadFile(files) {
    const storageRef = firebase.storage().ref();
    console.log(storageRef)
    const imgRef = storageRef.child('horse.jpg');

    const file = files.item(0);

    const task = imgRef.put(file)
    .then(snapshot => {
        return snapshot.ref.getDownloadURL();   // Will return a promise with the download link
    })
 
    .then(downloadURL => {
       console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
       return document.querySelector('#cv').setAttribute("href", downloadURL);

    })
   

     

    
}