import React, {useState} from 'react'
import '../clients/clients.css'
import data from './cardData'

const Clients = () => {

  var [noOfElement, setnoOfElement] = useState(4);

  const loadMore = event => {
    if(noOfElement < data.cardData.length)
    {
      if((noOfElement+4) >= data.cardData.length)
      {
        event.currentTarget.style.display = "none";
      }
      setnoOfElement(noOfElement + 4)
    }
    else
    {
      event.currentTarget.style.display = "none";
    }
  }

  const slice = data.cardData.slice(0, noOfElement);

  return (
    <section className='clients'>
      <div className='title-client'>
        <h2>OUR<span> CLIENTS</span></h2>
      </div>
      <div className='clients-container'>
        <div className='center-items'>
          {slice.map((item, key)=> {
            return(
              <div key={key} className='cards-listing'>
                <img className='card-img-top' src={item.img} alt='card_img'></img>
                <div className='client-card'>
                  <div className='details-client'>
                    <span>Project: </span>
                    <p> {item.title}</p>
                    <span>Services: </span>
                    <p><a rel="noreferrer noopener" href={item.link_1} target="_blank"> {item.description_1}</a></p>
                    <p><a rel="noreferrer noopener" href={item.link_2} target="_blank"> {item.description_2}</a></p>
                  </div>
                </div>
            </div>
            )
          })}
        </div>
      </div>
      <button className="button-loadmore" onClick={loadMore}>Load More</button>
    </section>
  )
}

export default Clients;
