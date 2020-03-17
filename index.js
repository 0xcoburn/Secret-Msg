// If there is a hash in the url set the value of message to hash
const { hash } = window.location;
const message = atob(window.location.hash.replace('#', ''));

// If message exists display message
if (message) {
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#message-show').classList.remove('hide');
	document.querySelector('h1').innerHTML = message;
}

/*
Default .index.html form and 
event listener submit to encrypt message from input
*/
document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#link-form').classList.remove('hide');

	const input = document.querySelector('#message-input');
	console.log(input.value);
	const encrypted = btoa(input.value);
	console.log(encrypted);

	const linkInput = document.querySelector('#link-input');
	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();
});
