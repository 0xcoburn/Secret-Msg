document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	const input = document.querySelector('#message-input');
	console.log(input.value);
	const encrypted = btoa(input.value);
	console.log(encrypted);

	document.querySelector('#link-input').value = `${window.location}#${encrypted}`;
});
