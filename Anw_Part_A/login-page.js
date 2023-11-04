// Document is ready
$(document).ready(function (e) {

    // e.preventDefault();
    // Validate Username
    $("#submitbtn").prop("disabled", true);
    $("#usercheck").hide();
    let usernameError = false;
    $("#usernames").keyup(function () {
        validateUsername();
        checkSubmitButtonState();
    });

    function validateUsername() {
        let usernameValue = $("#usernames").val();
        let regex = /^[A-Za-z0-9]+$/;
        if (usernameValue.length == "") {
            $("#usercheck").show();
            $("#usercheck").html("** username should not be empty");
            usernameError = false;
            return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 25) {
            $("#usercheck").show();
            $("#usercheck").html("**length of username must be between 3 and 25");
            usernameError = false;
            return false;
        } else if (!regex.test(usernameValue)) {
            $("#usercheck").show();
            $("#usercheck").html("**special characters are not allowed");
            usernameError = false;
            return false;
        } else {
            $("#usercheck").hide();
            usernameError = true;
            // return true;
        }
        checkSubmitButtonState();
    }

    // Validate Email
    $("#emailcheck").hide();
    let emailError = false;
    $("#emails").keyup(function () {
        validateEmail();
        checkSubmitButtonState();
    });

    function validateEmail() {
        let emailValue = $("#emails").val();
        // let regex2 = /^([\w\.]+)@northeastern.edu$/;
        const regex2 = /^[a-zA-Z0-9._-]+@northeastern\.edu$/;
        if (emailValue.length == "") {
            $("#emailcheck").show();
            $("#emailcheck").html("**Email should not be empty");
            emailError = false;
            return false;
        } else if (!regex2.test(emailValue)) {
            $("#emailcheck").show();
            $("#emailcheck").html("**please provide valid northeastern email id");
            emailError = false;
            return false;
        } else if (emailValue.length < 19) {
            $("#emailcheck").show();
            $("#emailcheck").html("**there should atleast be 2 characters before '@'");
            emailError = false;
            return false;
        } 
        else if (emailValue.length > 50) {
            $("#emailcheck").show();
            $("#emailcheck").html("**length of email should not exceed 30");
            emailError = false;
            return false;
        } else {
            $("#emailcheck").hide();
            emailError = true;
            //  return false;
        }
        checkSubmitButtonState();
    }

    $("#passcheck").hide();
    $("#confirm-passcheck").hide();

    let passwordError = false;
    // let regex3 = new RegExp("^(?=.*[a-z])");
    let regex3 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])");
    // let regex4 = new RegExp("^(?=.*[A-Z])");
    let regex4 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])");

    // let regex5 = new RegExp("^(?=.*[0-9])");
    let regex5 = new RegExp("^(?=.*[0-9])");

    
    $("#password").keyup(function () {
        validatePassword();
        checkSubmitButtonState();
    });

    $("#confirm-password").keyup(function () {
        validateConfirmPassword(); // Add this line
        checkSubmitButtonState();
    });

    function validatePassword() {
        let passwordValue = $("#password").val();
        let confirmPasswordValue = $("#confirm-password").val();
    
        if (passwordValue.length == 0) {
            $("#passcheck").show();
            $("#passcheck").html("**password should not be empty");
            passwordError = false;
            return false;
        }

        else if (passwordValue.length < 6 || passwordValue.length > 12) {
            $("#passcheck").show();
            $("#passcheck").html("**length of password must be between 6 and 12");
            // $("#passcheck").css("color", "red");
            passwordError = false;
            return false;
        } 
        
        else if (!regex3.test(passwordValue)) {
            $("#passcheck").show();
            $("#passcheck").html("**password must contain at least 1 lowercase alphabetical character");
            passwordError = false;
            return false;
        } 
        
        else if (!regex4.test(passwordValue)) {
            $("#passcheck").show();
            $("#passcheck").html("**password must contain at least 1 uppercase alphabetical character");
            passwordError = false;
            return false;
        } 
        
        else if (!regex5.test(passwordValue)) {
            $("#passcheck").show();
            $("#passcheck").html("**password must contain at least 1 numeric character");
            passwordError = false;
            return false;
        }  
        
        else if (confirmPasswordValue !== passwordValue) {
            $("#passcheck").hide();
            $("#confirm-passcheck").show();
            $("#confirm-passcheck").html("**passwords do not match");
            passwordError = false;
            return false;
        } 
        
        else {
            $("#passcheck").hide();
            $("#confirm-passcheck").hide();
            passwordError = true;
            // return true;
        }
        checkSubmitButtonState();
    }
    
    

    function validateConfirmPassword() {
        let passwordValue = $("#password").val();
        let confirmPasswordValue = $("#confirm-password").val();

        if (confirmPasswordValue.length == 0) {
            $("#confirm-passcheck").show();
            $("#confirm-passcheck").html("**password should not be empty");
            passwordError = false;
            return false;
        }
        else if (confirmPasswordValue !== passwordValue) {
            $("#confirm-passcheck").show();
            $("#confirm-passcheck").html("**passwords do not match");
            passwordError = false;
            return false;
        } else {
            $("#confirm-passcheck").hide();
            passwordError = true;
            // return true;
        }
        checkSubmitButtonState();
    }

    function checkSubmitButtonState() {
        if (usernameError && emailError && passwordError) {
            $("#submitbtn").prop("disabled", false);
        } else {
            $("#submitbtn").prop("disabled", true);
        }
    }


    $("#submitbtn").click(function (e) {
        // e.preventDefault(); 
        // const usernameValid = validateUsername();
        // const emailValid = validateEmail();
        // const passwordValid = validatePassword();
        // const confirmValid = validateConfirmPassword();

    if(usernameError && passwordError && emailError) 
        {
            localStorage.setItem("username", $("#usernames").val());
            return true;

        } else {
            // alert("Please fill the form properly");
            return false;
        }
    });
});