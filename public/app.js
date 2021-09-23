document.addEventListener("DOMContentLoaded", event =>{
    const app = firebase.app();
    console.log(app);
});


FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});


function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }