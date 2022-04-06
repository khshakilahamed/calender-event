import { useEffect, useState } from 'react';
import initializeFirebase from '../pages/Firebase/firebase.init';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";



initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const signInWithGoogle = (location, history) =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            const destination = location?.state?.from || '/';
            history.replace(destination);

        }).catch((error) => {
            
        }).finally(() => setIsLoading(false))
    };


    const logout = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
        
        })
        .finally(() => setIsLoading(false))
    }


    useEffect(() =>{
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              // ...
            } else {
              setUser({});
            }
            setIsLoading(false)
          });
    },[]);

    return {
        user,
        signInWithGoogle,
        isLoading,
        logout,
    };
};

export default useFirebase;