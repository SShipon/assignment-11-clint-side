import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init"
import {getAuth, signInWithPopup,
         GoogleAuthProvider ,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        sendPasswordResetEmail,
        updateProfile ,
        signOut,
        onAuthStateChanged
 } from "firebase/auth";



initializeAuthentication()
const useFirebase =()=> {
   const googleProvider = new GoogleAuthProvider()
   const auth = getAuth()

   const [user, setUser] = useState({})
   const [isLoading, setIsLoading] =useState(true)
   const [error, setError] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [login, setLogin]=useState(false)
   const [name, setName] = useState('')


     // CREATE REGISTERTION 
     const createRegister =(email, password)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            setUserName()
            setError('')
        
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(()=> setIsLoading(false)) ;
        
 }

    //PROCESS  OF LOGIN
    const loginProcess =(email, password)=>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user =result.user;
            console.log(user)
           setError('')
          })
          .catch((error) => {
            setError(error.message)
          })
          .finally(()=> setIsLoading(false)) ;

    }

     //RESET PASSWORD
 const handleReset =()=>{
  setIsLoading(true)
    sendPasswordResetEmail(auth, email)
    .then(() => {
      
        alert('Please Check your Email...');
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(()=> setIsLoading(false))

  }

   // UPDATED NAME
  const setUserName=()=>{
    setIsLoading(true)
    updateProfile(auth.currentUser, {displayName:name})
    .then(() => {
        
      }).catch((error) => {
        setError(error.message)
      })
      .finally(()=> setIsLoading(false));
   }


// //GOOGLE SIGN In
 const signInGoogle =()=>{
   setIsLoading(true)
   return signInWithPopup(auth, googleProvider)
   
 }


 //GOOGLE SIGN OUT
 const logOut =()=>{
    setIsLoading(true)
   signOut(auth)
   .then((result) => {
       setUser(result)     

     })
     .finally(()=> setIsLoading(false))
}

 // OBSERVE USER STATE CHANGE   
 useEffect(()=>{
   
    const unsubscribed = onAuthStateChanged(auth, user =>{
         if(user){
             setUser(user)
         }
         else{
             setUser({})
         }
       setIsLoading(false)
       
     })
     return ()=> unsubscribed ;
 
 },[])
  return {
      signInGoogle,
      user,
      createRegister,
      loginProcess,
      handleReset,
      setUserName,
      email,
      password,
      setName,
      setEmail,
      setPassword,
      login,
      setLogin,
      setError,
      isLoading,
      logOut,
      error
 }
}
export default useFirebase ;