import {Redirect, Link} from 'react-router-dom'
import Cookie from 'js-cookie'
import NavBar from '../NavBar'
import './index.css'

const Home = () => {
  const isExistTwo = Cookie.get('jwt_token')
  if (isExistTwo === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="home-page">
      <NavBar />
      <div className="home-content">
        <h1>Find The Job That Fits Your Life</h1>
        <p>
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button type="button" className="find-jobs-btn">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Home
