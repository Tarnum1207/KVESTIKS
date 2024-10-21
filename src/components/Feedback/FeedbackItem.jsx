import star from "../../img/Star.svg";
function FeedbackItem(props) {
	const card = props.card;
	return (
		<>
			<p className="feedback__card-date">{card.date}</p>
			<p className="feedback__card-user">{card.user}</p>
			<div className="feedback__card-rating">
				{Array.from({ length: card.rating }).map((_, index) => (
					<img key={index} src={star} alt="Рейтинг" />
				))}
			</div>
			<h3 className="feedback__card-title">{card.title}</h3>
			<p className="feedback__card-text">{card.text}</p>
		</>
	);
}

export default FeedbackItem;
