import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  
// Sample GIF URLs for demonstration
const gifUrls = [
  'https://cdn.firstwefeast.com/assets/2014/04/tumblr_mpubl3T3pv1s6sejso1_400.gif',
  'https://www.reactiongifs.com/r/2012/12/pizza1.gif',
  'https://media.tenor.com/QIrpK5TYveQAAAAM/dominos-pizza-shimmy.gif',
  'https://media4.giphy.com/media/u98zWbe3jgJoI/200w.gif?cid=6c09b9527a938vbxn9au87do30gd8l5svczx09bc7ivin1b5&ep=v1_gifs_search&rid=200w.gif&ct=g',
  'https://www.ismartcom.com/hubfs/original.gif',
  'https://thumbs.gfycat.com/UnitedWarlikeAtlasmoth-size_restricted.gif',
  'https://assets.bonappetit.com/photos/57ad3a7253e63daf11a4dd20/1:1/w_2560%2Cc_limit/perfect-fish-tacos.jpg',
  'https://cdn.pixabay.com/animation/2022/10/11/09/05/09-05-26-529_512.gif',
  'https://i.imgur.com/fgR0tGr.jpg',
  'https://clipart-library.com/img/1169878.gif',
  'https://media3.giphy.com/media/8FZvAT65xK2oCA8xCN/source.gif',
  'https://cdn.pixabay.com/animation/2023/05/30/06/50/06-50-38-618_512.gif',
  'https://i.gifer.com/78nZ.gif',
 'https://media2.giphy.com/media/eMt9husy3gJZp0b8FG/200.webp?cid=ecf05e47uif5e9ecyuy4mq2prq437rvow47qsfc0snczayqr&ep=v1_gifs_search&rid=200.webp&ct=g',
 'https://media0.giphy.com/media/vhpELVttWGXqDfncXz/200.webp?cid=ecf05e47q6dqp92wcak8acejxetal2wqm5lsyc1uznrl09io&ep=v1_gifs_search&rid=200.webp&ct=g',
 'https://media0.giphy.com/media/qYbpoXQ4aYAtVU39fd/200w.webp?cid=ecf05e47btds00lfc810qeafotj2r3mfkt8vzz1uo6475su4&ep=v1_gifs_search&rid=200w.webp&ct=g',
 'https://media3.giphy.com/media/nYDwMPUnq4aYZwKefN/giphy.gif?cid=ecf05e47btds00lfc810qeafotj2r3mfkt8vzz1uo6475su4&ep=v1_gifs_search&rid=giphy.gif&ct=g',
 'https://media4.giphy.com/media/WxvH7iuPzPnE2nlKJ6/giphy.gif?cid=ecf05e47y9w8xxq0r7yr33er9ge4tl39zbrpz53wa1liookc&ep=v1_gifs_related&rid=giphy.gif&ct=g',
];

const [currentGif, setCurrentGif] = useState(gifUrls[0]);

useEffect(() => {
  const interval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * gifUrls.length);
    setCurrentGif(gifUrls[randomIndex]);
  }, 5000);

  return () => clearInterval(interval);
}, []);
  

  return (

    <footer className="footer">
      <section className="subscribe-section">
        <div className="subscribe-content">
          <h1>Subscribe Our Newsletter </h1>
        
          <p>Subscribe our Free Newsletter and Experience every week our new Recipes !!</p>
          
        </div>
        <div className="subscribe-form">
        <input type="email" placeholder="Enter your email" />
          <button><b>Subscribe</b></button>
        </div>
        
        <div className="subscribe-icons">
        <p><b>Follow Us On</b> </p>
        <a href="#"></a>
          <a href="#"><i class="fa-brands fa-facebook-f fa-xl"></i></a>
          <a href="#"><i class="fa-brands fa-twitter fa-xl"></i></a>
          <a href="#"><i class="fa-brands fa-youtube fa-xl"></i></a>
          <a href="#"><i class="fa-brands fa-square-instagram fa-xl"></i></a>
          <a href="#"><i class="fa-brands fa-tiktok fa-xl"></i></a>
        
        </div>
        <div className="subscribe-icons">
        <p><b>Download Our App</b></p>
        <a href="#"></a>
          <a href="#"><i class="fa-brands fa-app-store-ios fa-xl"></i></a>
          <a href="#"><i class="fa-brands fa-google-play fa-xl"></i></a>
          
         
        </div>
      </section>
     
      <section className="foodify-section">

      <div className="random-gif-box">
          <img src={currentGif} alt="Random GIF" />
        </div>

        <div className="foodify-info">
          <h1>Foodify</h1>
          <p><b>
          Our mission at Foodify is to make everyday cooking fun, 
          because we believe that cooking is key to a happier and healthier life for people, 
          communities and the planet. We empower homecooks all over the world to help each 
          other by sharing recipes and cooking tips.</b></p>
          <p className="contact">Phone: 123-456-7890</p>         
          <p className="contact">Email: info@foodify.com</p>
        </div>

          <div className="footer-column">
            
            <ul>
              <li><a href="/"><b>BREAKFASTS</b></a></li>
              <li><a href="/"><b>LUNCH</b></a></li>
              <li><a href="/"><b>DINNERS</b></a></li>
              <li><a href="/"><b>VEGETARIAN</b></a></li>
              <li><a href="/"><b>VEGAN MEALS</b></a></li>
              <li><a href="/"><b>MEAT & FISH</b></a></li>
              <li><a href="/"><b>SEAFOOD</b></a></li>
              <li><a href="/"><b>SNACKS</b></a></li>
            </ul>
          </div>

          <div className="footer-column">
           
            <ul>
            <li><a href="/"><b>DRINKS & JUICES</b></a></li>
            <li><a href="/"><b>DESSERTS</b></a></li>
            <li><a href="/"><b>TEA & COFFEE</b></a></li>
            <li><a href="/"><b>SMOOTHIES</b></a></li>
            <li><a href="/"><b>BOWL & SALADS</b></a></li>
            <li><a href="/"><b>FRUITS & VEGETABLES</b></a></li>
            <li><a href="/"><b>BREAD & BAKERY</b></a></li>
            <li><a href="/"><b>SOUPS</b></a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Learn more</h2>
            <ul>
            <li><a href="/">About Us</a></li>
              <li><a href="/">Cooking Courses</a></li>
              <li><a href="/contact">Carrers</a></li>
              <li><a href="/contact">Advertise With Us</a></li>
              <li><a href="/contact">Post Recipe</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h2>Helps</h2>
            <ul>
              <li><a href="/about">Contact</a></li>
              <li><a href="/contact">FAQs</a></li>
              <li><a href="/contact">Terms of Services</a></li>
              <li><a href="/contact">Privacy Policy</a></li>
              <li><a href="/contact">News</a></li>
            </ul>
          </div>
          
      </section>
      <hr className="section-divider" />
      <section className="copyright-section">
        <div className="copy-right">
          <p>Foodify &copy; 2023  - All rights reserved</p>
        </div>
        <div className="footer-logo">
      <a href="#">
        <img className="logo" src="./images/foodify-logo.png" alt="Foodify-logo" />
      </a>
     
    </div>
        <div className="payment-icons">
        <a className="appPay" href="#"><i class="fa-brands fa-cc-apple-pay"></i></a>
        <a className="payPal" href="#"><i class="fa-brands fa-paypal"></i></a>
        <a className="visa" href="#"><i class="fa-brands fa-cc-visa"></i></a>
        <a className="masterCard" href="#"><i class="fa-brands fa-cc-mastercard"></i></a>
        <a className="bankTransfer" href="#"><i class="fa-solid fa-money-bill-transfer"></i></a>
          {/* Add payment icons */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;




       
          
 

