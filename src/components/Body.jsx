import React, { useEffect, useState } from 'react';
import './Body.css'
import Card from './Card';
import obj from './cards-data'
import { Link } from 'react-router-dom';

// Body component

const Body = () => {

  return (
    <>
    <div className="landing">
      <div className="content">

      <div className='text'>
        <h1><span> Welcome to</span> CryptoPlayground</h1>
        <p>Welcome to CrptoPlayground! Dive into risk-free crypto trading with realistic simulation, diverse assets, interactive learning, competitive challenges, and a vibrant community.</p>
        <a href="#second-section" className="cta-button">Learn more ⬇</a>
      </div>
      <div className="signup-box">
        <h2>Start you trail journey today</h2>
        <div className="inputs">
          <input type="email" name="loginemail" id="" placeholder='Email'/>
          <input type="password" name="loginpass" id="" placeholder='Password'/>
        </div>
          <p>By signing up you agree to the Terms of Service</p>
          <div className='button'>

          <a href="#">Create your account</a>
          </div>
          <p>Or sign up with: </p>
          <div className='icons'>
            <i className="bi bi-discord"></i>
            <i className="bi bi-google"></i>
            <i className="bi bi-reddit"></i>
            
          </div>
          </div>
      </div>
    </div>
    <div className="second-section-seperator">
      <p>Designed to help you learn how to trade
      cryptocurrencies in a fun, effective and safe way.</p>
    </div>
    <div className='second-section' id='second-section'>
      <div className="cards">
        {obj.map((o)=> {
          return (<Card {...o} key={o.id}/>)
        })}
      </div>
    </div>
    <div className='support-by-section'>
      <p className="text">Proudly Supported By</p>
      <div className='companies'>
        <img className="company-image" src="../../images/companies/bitcoin-trading-logo.png" alt="" />
        <img className="company-image" src="../../images/companies/insidebitcoins.png" alt="" />
        <img className="company-image" src="../../images/companies/stocklytics-black.png" alt="" />
        <img className="company-image" src="../../images/companies/the-daily-bit.png" alt="" />
        <img className="company-image" src="../../images/companies/cryptostache-logo.png" alt="" />
      </div>
    </div>
    <div className="divert-to-prices-page">
      <div className='divert-page-text'>
        <p className='heading'>Get Insights into Currency Fluctuations</p>
        <p className='divert-page-content'>Gain valuable understanding of global currency movements with our comprehensive insights. Whether it's tracking the rise of a promising currency or understanding the factors behind a decline, we provide detailed analysis to help you stay informed. Explore the dynamics of various currencies and make informed decisions for your financial endeavors.</p>
      </div>
        <Link to="/prices" className='divert-btn'>Click here </Link>
      <div className='component first'>
        <div className='text'>
            <i className="fa-brands fa-bitcoin"></i>
            <p className='name'>Bitcoin</p>
            <p className='percent'>-1.71%</p>
            <p className='amount'>$72,750</p>
        </div>
        <i className='fa-brands fa-bitcoin big-icon'></i>
      </div>
      <div className="component second">
        <div className='text'>
          <i className="fa-brands fa-ethereum"></i>
          <p className='name'>Ethereum</p>
          <p className='percent'>-1.11%</p>
          <p className='amount'>$12,750</p>
        </div>
        <i className="fa-brands fa-ethereum big-icon"></i>
      </div>
      <div className="component third">
        <div className='text'>
          <i className="fa-solid fa-litecoin-sign"></i>
          <p className='name'>Litecoin</p>
          <p className='percent'>-5.11%</p>
          <p className='amount'>$0.50</p>
        </div>
        <i className="fa-solid fa-litecoin-sign big-icon"></i>
      </div>
      <div className="component fourth">
        <div className="text">
          <i className="fa-brands fa-xing"></i>
          <p className='name'>XRP</p>
          <p className='percent'>-1.11%</p>
          <p className='amount'>$750</p>

        </div>
        <i className="fa-solid fa-xing big-icon"></i>
      </div>
    </div>
    <div className='share'>
      <div className='message-on-telegram'>
        <p className='text'>Message us on Telegram</p>
        <i className='fa-brands fa-telegram '></i>
      </div>
      <div className='share-with-friends'>
          <p className='text'>Share with your friends and family</p>
          <a href="share-btn">Share with friends</a>
      </div>
    </div>
    <footer>©️Copyright 2024</footer>
    </>

  );
};

export default Body;    