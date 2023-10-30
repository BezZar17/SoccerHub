import { useState, useEffect } from 'react'


const Demo = () => {
  return (
    <div class="container">
        <div class="box">
            <img src="/src/assets/international-international-friendlies.webp" alt="International Friendlies Logo"></img>
            <br></br>
            <a href="/frontend/leagues/international.html">International Friendlies</a>
        </div>
        
        <div class="box">
            <img src="src/assets/German-Bundesliga-Logo-2002.png" alt="Bundesliga Logo"></img>
            <br></br>
            <a href="/frontend/leagues/bundes.html">Bundesliga Matches</a>
        </div>
        <div class="box">
            <img src="src/assets/5842fe06a6515b1e0ad75b3b.png" alt="Champions League Logo"></img>
            <br></br>
            <a href="/frontend/leagues/eufa.html">Champions League Matches</a>
        </div>
        <div class="box">
            <img src="src/assets/designstudiopremier-league-rebrand-relaunch-logo-design-barclays-football_dezeen_slideshow-a.jpg" alt="English Premeire League Logo"></img>
            <br></br>
            <a href="/frontend/leagues/premier.html">English Premier League Matches</a>
        </div>
        <div class="box">
            <img src="src/assets/laliga-2023-2024-new3252.logowik.com.webp" alt="LaLiga Logo"></img>
            <br></br>
            <a href="/frontend/leagues/laliga.html">La Liga Matches</a>
        </div>
        <div class="box">
            <img src="src/assets/MLS_crest_logo_RGB_-_New_England_Revolution.svg.webp" alt="MLS Logo"></img>
            <br></br>
            <a href="/frontend/leagues/mls.html">MLS Matches</a>
        </div> 
    </div>
  )
}

export default Demo