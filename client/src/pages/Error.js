import { Link } from 'react-router-dom';
import notFound from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={notFound} alt="page not found" className='img' />
        <h3>Oops!!You have landed in a wrong landing zone..</h3>
        <p>We can't seem the page you're looking for</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Wrapper>
  )
}
export default Error