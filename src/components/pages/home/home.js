import React from 'react'
import {connect} from 'react-redux'

class Home extends React.PureComponent {
  render() {
    return (
      <div className='home'>
        Home page
      </div>
    )
  }
}

export default connect(state => ({
  
}))(Home);