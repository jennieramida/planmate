import * as Firebase from '~/services/firebase'

export const state = () => ({
	UID: '',
	userData: {
		uid: '',
		name: '',
		photoURL: ''
	},
	forms: {
		'key': {
			destinations: [{
				advices: [{
					question: '',
					answer: [{
						userName: '',
						answer: ''
					}]
				}],
				city: '',
				interests: {
					Q: ['', ''],
					A: [{
						userName: '',
						place: [{
							name: '',
							lat: '',
							lng: '',
							photo: '',
							address: ''
						}]
					}]
				},
				lat: '',
				lng: '',
				photo: '',
				placeid: ''
			}],
			id: 'x',
			title: 'x',
			travelType: ''
		}
	},
	// currently answering form
	currentForm: {}
})

export const mutations = {
	setTripData(state, obj) { // obj = {key: 'title', value: 'My happy trip'}
		console.log(obj)
		state.tripData[obj.key] = obj.value
	},
	setUserData(state, obj) { // obj = {key: 'title', value: 'My happy trip'}
		console.log(obj)
		state.userData[obj.key] = obj.value
	},
	setFormData(state, obj) {
		state.formData = obj
	},
	setUID(state, uid) {
		state.UID = uid
	},
	setCurrentForm (state, form) {
		state.currentForm = form
	},
	setExistingForms (state, forms) {
		state.forms = forms.forms
	},
	setDestinationInterests (state, { formId, destinationKey, interest }) {
		const dest = state.forms[formId].destinations[destinationKey]
		if (dest.interests) {
			dest.interests.q.push(interest)
		} else {
			dest.interests = {q: [interest], a: {}}
		}
	},
	setDestinationAdvices (state, { formId, destinationKey, advice }) {
		const dest = state.forms[formId].destinations[destinationKey]
		if (dest.advices) { // ถ้ามีอยู่แล้ว 
			// dest.advices.q.push(advice)
			dest.advices.push({
				q: advice,
				a: []
			})
		} else { // ถ้ายังไม่มี
			dest.advices = [
				{
					q: advice,
					a: []
				}
			]
			// dest.advices = [{advice}, {}]
			/*
				advices = [
					{
						q: 'xxx',
						a: [{
							user: 'name',
							content: 'yyy'
						}]
					}
				]
			*/
		}
	},
	addPlace (state, { formId, destinationKey, place }) {
		const dest = state.forms[formId].destinations[destinationKey]
		console.log(dest)
		// if (dest.interests) {
		// 	dest.interests.a.push(place)
		// } else {
		// 	dest.interests = {q:{}, a: [place]}
		// 	// dest.advices = [{advice}, {}]
			
		// }
	},
	setAdviceAnswer (state, { formId, destinationKey, adviceAnswer }) {
		const dest = state.forms[formId].destinations[destinationKey]
		if (dest.advices) { // ถ้ามีอยู่แล้ว 
			// dest.advices.q.push(advice)
			dest.advices.push({
				q: [],
				a: [adviceAnswer]
			})
		} else { // ถ้ายังไม่มี
			dest.advices = [
				{
					q: [],
					a: adviceAnswer
				}
			]
			// dest.advices = [{advice}, {}]
			/*
				advices = [
					{
						q: 'xxx',
						a: [{
							user: 'name',
							content: 'yyy'
						}]
					}
				]
			*/
		}
	},
}