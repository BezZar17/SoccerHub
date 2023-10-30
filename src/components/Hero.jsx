import React from 'react'

const Hero = () => {
  return (
    <header>
        <nav>
            <div className='webName'>Soccer Hub</div>
            <button type='button' onClick={() => window.open('')}>Sign Up</button>
        </nav>
        <h1>Today's Matches</h1>
        <h2>Type a league to see today's scores</h2>

    </header>
  )
}

export default Hero