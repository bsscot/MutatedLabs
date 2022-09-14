import React from 'react'
import '../clients/clients.css'
import nezumi from '../../assests/nezumi.jpeg'
import meta from '../../assests/metadrago.jfif'
import neon from '../../assests/neon.png'
import alder from '../../assests/alder.png'
import hrhc from '../../assests/5Transparent1.jpeg'
import udder from '../../assests/udder.jpeg'
import lootfi from '../../assests/lootfi.gif'
import goofy from '../../assests/goofy.png'

const clients = () => {
  return (
    <div className='clients'>
      <div className='title-client'>
        <h2>OUR<span> CLIENTS</span></h2>
      </div>

      <div className='client-listing'>
          <div class="clients-scroll snaps-inline">
            <div class="client-card">
              <img src={nezumi} alt=""/>
              <p class="card-title">Project: <span>Nezumi Dominion</span></p>
              <p class="card-title">Service: <a rel="noreferrer noopener" href='https://raffle.nezumidominion.com/' target="_blank"><span>Raffle System</span></a></p>
            </div>
            <div class="client-card">
              <img src={meta} alt=""/>
              <p class="card-title">Project: <span>Meta Drago</span></p>
              <p class="card-title">Service: <a rel="noreferrer noopener" href='https://raffle.metadrago.art/' target="_blank"><span>Raffle System</span></a></p>
            </div>
            <div class="client-card">
              <img src={neon} alt=""/>
              <p class="card-title">Project: <span>Neon Game</span></p>
              <p class="card-title">Service: <a rel="noreferrer noopener" href='https://skymarket.neon.game/' target="_blank"><span>Raffle System</span></a></p>
            </div>
            <div class="client-card">
              <img src={alder} alt=""/>
              <p class="card-title">Project: <span>Alder Mages</span></p>
              <p class="card-title">Service: <a rel="noreferrer noopener" href='https://mages-raffle.netlify.app/' target="_blank"><span>Raffle System</span></a></p>
            </div>
            <div class="client-card">
              <img src={hrhc} alt=""/>
              <p class="card-title">Project: <span>High Roller Hippo Clique</span></p>
              <p class="card-title">Service: <a rel="noreferrer noopener" href='https://raffles.hrhc.io/' target="_blank"><span>Raffle System</span></a></p>
            </div>
            <div class="client-card">
              <img src={udder} alt=""/>
              <p class="card-title">Project: <span>Udder Chaos</span></p>
              <p class="card-title">Service: <a rel="noreferrer noopener" href='https://www.raffle.udderchaos.io/' target="_blank"><span>Raffle System</span></a></p>
            </div>
            <div class="client-card">
              <img src={lootfi} alt=""/>
              <p class="card-title">Project: <span>LootFi</span></p>
              <p class="card-title">Service: <a rel="noreferrer noopener" href='https://lootfi.io/' target="_blank"><span>Lootboxes</span></a></p>
            </div>
            <div class="client-card">
              <img src={neon} alt=""/>
              <p class="card-title">Project: <span>Neon Game</span></p>
              <p class="card-title">Service: <a rel="noreferrer noopener" href='https://sewer.neon.game/' target="_blank"><span>Staking</span></a></p>
            </div>
            <div class="client-card">
              <img src={goofy} alt=""/>
              <p class="card-title">Project: <span>Goofy Gorilla Gang</span></p>
              <p class="card-title">Service: <a rel="noreferrer noopener" href='https://stake.goofydao.lol/' target="_blank"><span>Staking</span></a></p>
            </div>
            <div class="client-card">
              <img src={goofy} alt=""/>
              <p class="card-title">Project: <span>Goofy Gorilla Gang</span></p>
              <p class="card-title">Service: <a rel="noreferrer noopener" href='https://raffle.goofydao.lol/' target="_blank"><span>Raffle</span></a></p>
            </div>
          </div>
      </div>
  </div>
  )
}

export default clients