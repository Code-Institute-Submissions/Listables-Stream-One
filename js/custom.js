function validateName() {

    var name = document.getElementById('inputName').value;

    if (name.length == 0) {

        producePrompt('Name is required', 'nameError', 'red')
        return false;

    } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

        producePrompt('Please enter your Name and Surname', 'nameError', 'red');
        return false;

    } else {
        document.getElementById('nameError').style.display = 'none';
    }

}

function validateEmail() {

    var email = document.getElementById('inputEmail').value;

    if (email.length == 0) {

        producePrompt('Email required', 'emailError', 'red');
        return false;

    } else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        producePrompt('Email Invalid', 'emailError', 'red');
        return false;

    } else {
        document.getElementById('emailError').style.display = 'none';
    }

}

function validateMessage() {
    var message = document.getElementById('inputMessage').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        producePrompt(left + ' more characters required', 'messageError', 'red');
        return false;
    }
    else {
        document.getElementById('messageError').style.display = 'none';
    }

}

function validateForm() {
    if (name.length == 0 || email.length == 0 || message.length == 0) {
        producePrompt('Please enter a Name and Surname', 'nameError', 'red');
        producePrompt('Please enter an Email', 'emailError', 'red');
        producePrompt('Message can not be empty', 'messageError', 'red');
    } else if (name.length == 0 || message.length == 0) {
        producePrompt('Please enter a Name and Surname', 'nameError', 'red');
        producePrompt('Message can not be empty', 'messageError', 'red');
    } else if (email.length == 0 || message.length == 0) {
        producePrompt('Please enter an Email', 'emailError', 'red');
        producePrompt('Message can not be empty', 'messageError', 'red');
    } else if (name.length == 0 || email.length == 0) {
        producePrompt('Please enter a Name and Surname', 'nameError', 'red');
        producePrompt('Please enter an Email', 'emailError', 'red');
    } else {
        document.getElementById('alertTest').style.display = 'block';
    }
}

function producePrompt(message, promptLocation, color) {

    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}
