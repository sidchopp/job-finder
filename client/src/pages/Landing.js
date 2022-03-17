import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../components/Logo';

const Landing = () => {
  return (
    <Wrapper>
      <nav >
        <Logo />
      </nav>
      <div className="container page">
        {/* Info */}
        <div className="info">
          <h1>
            Job <span> tracking</span> app
          </h1>
          <p>
            I'm baby poutine meh fam try-hard hashtag vaporware paleo photo booth tacos yr knausgaard ugh. Godard swag crucifix, church-key echo park lomo hot chicken selvage helvetica palo santo cornhole trust fund banjo meggings dreamcatcher.
          </p>
          <button className='btn btn-hero'>
            Login/Register
          </button>
        </div>
        {/* Image on right for big screens */}
        <img src={main} alt=" Job Finder" className='img main-img' />
      </div>
    </Wrapper>
  )
}
export default Landing;