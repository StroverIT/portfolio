import React from 'react'
import {Link} from "react-router-dom"

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
		<div className="container">
			<section className="d-md-flex">
					<img src={Me} alt="It's me" />
					<p className="mx-2">Емил Руменов Златинов</p>
					<ul>
						<li>Email: <b>xcreaw1@abv.bg</b> или <b>emilzlatinov1@abv.bg</b></li>
						<li>Телефон: <b>0876237725</b></li>
						<li>Адрес за кореспонденция: <b>Дружба 2 блок 321</b></li>
					</ul>
			</section>
			<section>
				<h4>Лична информация</h4>
				<hr />
				<ul>
					<li>Име: <b>Емил</b></li>
					<li>Презиме: <b>Руменов</b></li>
					<li>Фамилия: <b>Златинов</b></li>
					<li>Гражданство: <b>Българско</b></li>
					<li>В момента живея в: София/България</li>
				</ul>
			</section>
			<section>
				<h4>Образование</h4>
				<hr />
				<ul>
					<li>Период: <b>Септември 2009 - Август 2021</b></li>
					<li>Специалност: <b>Информационни технологии</b></li>
					<li>Степен/Ниво: <b>Средно Училище</b></li>
					<li>Учебно заведение: <b>105-то СУ Атанас Далчев</b></li>
					<li>Населено място: СОФИЯ</li>
					<li>Описание/основни предмети: <b>Програмиране, английски език и графичен дизайн</b></li>
				</ul>
			</section>
			<section>
				<h4>Умения</h4>
				<hr />
				<ul>
					<li>Компютърни умения:	<b>Добри умения с технологиите HTML, CSS, SCSS, JavaScript, JQUERY, Bootstrap, NodeJS, Express, MongoDB, React, GIT.</b></li>
					<li>Умения:	<b>Бързо писане на клавиатура. Умея да седя дълго време пред компютъра и да се справям с всякакви проблеми. Уча бързо. Правя лесно организации. Работя лесно с хора(разбира се има изключения).</b></li>
				</ul>
			</section>
			<section>
			Допълнителни курсове и Сертификати: В момента съм на web module в SoftUni. Като всички предишни модули съм ги минал с пълен и отличен 6
			</section>
		</div>
		</>
	)
}

export default Cv