import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import JobProfileDetails from '../JobProfileDetails'
import NavBar from '../NavBar'

import './index.css'

class Jobs extends Component {
  render() {
    const {salaryRangesList, employmentTypesList} = this.props
    const isExistThree = Cookie.get('jwt_token')
    if (isExistThree === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div className="jobs-page">
        <NavBar />
        <div className="bottom-section">
          <JobProfileDetails
            employmentTypesList={employmentTypesList}
            salaryRangesList={salaryRangesList}
          />
        </div>
      </div>
    )
  }
}
export default Jobs
