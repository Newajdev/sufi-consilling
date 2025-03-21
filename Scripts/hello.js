document.getElementById('login').addEventListener('click', function(){
    
    var adminusername = 'admin';
    var adminpassword = '123';

    const passtext = document.getElementById('inputpassword').value;
    const usertext = document.getElementById('inputusername').value;
    
    if(passtext == '' && usertext =='' ){
        alert("username & password must be filled out");
        
    }else{
        if (passtext === adminpassword && usertext ===  adminusername){
            window.location.href='admin.html';
    
        }else{
            window.location.href='users.html';
        }
    }

})