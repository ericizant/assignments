const redux = require("redux");

//reducer
function contacts(prevContacts = [], action) {
    switch (action.type) {
        case "ADD_CONTACT":
            return [...prevContacts, action.contact];
        case "REMOVE_CONTACT":
            let newContacts = [...prevContacts];
            return newContacts.filter((contact) => {
                return action.id !== contact.id;
            });
        case "EDIT_CONTACT":
            let editedContacts = [...prevContacts];
            return editedContacts.map((contact) => {
                if (contact.id === action.id) {
                    return Object.assign(contact, action.contact);
                } else {
                    return contact;
                }
            });
        default:
            return prevContacts;
    }
}

//create store from reducer
let store = redux.createStore(redux.combineReducers({ contacts }));

//show state everytime it changes
store.subscribe(() => {
    console.log(store.getState());
});

//Action creators return 'actions' which are objects with a type property and payload (info about the action).
//These are examples of what are called "PURE functions".
//Pure Function Requirements:
//1) For every input, there is exactly one output that is the same each time.
//2) They cannot affect anything outside of their own scope.

function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        contact
    }
}

function removeContact(id) {
    return {
        type: "REMOVE_CONTACT",
        id
    }
}

function editContact(id, contact) {
    return {
        type: "EDIT_CONTACT",
        id,
        contact
    }
}

//dispatch calls
store.dispatch(addContact({
    id: 0,
    name: "John",
    phone: "801-555-5555"
}));

store.dispatch(addContact({
    id: 1,
    name: "Clarke",
}));

store.dispatch(addContact({
    id: 2,
    name: "Jenny"
}));

store.dispatch(removeContact(1));

store.dispatch(editContact(0, {
    name: "Johne",
    phone: "555-555-5553",
    birthday: "2/8/2000"
}));
