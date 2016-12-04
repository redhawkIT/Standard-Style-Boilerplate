// jshint ignore: start
import React from 'react'

import Bio from '../Bio/Bio'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to Code 501</h1>
        <h2>Building Web Apps with React + Redux</h2>
        <Bio name='Keller' age={22}
          img='https://3.bp.blogspot.com/-W__wiaHUjwI/Vt3Grd8df0I/AAAAAAAAA78/7xqUNj8ujtY/s1600/image02.png' imgAlt='Adorable photo of a puppy' />
      </div>
    )
  }

}

export default HomePage
