# Listables Media

## What is the Website for?

The website shown was part of a Code Institute Project. I chose to work with the scope of a media company that is showcasing their brand.
The website is to give potential clients a bit more info about the brand itself and provide some blog articles the visitor can read that gives,
them some free social media tips.

You can see the live preview of the site here: https://heinrichhohbach.github.io/Listables-Stream-One/

## Technologies Used

| Technology Name        | Description         | What I used it for |
| ------------- |:-------------:|:-------------:|
| [Bootstrap](https://getbootstrap.com/) | Bootstrap gives the developer a grid like system to work with when using HTML. This allows for easier design and mobile compatibility. | I used Bootstrap to allow me to streamline the mobile and desktop designs and to ensure that they both were responsive no matter what device the user uses. |
|   [JQuery](https://jquery.com/)    | JQuery is a JavaScript library that makes the use of JavaScript a lot easier. JQuery provides the user with a feature-rich API, that is powerful yet easy to use.     | I used JQuery for my validation of the "Contact Us" form. The features already present in JQuery allowed me to implement the validation on each field in the form rather than just on final submission. |
| [Animate.css](https://daneden.github.io/animate.css/) | Animate.css provides the user with a CSS library that includes a wide variety of animations.      | I Animate.css to give the header of my pages a bit more life. The animations make the site feel less static and more engaging. |
| [Google Fonts](https://fonts.google.com/) | Google Fonts provides the user with a wide variety of Fonts that anyone can use to customize their project more. | I used Google Fonts to give the website a bit personality, by not just using generic windows fonts. |
| [QUnit](http://qunitjs.com/) | QUnit is a powerful, easy-to-use JavaScript unit testing framework. It's used by the jQuery, jQuery UI and jQuery Mobile projects and is capable of testing any generic JavaScript code | I used QUnit to test some of my JQuery code. This helped me automate the testing process of those features. |

## Functionalities of the Website

The website is a basic media company type template. It provides the user with a website that shows all the basic information about the brand and has a blog section to allow the user to show some blog posts if needed.
The site also includes a jQuery powered "Contact Us" form that performs the validation of user input to ensure that the fields have the right information entered.

The "Services" section of the website uses a simple accordion JQuery item that allows the user to open and close sections of the site. This increases the readability of the content and adds an interactive aspect to the site itself.

## Testing 

To make the Testing easier to explain, I am setting up the testing in a table format. Using this format I can define what part of the website was tested in which manner. 
The Testing process for the site was the following:

| Website feature Tested        | Process of testing         |
|:-------------:|:-------------:|
| Desktop Website Design | The Desktop Website design was tested using the 'Chrome Browser'. I intitially setup the design and then adjusted the site design by checking on Chrome that the website looked fine and that none of the elements were in the wrong place or out of line. Once that was completed, I opened the website on a PC that had a bigger screen than mine and ensured that the website design still looked the same. This manual testing method is time consuming, but allowed me to make small adjustments to the website so it fit Desktop PCs perfectly. |
| Mobile Website Design | I used the 'Chrome Developer Tools' to test the design of the website on mobile devices. This is a very efficient method of testing for mobile layouts, because the tool allowed me to look at the website using a wide variety of mobile devices. Once I tested that the '@media' CSS queries were working properly using the developer tools, I deployed the site to Github pages and tested the layout on actual mobile devices.|
| Accordion jQuery Feature | I tested the jQuery accordion using the Chrome Browser and the Chrome Developer Tools. I used the two together to make sure that the accordion only showed up on mobile views. The developer tools let you change between the Desktop and Mobile views easily, so I was able to adjust the accordion jQuery to remove any errors that were there. |
| Contact Us Form: Name and Message Fields | I used the jQuery library to write a jQuery script that automatically validates if the user entered any text into the fields. If the user hasn't, the script displays an error message that notifies the user that they missed a field. This testing method allows me to check if the field is empty or not every time the form is used.|
| Contact Us Form: Email Field| I used a jQuery Script to check if a user entered a valid email. The Script checks for the '@' sign and that a url ending is present. This prevents a user from accidentally filling in the field with half their email address or not filling it in at all.|
| Name and Message jQuery Validation Script| Using the QUnit testing framework, I created two short tests to test the 'validateString' method. This automatic method makes it really easy for me to test if a method works or not. |
| Email jQuery Validation Script | Using the QUnit testing framework, I created two short tests to test the 'validateEmail' method. This automatic method makes it really easy for me to test if a method works or not. |

## Deployment

The website was deployed using Github Pages. Github pages allows for a live preview of your website right from the repository. It's easy to setup Github Pages:

1. Go to the "Repository Settings" section of your Project Repository
2. Github pages allows you to decide which source to use as deployment source. I choose to deploy the master branch directly.
3. Once that is setup, you simply push the most recent changes of the project to the Source branch and the live preview is available in seconds.

There isn't a difference between the developer and live version of the Github Page, because I have it setup to work directly with the Master Branch. I found this to be the most convenient for me, because it gives me an easy preview of the final project the user sees.

## Outside Influences

Outside influences for the project were:

1. The basic website outline was influenced by parts of the course content and other media related websites I was able to find online. These websites helped me choose the design of the site and what pages the site should include.
	
2. I used some text from https://blog.kissmetrics.com/facebook-marketing/ for the blog part of the website. No copyright infringement is intended and the content of the article itself belongs to the author on the website linked.
	