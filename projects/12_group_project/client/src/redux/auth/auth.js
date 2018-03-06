import axios from "axios";
const signupUrl = "/auth/signup";
const loginUrl = "/auth/login";

export function signup(credentials) {
    return dispatch => {
        axios.post(signupUrl, credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.token = JSON.stringify(token);
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function authenticate(user) {
    return {
        type: "AUTHENTICATE",
        user
    }
}

export function login(credentials, history) {
    return dispatch => {
        console.log(credentials);
        axios.post(loginUrl, credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.token = JSON.stringify(token);
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
                history.push("/");
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

export function logout() {
    delete localStorage.token;
    delete localStorage.user;
    return {
        type: "LOGOUT"
    }
}

const intitialState = {
    username: "",
    isAuthenticated: false
}

export default function reducer(state = intitialState, action) {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true
            };
        case "LOGOUT":
            return intitialState;
        default:
            return state;
    }
}