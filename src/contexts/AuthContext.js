import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../components/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from '@firebase/auth';



// creating auth context
const AuthContext = React.createContext()

// creating a function to use the auth context
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider( { children }) {

    // setting the state of currentUser to be empty
    const [currentUser, setCurrentUser] = useState()


    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    // using useEffect to make sure that it runs only once
    // anytime signup is called it will call this to create a user


    // function nA(){}
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })

        return unsubscribe
    
    }, [])
            

    const users = {
        currentUser,
        signIn,
        signUp,
        logout,
        resetPassword
    }


    // authcontext.provider has a value of user
    return (
        <AuthContext.Provider value={users}>
            {children}
        </AuthContext.Provider>
    )
}
