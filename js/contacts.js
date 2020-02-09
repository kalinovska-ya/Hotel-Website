// variables - contacts.html

const form = document.querySelector('.message-form'),
	  messageButton = form.querySelector('.submit-button-message'),
	  requiredFields = form.querySelectorAll('.required'),
	  errors = form.querySelectorAll('.error-message'),
	  allFields = form.querySelectorAll('.field');


const name = form.querySelector('.name'),
	  email = form.querySelector('.email'),
	  textarea = form.querySelector('.textarea');

const modalWindowMessage = document.querySelector('.modal-window-message_sent'),
	  buttonOK = document.querySelector('.buttonOK'),
	  modalMessage = document.querySelector('.modal-window__box'),
	  modalMessageText = document.querySelector('.modal-window__message');



// form checking for correctness - contacts.html

let checkForm = () => {
	let result = true;

	for (let i = 0; i < requiredFields.length; i++) {
		requiredFields[i].classList.remove('error');
		errors[i].style.display = 'none';
	}
	document.getElementById('checkbox-agree-terms').classList.remove('error')
	document.getElementById('error-checkbox').style.display = 'none';
	document.getElementById('label').style.marginBottom = '20px';
	document.getElementById('error-email2').style.display = 'none';


	console.log('clicked on validate');
	console.log('name: ', name.value);
  	console.log('email: ', email.value);
	console.log('textarea: ', textarea.value);
	
	for (let i = 0; i < requiredFields.length; i++) {
		if (!requiredFields[i].value) {
			console.log('field is blank', requiredFields[i]);
			errors[i].style.display = 'block';
			requiredFields[i].classList.add('error');
			result = false;
		}
	}

	if (!document.querySelector('.checkbox-agree-terms').checked) {
		document.getElementById('error-checkbox').style.display = 'block';
		document.getElementById('label').style.marginBottom = '2px';
		document.getElementById('checkbox-agree-terms').classList.add('error');
		result = false;
	}


	let pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (pattern.test(email.value) == false && email.value != '') {
		document.getElementById('email').classList.add('error');
		document.getElementById('error-email2').style.display = 'block';
		result = false;
	}

	return result;

};


// submit and modal window  animation - contacts.html

form.addEventListener('submit', function (event) {
	event.preventDefault();

	if (checkForm() === false ) {
		return false;
	} else {
		modalWindowMessage.style.display = 'block';

		for (let i = 0; i < allFields.length; i++) {
			allFields[i].value = '';
		}

		document.querySelector('.checkbox-agree-terms').checked = false;
	}
});

const closeModalWindow = (event) => {
	 if (event.target == buttonOK || event.which == '27' || (event.target != modalMessage && event.target != modalMessageText)) { 
		modalWindowMessage.style.display = 'none';
		document.removeEventListener('keydown', closeModalWindow, true);
	 }
}


buttonOK.addEventListener('click', closeModalWindow);
document.addEventListener('click', closeModalWindow);
document.addEventListener('keydown', closeModalWindow);

















