import React from 'react'
import { BsInstagram, BsGithub, BsFacebook, BsYoutube } from "react-icons/bs";

export default function SocialMedia({position}) {
  return (
    <ul className={`d-flex justify-content-between ${position  ? position : ""}`}>
                <li>
                  <a href="">
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsYoutube />
                  </a>
                </li>
                </ul>
  )
}
