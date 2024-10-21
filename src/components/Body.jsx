import "../styles/Body.sass";
import cover from "../img/cover.png";
import Feedback from "./Feedback/Feedback";
import TagItem from "./TagItem";

function Body() {
	return (
		<div class="main-info">
			<div class="breadcrumps">
				<a href="">Главная</a> → <a href="">Каталог</a>
			</div>
			<div class="main-banner">
				<div class="main-banner__bg">
					<img src={cover} alt="Cover" />
				</div>
				<div class="main-banner__info">
					<h3>Стрелы Амура, 18+</h3>
					<div class="main-banner__info-tags">
						<TagItem text="квест" />
            <TagItem text="для 2 человек" />
            <TagItem text="для дома" />
            <TagItem text="сложность 7/10" />
					</div>
					<p class="main-banner__info-description">
						Романтический квест по поиску подарка для второй
						половинки: мужа, жены, парня или девушки. Чтобы собрать
						7 стрел бога любви Амура и разыскать подарок, игроку
						нужно выполнить задания древних богов.
					</p>
				</div>
				<div class="main-banner__tag">
					<p>самый популярный</p>
				</div>
			</div>
			<Feedback />
		</div>
	);
}

export default Body;
