$(document).ready(function () {
    // The Name and Message Fields have to be entered to make sure that the website owner can contact them back.
    // This code makes sure that these fields are in fact filled in.
    $('#inputName, #inputMessage').on('input', function () {
        if (validateString($(this).val())) {
            $(this).removeClass('invalid').addClass('valid');
        } else {
            $(this).removeClass('valid').addClass('invalid');
        }
    });

    // The email field needs to be entered correctly to ensure that the website owner can contact the person back.
    // This code makes sure that the email field has a valid email entered.
    $('#inputEmail').on('input', function () {
        if (validateEmail($(this).val())) {
            $(this).removeClass('invalid').addClass('valid');
        } else {
            $(this).removeClass('valid').addClass('invalid');
            hasErrors = true;
        }
    });

    // The fields need to be validated after submission to ensure that the information is correct and passed on.
    //This code performs the validation and then shows a notification if the user input was valid.
    $("#contactform").submit(function (event) {
        event.preventDefault();
        var form_data = $(this).serializeArray();
        var hasErrors = false;
        for (var input in form_data) {
            if (!form_data.hasOwnProperty(input)) {
                continue;
            }
            
            var element = $('#input' + form_data[input]['name']);
            var valid = element.hasClass('valid');
            var error_element = $('span', element.parent());
            if (!valid) {
                error_element.removeClass('error').addClass('error_show');
                hasErrors = true;
            } else {
                error_element.removeClass('error_show').addClass('error');
            }
        }
        
        if (!hasErrors) {
            alert('Thanks for contacting us! We will get back to you as soon as possible!');
            location.reload();
            return true;
        }
    });

    // The accordion used in the Service Page needs this code to function.
    // Without this code the accordion wouldn't open and close.
    $('.accordion-toggle').on('click', function (event) {
        event.preventDefault();
        // create accordion variables
        var accordion = $(this);
        var accordionContent = accordion.next('.accordion-content');

        // toggle accordion link open class
        accordion.toggleClass("open");
        // toggle accordion content
        accordionContent.slideToggle(250);

    });
    
    $('.accordion').click(function (event) {
        event.preventDefault();
        var accordion = $(this);
        var accordionContent = accordion.next('.panelShow');
        
        
        accordion.toggleClass('active');
        accordionContent.toggleClass('panel');
        accordionContent.slideToggle(500);
    });

});

// Validate that a string isn't blank
var validateString = function (value) {
    return value.length > 0;
};

// Validate the email address
var validateEmail = function (email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    return re.test(email);
}
