const firebaseConfig = {
    apiKey: "AIzaSyCx22fffbdaJ_fbaoKA-W22r-T-dxy3cpM",
    authDomain: "contact-form-2d6bd.firebaseapp.com",
    databaseURL: "https://contact-form-2d6bd-default-rtdb.firebaseio.com",
    projectId: "contact-form-2d6bd",
    storageBucket: "contact-form-2d6bd.appspot.com",
    messagingSenderId: "598711527863",
    appId: "1:598711527863:web:abda64719903b3150a6032",
    measurementId: "G-823KF1BHCC"
  };


  firebase.initializeApp(firebaseConfig);



  var contactformDB = firebase.database().ref('contact form')

  document.getElementById('contactform').addEventListener('submit', submitform)
 
  
  function submitform(e){
        e.preventDefault();

        var username = getElementByVal('username');
        var address = getElementByVal('address');
        var pincode = getElementByVal('pincode');
        var time = getElementByVal('time');
        var date = getElementByVal('date');

        saveMessages ( username , address, pincode , time , date );

        // console.log( username , address, pincode , time , date );

        document.querySelector('.alert').style.display="block";

        setTimeout(() => {
            document.querySelector('.alert').style.display="none";
            
        }, 3000);


        document.getElementById('contactform').request();

        
        
  }

  const saveMessages =(username , address, pincode , time , date) => {
    var newcontactform = contactformDB.push();

    newcontactform.set({
        username : username,
        address : address,
        pincode : pincode,
        time : time,
        date : date,
    });
    window.location.href = "index.html";
    

  };


  const getElementByVal = (id) =>{
    return document.getElementById(id).value;
  };