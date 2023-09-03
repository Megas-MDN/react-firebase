import  { useState } from 'react'
import {auth, providerGoogle} from '../firebaseConfig'
import { signInWithPopup, signOut, signInWithEmailAndPassword} from 'firebase/auth'
// import {createUserWithEmailAndPassword } from 'firebase/auth'
const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  }) ;

  // console.log(auth.currentUser)

  // const createUser = async () => { // create a new user with email and password
  //   try {
  //     const user = await createUserWithEmailAndPassword(auth, form.email, form.password)
  //     console.log(user)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, form.email, form.password)
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  const singInGoogle = async () => { // login with google
    try {
      const user = await signInWithPopup(auth, providerGoogle)
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }
  
  const logout = async () => {
    try {
      const user = await signOut(auth)
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
    login()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        <p>E-mail</p>
        <input value={form.email} type="text" id="email" onChange={({target: {value}}) => setForm((prev) => ({...prev, email: value}))}/>
      </label>
      <label htmlFor="password">
        <p>Password</p>
        <input value={form.password} type="password" id="password" onChange={({target: {value}}) => setForm((prev) => ({...prev, password: value}))}/>
      </label>
      <button type='submit'>Login</button>
      <button type='button' onClick={logout}>Logout</button>
      <button type='button' onClick={singInGoogle}>Join With Google</button>
    </form>
  )
}

export default Login