var i = 0;

function theme() {
    var button = document.getElementById('buttonShape');
    var laravel = document.getElementById('laravel');
    var spans = document.getElementsByClassName('line');
    var bg = document.getElementsByClassName('bg');
    var links = document.getElementsByTagName('a');
    var h5 = document.getElementsByTagName('h5');
    var submitButton = document.getElementById('submitButton');
    var cvC = document.getElementById('cv-c');
    var cvV = document.getElementById('cv-v');

    if (i % 2 == 0) {
        document.body.style.background = 'var(--bg-color-light)';
        document.body.style.color = 'var(--txt-color-light)';
        button.classList.remove('bi-sun-fill');
        button.classList.add('bi-moon-fill');
        laravel.style.color = 'var(--txt-color-dark)';
        bg[0].style.background ='var(--bg-color-light)';
        bg[1].style.background ='var(--bg-color-light)';

        spans[0].style.background = 'var(--txt-color-light)';
        spans[1].style.background = 'var(--txt-color-light)';
        spans[2].style.background = 'var(--txt-color-light)';

        for (var j = 0; j < links.length; j++) {
            if (!links[j].classList.contains('laravel')) {
                links[j].style.color = 'var(--txt-color-light)';
            }
        }
        for (var j = 0; j < h5.length; j++) {
            if (!h5[j].classList.contains('laravel')) {
                h5[j].style.color = 'var(--txt-color-light)';
            }
        }

        submitButton.style.color = 'var(--txt-color-light) !important';
        cvC.style.color = 'var(--bg-color-light) !important';
        cvV.style.color = 'var(--bg-color-light) !important';

    } else {
        document.body.style.background = 'var(--bg-color-dark)';
        document.body.style.color = 'var(--txt-color-dark)';
        button.classList.remove('bi-moon-fill');
        button.classList.add('bi-sun-fill');
        laravel.style.color = 'var(--txt-color-light)';
        bg[0].style.background ='var(--bg-color-dark)';
        bg[1].style.background ='var(--bg-color-dark)';


        spans[0].style.background = 'var(--txt-color-dark)';
        spans[1].style.background = 'var(--txt-color-dark)';
        spans[2].style.background = 'var(--txt-color-dark)';

        for (var k = 0; k < links.length; k++) {
            if (!links[k].classList.contains('laravel')) {
                links[k].style.color = 'var(--txt-color-dark)';
            }
        }

        for (var k = 0; k < h5.length; k++) {
            if (!h5[k].classList.contains('laravel')) {
                h5[k].style.color = 'var(--txt-color-dark)';
            }
        }
        submitButton.style.color = 'var(--txt-color-dark) !important';
        cvC.style.color = 'var(--bg-color-dark) !important';
        cvV.style.color = 'var(--bg-color-dark) !important';
    }
    i++;
}

	

	function changeTheme($this) {
		document.documentElement.style.setProperty('--bg-color-shape', $this.style.background);
	}



document.addEventListener('DOMContentLoaded', () => {
	const github = document.getElementById('github');
	const projects = document.getElementById('projectButton');

	const whatsapp = document.getElementById('contactButtonWhatsApp');

	github.addEventListener('click', () => {
	    window.open('https://github.com/MekdadGhazal/', '_blank');
	});

	projects.addEventListener('click', () => {
	    window.open('portfolio.html#projects', '_self');
	});

	whatsapp.addEventListener('click', () => {
	    window.open('https://wa.me/qr/T7IL66VMKKRTE1' , '_blank');
	});


	// const telegram = document.getElementById('contactButtonTelegram');

	// telegram.addEventListener('click', () => {
	//     window.open('https://t.me/iMekdad' , '_blank');
	// });

	var downloadCV = document.getElementById('download-cv');

	downloadCV.addEventListener('click', () => {

		const pdfUrl = 'MekdadGhazalResume.pdf';

	    const link = document.createElement('a');
	    link.href = pdfUrl;
	    link.download = 'MekdadGhazalResume.pdf';
	    link.style.display = 'none';
	    document.body.appendChild(link);
	    link.click();
	    document.body.removeChild(link);

    });


	document.getElementById("submitButton").addEventListener("click", () => {
	    var name = document.querySelector('input[name="name"]').value;
	    var email = document.querySelector('input[name="email"]').value;
	    var message = document.querySelector('textarea[name="body"]').value;


	    var alertMessageFillFields = document.getElementById('alert-message-fill-fields');
		var alertMessageDomain = document.getElementById('alert-message-domain');
	    
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        	// alert('Please fill in all fields.');

        	alertMessageFillFields.classList.remove('d-none');
	        setTimeout(function() {
	        	alertMessageFillFields.classList.add('d-none');
	         }, 2.5 * 1000);
        	return;
	    }
	    
	    var emailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
	    var emailParts = email.split('@');
	    var domain = emailParts[emailParts.length - 1];
	    
	    if (!emailDomains.includes(domain)) {
	        // alert('Please provide a valid email address from Google, Yahoo, or Hotmail domains.');
	        
	        alertMessageDomain.classList.remove('d-none');
	        setTimeout(function() {
	        	alertMessageDomain.classList.add('d-none');
	         }, 2.5 * 1000);

	        return;
	    }



	    sendEmail(name, email, message);

});


	const dropList = document.getElementById('dropList');
	const lista = document.getElementById('lista');

	var spans = document.getElementsByClassName('line');

	lista.addEventListener('click', () => {
		for (var i = spans.length - 1; i >= 0; i--) {
			spans[i].classList.toggle('active');
		}
        dropList.classList.toggle('visible');
    });

});

function sendEmail(name, email, message) {

	var alertMessageSuccess = document.getElementById('alert-message-success');
	var alertMessageFailed = document.getElementById('alert-message-failed');

    emailjs.send("service_71i8ol3","template_e155ah4",{
        name: name,
        email: email,
        message: message
    }).then(function(response) {
        // console.log("Email sent successfully", response);
        alertMessageSuccess.classList.remove('d-none');
        setTimeout(function() {
        	alertMessageSuccess.classList.add('d-none');
         }, 2.5 * 1000);
    }, function(error) {
        // console.error("Error sending email", error);
        alertMessageFailed.classList.remove('d-none');
        setTimeout(function() {
        	alertMessageFailed.classList.add('d-none');
        }, 2.5 * 1000);
    });
}
