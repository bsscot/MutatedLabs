import React from 'react'
import "../../sections/contactus/contact.css"

const Contact = () => {
  return (
    <div className='contactus'>
        <div className='title'>
            <h2>CONTACT<span> US</span></h2>
        </div>
        <div className='contactis-text'>
            <h5>We'd love to hear from you!</h5>
            <p> To chat to our team, please join the discord and open up a ticket to proceed.</p>
        </div>
        <div class="button-contact">
            <a rel="noreferrer noopener" href='https://discord.com/invite/dvYfNRfxET' target="_blank">TICKETS</a>
        </div>

    </div>
  )
}

export default Contact