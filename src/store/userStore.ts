import { atom } from 'recoil';


//Values default of Store (GlobalState)

const defaultValues = {
    firstName: "",
    lastName: "",
    mail: "",
    password: "",
    address: "",
    street: "",
    zipcode: "",
    logged: false
}


// User store (GlobalState User)

export const userAtom = atom({
    key: 'userAtom',
    default: defaultValues,
});