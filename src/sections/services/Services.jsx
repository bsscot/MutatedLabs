import React from 'react'
import '../services/services.css'
import logo from '../../assests/Final-05.png'
import discord from '../../assests/discord.svg'
import twitter from '../../assests/twitter.svg'
import me from '../../assests/magiceden.svg'

const Services = () => {
  return (
    <div className='services'>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt='logo'></img>
        </div>
        <div className='links'>
          <div className='discord_logo'>
            <a rel="noreferrer noopener" href='https://discord.com/invite/dvYfNRfxET' target="_blank"><img src={discord} alt='discord'></img></a>
          </div>
          <div className='twitter_logo'>
            <a rel="noreferrer noopener" href='https://twitter.com/neondotgame' target="_blank"><img src={twitter} alt='twitter'></img></a>
          </div>
          <div className='me_logo'>
            <a rel="noreferrer noopener" href='https://magiceden.io/marketplace/neon_game' target="_blank"><img src={me} alt='me'></img></a>
          </div>
        </div>
      </div>

      <div className='title'>
        <h2>WHITELABEL SERVICES<span> WE PROVIDE</span></h2>
      </div>

      <div className='grid-center'>
        <div className="parents">
          <div class="div1">STAKING</div>
          <div class="div2">RAFFLE SYSTEM</div>
          <div class="div3">PROJECT CONSULTING</div>
          <div class="div4">CUSTOM DISCORD BOTS</div>
          <div class="div5">PARTNERSHIPS</div>
        </div>
        <hr class='bar-services' />
        <div className="parents">
          <div class="div1">ART GENERATION</div>
          <div class="div2">LOOTBOXES</div>
          <div class="div3">FRONT-END DEVELOPMENT</div>
          <div class="div4">BACK-END DEVELOPMENT</div>
          <div class="div5">WEBSITE DESIGN</div>
        </div>
      </div>

      <div className='bar-cta'>
        <div className='desc-cta'>
          <p className='desc-cta'>click the button to join the discord then open up a ticket to get in touch with a team member to proceed</p>
        </div>
        <div className='button-services'>
          <a rel="noreferrer noopener" href='https://discord.com/invite/dvYfNRfxET' target="_blank"><p>JOIN HERE</p></a>
        </div>
      </div>
    </div>
  )
}

export default Services