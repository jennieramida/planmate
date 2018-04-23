import firebase from 'firebase'

// Initialize Firebase
const config = {
	apiKey: "AIzaSyDzRVkzJTF0KCSt7dPh6t78QPzIB4r9uaw",
	authDomain: "thesis-jennie.firebaseapp.com",
	databaseURL: "https://thesis-jennie.firebaseio.com",
	projectId: "thesis-jennie",
	storageBucket: "thesis-jennie.appspot.com",
	messagingSenderId: "268204212440"
}

function init () {
	console.log('init firebase')
	if (!firebase.apps.length) return firebase.initializeApp(config)
}

function updateForm (id, tripData = {}) {
	return firebase
		.database()
		.ref('form/' + id)
		.set(tripData)
}

function retrieveForm (id) {
	return firebase
		.database()
		.ref('/form/' + id)
		.once('value')
}

export {
	init,
	updateForm,
	retrieveForm
}