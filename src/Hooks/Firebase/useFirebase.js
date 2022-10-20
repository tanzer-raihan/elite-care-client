import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./firebase.initialization";
import { useNavigate } from 'react-router-dom';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const[idToken,setIdToken]=useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = (redirectUrl) => {
        signInWithPopup(auth, googleProvider)

            .then((result) => {
                //signIn successfull
                const user = result.user;
                saveUserToDb(user?.email, user?.displayName, 'PUT')
                alert('Successfully Signed-In')
                navigate(redirectUrl);

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);

            })
            .finally(() => {

            });

    }
    const emailSignIn = (email, password, event, redirectUrl) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //getting the user

                event.target.reset();
                alert('Successfully Signed-In');
                navigate(redirectUrl);


            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => {
                setIsLoading(false);

            }
            );
    }
    const registerWithEmail = (email, password, name, event) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateUserProfile(name);
                saveUserToDb(email, name, 'POST')
                event.target.reset();
                navigate('/');
                alert('Registration Successful')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => {
                setIsLoading(false);

            });
    }
    const updateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            setError(error)
        });

    }
    const saveUserToDb = (email, displayName, method) => {
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ displayName, email })

        })
            .then()

    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({})
            setError('')
        })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                .then((idToken)=>{
                    setIdToken(idToken);
                })
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    useEffect(() => {

        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data?.role === "admin") {
                    setIsAdmin(true);
                }
                else {
                    setIsAdmin(false);
                }
            })

    }, [user?.email])


    return {
        googleSignIn,
        registerWithEmail,
        emailSignIn,
        idToken,
        user,
        isAdmin,
        error,
        isLoading,
        logOut
    }

}
export default useFirebase;