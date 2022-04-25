import React from 'react'
import { BsInstagram, BsGithub, BsFacebook, BsYoutube } from "react-icons/bs";

export default function SocialMedia() {
  return (
    <ul className="d-flex flex-column justify-content-between">
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
