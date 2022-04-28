import React from 'react'
import { BsInstagram, BsGithub, BsFacebook, BsYoutube } from "react-icons/bs";

export default function SocialMedia({position}) {
  return (
    <ul className={`d-flex ${position  ? position : ""}`}>
                <li>
                  <a href="https://github.com/StR0vErBG">
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/emil_zlatinov/">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/StR0vErBG/">
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCVD7JSRRl3bYgrJXqWfJ0aA">
                    <BsYoutube />
                  </a>
                </li>
                </ul>
  )
}
