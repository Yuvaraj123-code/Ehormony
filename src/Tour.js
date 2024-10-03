import React from 'react'
import image from './Assets/1st.png'
import './Tour.scss'
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import homepic from '../src/Assets/First.jpg'

import image0 from './Assets/couple.png'
import image1 from './Assets/couple1.png'
import image2 from './Assets/couple2.png'
import video from './Assets/bgvideo.mp4.mp4'
import page4 from './Assets/bgpage4.png'
import pic from './Assets/lastbg.png'
import pic1 from './Assets/image-content.webp'
import pic2 from './Assets/image-446.webp'
import pic3 from '../src/Assets/pic33.png'

import logo from './Assets/logo.png'

import image10 from './Assets/page10.png'
import image101 from './Assets/page101.png'


import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";



function Tour() {
  const [value, setValue] = useState([1, 3]);

  const handleChange = (val) => setValue(val);


  return (

    <div>
      <div>

      <h1 className='heey'>e hormony</h1>

      <div className='header'>

        <h1 className='getwho'>Get who  <br />
          Get You</h1>
      </div>

      <div className='form-container'>
        <form className='main-form'>
          <h1>Start <span>free</span> today</h1>
          <h3>Have you tried online dating before ?</h3>
          <div className='one'>
            <input className='inputradio1' type='radio' ></input>
            <label>I'm new to it</label></div>
          <div className='two'>
            <input className='inputradio2' type='radio'></input>
            <label>Once or twice</label></div>
          <div className='three'>
            <input className='inputradio3' type='radio'></input>
            <label>I'm an online dating pro</label></div>

        </form>

      </div>


      <div>

        <img className='backlogo' height="600vh" width="1214vh" src={homepic}></img>

      </div>
      <div>
        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
          <ToggleButton id="tbg-btn-4" value={1}>
            <h1>The #1 trusted dating app </h1><br />

            2022 survey of 1,300 Respondents from the US, UK, Canada and Australia      </ToggleButton>
          <ToggleButton id="tbg-btn-2" value={2}>
            <h1>Every 14 minutes, someone</h1> <br />finds love on eharmony

            eharmony user data      </ToggleButton>
          <ToggleButton id="success" value={3}>
            <h1>Highest quality dating pool </h1><br />

            2023 survey of 2,807 dating app users in the U.S., UK, Canada and Australia      </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className='pages1'>
        <h2 className='page2'>
          Our dating site helps millions find real love</h2></div>
      <div className='images'>
        <div className='images0'><img className='image1' src={image1} width="330" height="270"></img><h4>Over 2 million
          have found <br />love</h4><p>… could you be next?</p></div>
        <div className='images1'><img className='image2' src={image2} width="330" height="270"></img><h4>Site most likely to lead to <br />happy relationships</h4><p>… the right one may be waiting for you!</p></div>
        <div className='images2'><img className='image0' src={image0} width="330" height="270"></img><h4>2.3 million messages sent weekly</h4> <p>See who wants to talk to you!</p></div>
      </div>


      <div className='page3'>
        <h1 className='nextpage3'>Introducing: A new eharmony experience</h1>
        <h5 className='nextpage33'>Your search for a great relationship has never been easier with <br />groundbreaking overhaul of the eharmony you know and trust.</h5>
      </div>

      <div className='page4'>
        <h4>GET A SNEAK PEEK:</h4>

        <video className='video' height="400px" width="700px" controls >
          <source src={video} type='video/mp4'></source>
        </video>
      </div>


      <div>
        <h1 className='classpage4'>Compatibility Counts</h1>

        <div className='page5'>
          <div>
            <img className='imagepage4' src={page4}></img>
          </div>

          <div className='page5p'><p>What happens when you apply scientific research to dating behavior? A whole lotta love! But this isn’t destiny, it’s deliberate. That’s why every 14 minutes, someone finds love on eharmony.</p>
            <button id='btn-btn' class="btn btn-primary" type="submit">Join Now</button></div>

        </div>
      </div>


      <div>
        <h1 className='myh16'>Quality Singles, Just Like You</h1>

        <div className='page6'>

          <p className='myp'>Like you, they are tired of dating games. You can have complete <br />confidence that all of your compatible matches are looking for the <br />same thing you are Love that lasts.<br />
            <button id='btn-btn1' class="btn btn-primary" type="submit">Join Now</button>
          </p>

          {/* <button className='btn-btn' class="btn btn-primary" type="submit">Join Now</button> */}
          <div className='mylastimg'>
            <img src={pic}></img>

          </div>
        </div>

        <div className='page7'>
          <h1>We’re Here For You</h1> <br />
          <h5>Signing up for eharmony is the first step in finding your next great relationship.<br /> From profile tips to sharing your success story, we are here to support you in<br /> your journey for love.<br /><br />WE’RE AVAILABLE 24/7, 365 DAYS A YEAR</h5>
          <br />
          <button className='mypage7button'>Contact Us</button>
        </div>

        <div className='page8'>
          <h1>The Real Deal</h1>

          <div className='page8images'>



            <img className='pic2' src={pic2}></img>
            <img className='pic1' src={pic1}></img> <br />
            <img className='pic3' src={pic3}></img>

            <div className='mypage8p'>
              <h5 >Over the course of our 20+ years in the relationship business, <br />millions of couples have found lasting love.<br /> Give us a try when you’re ready for something real.
                Join now</h5>
              <button id='btn-btn' class="btn btn-primary" type="submit">Join Now</button>
            </div>
          </div>
        </div>
        <div id='page9'>
          <div class="card">
            <h1 class="card-header">The #1 Trusted Dating App</h1>
            <div class="card-body">
              <div className='image-page9'><img src={logo} width="150px" height="200px"></img></div>


              <p class="card-text">We have 20+ years of trusted matchmaking under our belts,<br /> with a dedicated Trust and Safety<br /> team by your side.</p>
              <a href="#" id="button-page10" class="btn btn-primary">Join now </a>
            </div>
          </div>
        </div>

        <div className='page10'>
          <h1 className='myh10'>Dating Advice</h1>
          <h5 className='myh101'>Your guide to dating and relationships all in one place. The latest articles, blogs and videos <br />created by relationship experts, journalists and eharmony’s in-house advice team, exclusively on eharmony.</h5>

          <div className='page10image'>

            <div className='image10'>
              <img src={image10} width="450px" height="200px"></img>
              <h4 className='myh44'>  15 Date Ideas That Aren’t Dinner and a Movie</h4>
              <p>Getting to know each other is an integral part of the <br /> dating process, but it can be very hard to know what <br />kind of questions to ask. In this article, we’ve covered <br />a range of topics, each with plenty of example <br />questions to ask to get to know someone. </p>
            </div>
            <div className='image101'>
              <img src={image101} width="450px" height="200px"></img>
              <h4 className='myh445'> Curiosity Didn’t Kill This Cat: 140 Questions <br /> To Ask Someone</h4>
              <p>When you think of date ideas, there are a few things <br />that come to mind immediately – drinks, dinner, a movie,<br /> maybe a hike if you’re the outdoorsy kind. While those are<br /> all classics for a reason, it can be fun to think outside the <br />box sometimes, whether you’re looking to make a good <br />impression on a new flame or want to add some spice <br />to a long-standing relationship.</p>

            </div>

          </div><br></br>
        </div>
      </div>
   


  
    </div>

<footer>
  

<div className='myfooter'>
<hr/>
<div>
<h2>Follow Us on</h2>
<div className='myfooterlogo'>
<FaFacebook />
<FaSquareTwitter />
<FaYoutube />
<FaInstagram />
</div>

</div>
<div className='myfooterlogo2'>
  <h2>E harmony mobile</h2>
  <div className='myfooterlogo3'>
  <FaApple />
  <BsAndroid2 />

  </div>

</div>

</div>

<div className='myfooterlast'>
<h3>E-hormony</h3>
<h6>*2024 Survey of 1,616 India Singles.</h6>
<h6>© 2000-2024 eharmony Inc. – Made with ❤ in Los Angeles</h6>

</div>
</footer>

 
    </div>




  )
}

export default Tour