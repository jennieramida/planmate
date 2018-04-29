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
	}
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
		if (dest.advices) {
			dest.advices.q.push(advice)
		} else {
			dest.advices = {q: [advice], a: {}}
		}
	}
}

export const actions = {
	async nuxtServerInit({ commit }, { req }) {
		return await Firebase.init()
	}
}