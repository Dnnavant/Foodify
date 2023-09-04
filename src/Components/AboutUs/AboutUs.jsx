import React from 'react';
import "./AboutUs.css"

export default function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Foodify</h2>
      <p>
        Foodify is your go-to destination for discovering and sharing delicious
        recipes from around the world. Our mission is to inspire home cooks and
        food enthusiasts to explore new culinary horizons, experiment with
        flavors, and create memorable dining experiences.
      </p>
      <p>
        Whether you're a seasoned chef or a novice in the kitchen, Foodify
        provides a platform for you to browse a wide range of recipes, share
        your culinary creations, and connect with a community of food lovers.
        Join us in celebrating the joy of cooking and sharing delicious meals
        with loved ones.
      </p>
      <h3>Contact Us</h3>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
        </div>
        <button className="AboutUs-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

