import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";


//Actual value of context that needs to be accessed!!
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});


//The component that will be exported so that we get the context value from the above function
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => { 
        const unsubscribe = onAuthStateChangedListener((user) => { 
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        
        return unsubscribe;

    },[]) //Empty dependancy array means it will run only once!

    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}

