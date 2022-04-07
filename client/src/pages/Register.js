import { useState, useEffect } from 'react'
import Logo from '../components/Logo'
import FormRow from '../components/FormRow'
import Wrapper from '../assets/wrappers/RegisterPage'
import Alert from '../components/Alert'
import { useAppContext } from '../context/appContext'
// global context and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
// if possible prefer local state
// global state

const Register = () => {
  const [values, setValues] = useState(initialState)
  const { isLoading, showAlert, displayAlert } = useAppContext();

  // global context and useNavigate later

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    //[] sq bracket notation to dynamically update the value a user fills
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return
    }
    console.log(values);
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {/* Conditional rendering of Alert component */}
        {showAlert && <Alert />}

        {/* name field is conditionally rendered */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type='email'
          value={values.email}
          name='email'
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type='password'
          value={values.password}
          name='password'
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a Member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register;