/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const Context = createContext()

export const Provider = ({ children }) => {
    const Googleprovider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Register 
    const handleRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)


    }
    // Login 
    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Signout 
    const handleLogOut = () => {
        setLoading(true)
        signOut(auth)
    }

    // Google LogIn  
    const handleGoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, Googleprovider)



    }

    // Update Profile 
    const manageProfile = (name, image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })


    }

    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)

            }
            else {
                setUser(null)

            }
            setLoading(false)

            return () => {
                unSubscribe()
            }


        })
    }, [])

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogOut,
        handleGoogleLogin,
        manageProfile,
        user,
        setUser,
        loading,


    }




    return (
        <Context.Provider value={authInfo} >
            {children}
        </Context.Provider>

    )
}

