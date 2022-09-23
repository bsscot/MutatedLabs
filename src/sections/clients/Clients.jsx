import React, {useState} from 'react'
import '../clients/clients.css'
// import nezumi from '../../assests/nezumi.jpeg'
// import meta from '../../assests/metadrago.jfif'
// import neon from '../../assests/neon.png'
// import alder from '../../assests/alder.png'
// import hrhc from '../../assests/5Transparent1.jpeg'
// import udder from '../../assests/udder.jpeg'
// import lootfi from '../../assests/lootfi.gif'
// import goofy from '../../assests/goofy.png'
import data from '../../data'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Clients = () => {
  var [noOfElement, setnoOfElement] = useState(4);
  const loadMore = event => {
    console.log(noOfElement)
    console.log(data.cardData.length)
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
          {slice.map((item, index)=> {
            return(
              //col-11 col-md-6 col-lg-3 mx-0 mb-4
              <div className='cards-listing'>
              <div>
                <img className='card-img-top' src={item.img} alt=''></img>
                <div className='client-card'>
                  <div className='details-client'>
                    <span>Project: </span>
                    <p> {item.title}</p>
                    <span>Services: </span>
                    <p><a rel="noreferrer noopener" href={item.link1} target="_blank"> {item.desc}</a></p>
                    <p><a rel="noreferrer noopener" href={item.link2} target="_blank"> {item.desc1}</a></p>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
      <button class="button-loadmore" role="button" onClick={loadMore}>Load More</button>
    </section>
  )
}

export default Clients;
