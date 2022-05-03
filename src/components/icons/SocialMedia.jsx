import React from 'react'
import { BsInstagram, BsGithub, BsFacebook, BsYoutube } from "react-icons/bs";

export default function SocialMedia({position}) {
  return (
    <ul className={`d-flex ${position  ? position : ""}`}>
                <li>
                  <a href="https://github.com/StR0vErBG" target="_blank">
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/emil_zlatinov/" target="_blank">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/StR0vErBG/" target="_blank">
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCVD7JSRRl3bYgrJXqWfJ0aA" target="_blank">
                    <BsYoutube />
                  </a>
                </li>
                </ul>
  )
}
