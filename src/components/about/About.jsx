import React from 'react'
import "./about.css"
import Me from "../../assets/betterMe.jpg";


export default function About() {
  return (
    <div className="about " id="about">
        <h3 className="title firstSection title-color">About me</h3>

    <section className="row reading-text-color">
      <section className="col-md-7 order-m1">
        <p>Hello! My name is Emil and I enjoy creating things that live on the internet.
          My interest in web development stated back in 2018 when my school teacher decided to teach us HTML and CSS
          --- turns out I love that technologies and tried to deep dive into it.
        </p>
        <p>
          Fast-forward to today, and I've had the privilege be the first person my friends called for help in creating their websites.
          My main focus these days is building accessible, inclusive websites for a variety of clients.
        </p>
        <p>
          I also trying to create youtube videos and courses and soon will launch them.
        </p>
        <p>
          Here are a few technologies I've been working with recently:
        </p>
      </section>
      <section className="col-md-1"></section>
      <section className="about-image col-md-4 col-12 d-flex justify-content-center order-2 order-md-1 mt-2 mt-md-0">
      <img src={Me} alt="Me myself and I" />
    </section>

      <section className="col-md-8 order-1 order-md-2">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>NextJS</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Bootstrap</li>
          <li>Jquery</li>
          <li>Sass</li>
        </ul>
      </section>
    </section>
    
    </div>
  )
}
