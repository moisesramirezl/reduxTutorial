import React from 'react'
import {Link} from 'react-router'

class HomePage extends React.Component{
  render(){
    return (
      <div className="jumbotron">
      <h1>H1</h1>
      <p>P</p>
      <Link to="about" className="btn btn-primary btn-lg"> Link </Link>
      </div>
    )
  }
}

export default HomePage
