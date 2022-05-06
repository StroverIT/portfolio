import React, { useEffect } from 'react';
import {AiOutlineArrowLeft} from "react-icons/ai"
import "./navCv.scss"
import {Link} from "react-router-dom"

const Navcv = () => {
    if(document.body.classList.contains("blur")){
        document.body.classList.remove("blur")
    }
    useEffect(()=>{
          const item = document.querySelector(".navCv")
          console.log(item);
          if(item){
              item.scrollIntoView({behavior: "smooth", inline:"start"});
          }
      }, [window.onload])

    return (
        <div className="navCv container-fluid mt-1">
            <Link to="/">
		            <AiOutlineArrowLeft className="icon"/>
            </Link>
        </div>
    );
}

export default Navcv;
