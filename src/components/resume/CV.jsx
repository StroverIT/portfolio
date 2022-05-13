import React from 'react'

// Components
import Navcv from './navCv/NavCv';
// Assets
import Me from "../../assets/betterMe.jpg";
// Styles
import "./cv.scss"

const Cv = () =>{
	return(
		<>
		<Navcv />
		<div className="container cv-container">
			<section className="d-sm-flex">
					<div className="d-flex justify-content-center">
					<img src={Me} alt="It's me" />
					</div>
					<section>
						<div className="mx-sm-2">
						<p className="mx-2 text-center text-sm-left myName">Емил Руменов Златинов</p>
					<ul >
						<li>Email: <b>emilzlatinov1@abv.bg</b> </li>

						<li>Phone: <b>0876237725</b></li>
						<li>Post address: <b>Drubja 2 block 321</b></li>
					</ul>
						</div>
				
					</section>

			</section>
			<section>
				<h4>Personal Details</h4>
				<hr />
				<ul>
					<li>First name: <b>Emil</b></li>
					<li>Middle name: <b>Rumenov</b></li>
					<li>Last name: <b>Zlatinov</b></li>
					<li>Citizenship:: <b>Bulgarian</b></li>
					<li>I live in:	: <b>Sofia/Bulgaria</b></li>
				</ul>
			</section>
			<section>
				<h4>Work Experience</h4>
				<hr />
				<ul>
					<li>Period: <b>December 2020 - January 2022</b></li>
					<li>Job Title: <b>Freelancer</b></li>
					<li>Company/Organization: <b>For me</b></li>
					<li>Business sector:  <b>Information technologies</b></li>
					<li>Location:  <b>Sofia</b></li>
					<li>Additional Details:	  
						<b>
						<br />
						Currently working sites that are made by me:
						<br />
						https://softoffice.bg
						<br />
						This portfolio
						</b></li>
				</ul>
			</section>
			<section>
				<h4>Education</h4>
				<hr />
				<ul>
					<li>Period: <b>September 2009 - August 2021</b></li>
					<li>Major: <b>Information Technology</b></li>
					<li>Level: <b>Secondary school</b></li>
					<li>School: <b>Information Technologies, 105th Sofia University Atanas Dalchev</b></li>
					<li>Location: Sofia</li>
					<li>Description/Main Subjects: <b>Programming, English and graphic design</b></li>
				</ul>
			</section>
			<section>
				<h4>Skills</h4>
				<hr />
				<ul>
					<li>Computer Skills:	<b>HTML, CSS, SCSS, JavaScript, Jquery, Bootstrap, NodeJs, Express, MongoDB, React, Git. And now learning tailwind css</b></li>
					<li>Personal skills:	<b>Problem solving. Fast writing(on keyboard), good communication skills. I can sit in front of the computer for a long time. And I can learn fast</b></li>
				</ul>
			</section>
			<section>
			<h4>Additional Courses and Certificates</h4>
			<hr />
			 <ul>
				 <li>Additional Courses: <b>Currently on JS Web module in Softuni. I have passed all previous modules with a full 6</b></li>
				 </ul>
			</section>
		</div>
		</>
	)
}

export default Cv