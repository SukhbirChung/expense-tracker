import axios from 'axios';

async function sendData(currentState) {
    await axios.post('http://localhost:3000/users/signup', currentState)
        .then(response => {
            return true
        })
        .catch(err => {
            console.log(err)
            return false
        });
}

const formHelper =  {
    stateVariables: {
        email: '',
        username: '',
        password: ''
    },

    inputChangeHandler(currentState, evt) {
        return { ...currentState, [evt.target.name]: evt.target.value };
    },

    submitHandler(evt, currentState) {
        evt.preventDefault();
        return sendData(currentState);
    }
}

export default formHelper;
