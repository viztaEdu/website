function validateEmailForm(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var errDiv = document.getElementById('errors');
    var error = '';
    var focusElem;
    if(name.value.length == 0){
        error += "Name is required<br />";
        focusElem = name;
    }

    if(email.value.length == 0){
        error += "Email is required<br />";
        if(focusElem == undefined){
            focusElem = email;
        }
    }

    if(error.length > 0){
        errDiv.innerHTML = error;
        focusElem.focus();
        return false;
    }
    return true;
}