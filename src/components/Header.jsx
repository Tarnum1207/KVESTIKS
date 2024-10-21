import "../styles/Header.sass";
import logo from "../img/logo.svg";
import ordersImg from "../img/Orders.svg";
import menu from "../img/menu.svg";

function Header() {
	return (
		<div className="header">
			<div className="header_desktop">
				<div className="container">
					<img src={logo} alt="Логотип" />
					<div className="header__menu">
						<div className="header__menu-item">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
								viewBox="0 0 25 25"
								fill="none"
							>
								<path
									d="M22.5 17.4201V20.4201C22.5011 20.6986 22.4441 20.9743 22.3325 21.2294C22.2209 21.4846 22.0573 21.7137 21.8521 21.902C21.6468 22.0902 21.4046 22.2336 21.1407 22.3228C20.8769 22.412 20.5974 22.4452 20.32 22.4201C17.2428 22.0857 14.287 21.0342 11.69 19.3501C9.27382 17.8148 7.22533 15.7663 5.68999 13.3501C3.99997 10.7413 2.94824 7.77109 2.61999 4.6801C2.595 4.40356 2.62787 4.12486 2.71649 3.86172C2.80512 3.59859 2.94756 3.35679 3.13476 3.15172C3.32196 2.94665 3.5498 2.78281 3.80379 2.67062C4.05777 2.55843 4.33233 2.50036 4.60999 2.5001H7.60999C8.0953 2.49532 8.56579 2.66718 8.93376 2.98363C9.30173 3.30008 9.54207 3.73954 9.60999 4.2201C9.73662 5.18016 9.97144 6.12282 10.31 7.0301C10.4445 7.38802 10.4737 7.77701 10.3939 8.15098C10.3141 8.52494 10.1289 8.86821 9.85999 9.1401L8.58999 10.4101C10.0135 12.9136 12.0864 14.9865 14.59 16.4101L15.86 15.1401C16.1319 14.8712 16.4751 14.6859 16.8491 14.6062C17.2231 14.5264 17.6121 14.5556 17.97 14.6901C18.8773 15.0286 19.8199 15.2635 20.78 15.3901C21.2658 15.4586 21.7094 15.7033 22.0265 16.0776C22.3437 16.4519 22.5122 16.9297 22.5 17.4201Z"
									stroke="#383838"
									stroke-width="1.25"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<a href="#">Контакты</a>
						</div>
						<div className="header__menu-item">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="25"
								viewBox="0 0 24 25"
								fill="none"
							>
								<path
									d="M2 3.5H8C9.06087 3.5 10.0783 3.92143 10.8284 4.67157C11.5786 5.42172 12 6.43913 12 7.5V21.5C12 20.7044 11.6839 19.9413 11.1213 19.3787C10.5587 18.8161 9.79565 18.5 9 18.5H2V3.5Z"
									stroke="#383838"
									stroke-width="1.25"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M22 3.5H16C14.9391 3.5 13.9217 3.92143 13.1716 4.67157C12.4214 5.42172 12 6.43913 12 7.5V21.5C12 20.7044 12.3161 19.9413 12.8787 19.3787C13.4413 18.8161 14.2044 18.5 15 18.5H22V3.5Z"
									stroke="#383838"
									stroke-width="1.25"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<a href="#">Блог</a>
						</div>
						<div className="header__menu-item">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
								viewBox="0 0 25 25"
								fill="none"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8.5 14.875C7.27337 14.875 6.09699 15.3623 5.22963 16.2296C4.36228 17.097 3.875 18.2734 3.875 19.5V21.5C3.875 21.8452 4.15482 22.125 4.5 22.125H20.5C20.8452 22.125 21.125 21.8452 21.125 21.5V19.5C21.125 18.2734 20.6377 17.097 19.7704 16.2296C18.903 15.3623 17.7266 14.875 16.5 14.875H8.5ZM19.875 20.875V19.5C19.875 18.6049 19.5194 17.7465 18.8865 17.1135C18.2535 16.4806 17.3951 16.125 16.5 16.125H8.5C7.60489 16.125 6.74645 16.4806 6.11351 17.1135C5.48058 17.7465 5.125 18.6049 5.125 19.5V20.875H19.875Z"
									fill="#383838"
								/>
								<path
									d="M12.5 11.5C14.7091 11.5 16.5 9.70914 16.5 7.5C16.5 5.29086 14.7091 3.5 12.5 3.5C10.2909 3.5 8.5 5.29086 8.5 7.5C8.5 9.70914 10.2909 11.5 12.5 11.5Z"
									stroke="#383838"
									stroke-width="1.25"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<a href="#">Заказы</a>
						</div>
					</div>
				</div>
			</div>
			<div className="header_mobile">
				<img src={menu} alt="Меню" />
				<img src={logo} alt="Логотип" />
				<img src={ordersImg} alt="Заказы" />
			</div>
		</div>
	);
}

export default Header;
