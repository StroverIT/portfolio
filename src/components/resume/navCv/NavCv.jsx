import React from 'react';
import {AiOutlineArrowLeft} from "react-icons/ai"
import "./navCv.scss"
import {Link} from "react-router-dom"

const Navcv = () => {
    return (
        <div className="navCv container-fluid mt-1">
            <Link to="/">
		            <AiOutlineArrowLeft className="icon"/>
            </Link>
        </div>
    );
}

export default Navcv;
