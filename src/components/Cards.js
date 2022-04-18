import React from 'react'
import './Cards.css'


function Cards() {
  return (
    <div className="mainContainer">
      <div className="box">
        <h1>Current Balance</h1>
        <h3>Your Token Balance</h3>
        <h2>0</h2>
        <button type="button" className="btn2">Stake</button>
      </div>
      <div className="box">
        <h1>Balance Staked</h1>
        <h3>Your Tokens Staked</h3>
        <h2>0</h2>
        <button type="button" className="btn2">Unstake</button>
      </div>
      <div className="box">
        <h1>Daily Rewards</h1>
        <h3>Your Daily Rewards</h3>
        <h2>0</h2>
        <button type="button" className="btn2">Claim</button>
      </div>
    </div>
  )
}

export default Cards