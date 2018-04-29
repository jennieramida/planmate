import firebase from 'firebase'

function init () {
	const config = {
		apiKey: "AIzaSyDzRVkzJTF0KCSt7dPh6t78QPzIB4r9uaw",
		authDomain: "thesis-jennie.firebaseapp.com",
		databaseURL: "https://thesis-jennie.firebaseio.com",
		projectId: "thesis-jennie",
		storageBucket: "thesis-jennie.appspot.com",
		messagingSenderId: "268204212440"
	}
	if (!firebase.apps.length) return firebase.initializeApp(config)
	return
}

function updateForm (uid, formId, data = {}) {
	return firebase
		.database()
		.ref('/user/' + uid + '/forms/' + formId)
		.update(data)
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