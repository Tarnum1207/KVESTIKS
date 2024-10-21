import React, { useState } from "react";

import "../../styles/Feedback.sass";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { InitialCards } from "../../store/InitialCards";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import ButtonOrange from "../Button";
import FeedbackItem from "./FeedbackItem";

function Feedback() {
	const [activeSlide, setActiveSlide] = useState(0);
	const handleSlideChange = (swiper) => {
		setActiveSlide(swiper.activeIndex);
	};

	return (
		<div className="feedback">
			<div className="feedback_desktop">
				<div className="feedback-header">
					<h2 className="feedback-header__title">Отзывы клиентов</h2>
					<span className="feedback-header__title-counter">
						{InitialCards.length}
					</span>
				</div>
				<div className="feedback__container">
					{InitialCards.map((card) => {
						return (
							<div className="feedback__container-item">
								<FeedbackItem card={card} />
							</div>
						);
					})}
				</div>
				<div className="feedback_button_container">
					<button className="feedback_button">
						Смотреть все отзывы
					</button>
				</div>
			</div>
			<div className="feedback_mobile">
				<div className="feedback-header">
					<h2 className="feedback-header__title">Отзывы клиентов</h2>
					<span className="feedback__counter">{`${activeSlide + 1}/${
						InitialCards.length
					}`}</span>
				</div>
				<Swiper
					slidesPerView="auto"
					spaceBetween={10}
					loop={false}
					className="feedback__container"
					pagination={{ clickable: true }}
					modules={[Pagination]}
					breakpointsBase="container"
					centeredSlides={false}
					onSlideChange={handleSlideChange}
				>
					{InitialCards.map((card) => {
						return (
							<SwiperSlide className="feedback__container-item">
								<FeedbackItem card={card} />
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className="feedback__button-container">
					<ButtonOrange text="Смотреть все отзывы" />
				</div>
			</div>
		</div>
	);
}

export default Feedback;
