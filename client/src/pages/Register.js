import { useState, useEffect } from 'react'
import Logo from '../components/Logo'
import FormRow from '../components/FormRow'
import Wrapper from '../assets/wrappers/RegisterPage'
import Alert from '../components/Alert'
// global context and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
}
// if possible prefer local state
// global state

const Register = () => {
  const [values, setValues] = useState(initialState)

  // global context and useNavigate later

  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {/* Conditional rendering of Alert component */}
        {values.showAlert && <Alert />}

        {/* name field */}
        <FormRow
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />
        {/* email field */}
        <FormRow
          type='text'
          value={values.email}
          name='email'
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type='text'
          value={values.password}
          name='password'
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </Wrapper>
  )
}
export default Register;