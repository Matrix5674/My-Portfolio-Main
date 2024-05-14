import Theme from './Theme'
import React from 'react'

const SocialBar = () => {
  return (
    <main  data-theme={Theme}>
        <div className="icon-bar fixed z-[100]">
                    <a href="https://github.com/Matrix5674" aria-label="GitHub" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-githu">
                <title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                    </path>
                    </svg>
                    </a>
        <a href="https://twitter.com/SohamSahasrabu5" className="twitter hover:bg-green-400" target="blank"><i className="fa fa-twitter"></i></a>
        <a href="https://www.instagram.com/sohams_28/" className="instagram hover:bg-green-400" target="blank"><i className="fa fa-instagram"></i></a>
        <a href="mailto:sohamsah28@gmail.com" target="blank" className="google hover:bg-green-400"><i className="fa fa-google"></i></a>
        <a href="https://www.linkedin.com/in/soham-sahasrabuddhe-07515328a/ " target="blank" className="linkedin hover:bg-green-400"><i className="fa fa-linkedin"></i></a>
        
        </div>
    </main>
  )
}

export default SocialBar
