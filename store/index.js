import * as Firebase from '~/services/firebase'

export const state = () => ({
    userData: {},
    tripData: {
        destinations: []
    },
    formData: {}
})

export const mutations = {
    setTripData (state, obj) { // obj = {key: 'title', value: 'My happy trip'}
        console.log(obj)
        state.tripData[obj.key] = obj.value
    },
    setUserData (state, obj) { // obj = {key: 'title', value: 'My happy trip'}
        console.log(obj)
        state.userData[obj.key] = obj.value
    },
    setFormData (state, obj) {
        state.formData = obj
    }
}

export const actions = {
    async nuxtServerInit ({ commit }, { req }) {
        return await Firebase.init()
    }
}