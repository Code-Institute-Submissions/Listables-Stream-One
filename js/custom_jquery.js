$(document).ready(function () {
    //			<!-- Real-time Validation -->
    //				<!--Name and Message can not be blank-->
    $('#inputName, #inputMessage').on('input', function () {
        if (validateString($(this).val())) {
            $(this).removeClass('invalid').addClass('valid');
        } else {
            $(this).removeClass('valid').addClass('invalid');
        }
    });

    //				<!--Email must be an email -->
    $('#inputEmail').on('input', function () {
        if (validateEmail($(this).val())) {
            $(this).removeClass('invalid').addClass('valid');
        } else {
            $(this).removeClass('valid').addClass('invalid');
            hasErrors = true;
        }
    });

    //			<!-- After Form Submitted Validation-->
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
