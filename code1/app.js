const heroScrollContainer = document.querySelector('.hero-scroll__container');
const heroScrollWrapper = heroScrollContainer.querySelector(
	'.hero-scroll__wrapper'
);
const heroScrollInner = heroScrollContainer.querySelector(
	'.hero-scroll__inner'
);
const heroScrollContent = heroScrollContainer.querySelector(
	'.hero-scroll__content'
);

const heroScrollHorizontalItems = heroScrollContainer.querySelector(
	'.hero-scroll__media'
);
const heroScrollHorizontalItemsCollection =
	heroScrollHorizontalItems.querySelectorAll('.hero-scroll__item');

function render() {
	const top = heroScrollHorizontalItems.getBoundingClientRect().top;
	const height = heroScrollHorizontalItems.getBoundingClientRect().width;

	const headHight = heroScrollContent.getBoundingClientRect().height;
	const settings = {
		height: window.innerWidth >= 992 ? height : height + headHight + 600,
		top: window.innerWidth >= 992 ? top - 200 : top - 200,
		opacity: 1,
		width: window.innerWidth,
	};
	heroScrollContainer.style.height = `${settings.height}px`;
	if (window.innerWidth >= 992) {
		heroScrollInner.style.height = `${
			heroScrollHorizontalItems.getBoundingClientRect().height
		}px`;
	}

	window.addEventListener('scroll', () => {
		settings.opacity = 1 - (window.scrollY - settings.top) / 200;
		if (window.scrollY >= settings.top) {
			heroScrollInner.style.transform = `translateX(-${
				window.scrollY - settings.top
			}px`;

			heroScrollContent.setAttribute(
				'style',
				`opacity: ${settings.opacity};
                         filter: blur(${
								(window.scrollY - settings.top) / 100
							}px)`
			);

			if (settings.opacity <= 0) {
				heroScrollContent.setAttribute(
					'style',
					`opacity: 0;
                             filter: blur(10px)`
				);
			}

			heroScrollHorizontalItemsCollection.forEach((item) => {
				if (
					item.getBoundingClientRect().left <=
					window.innerWidth / 1.5
				) {
					item.style.transform = 'scale(1)';
				} else {
					item.style.transform = 'scale(0.85)';
				}
			});
		} else if (window.scrollY < settings.top) {
			heroScrollContent.style.transform = `translate(0px)`;
			heroScrollHead.removeAttribute('style');
		}
		if (
			window.scrollY - settings.top >=
			settings.height - window.innerWidth / 3
		) {
			heroScrollHorizontalItems.style.opacity = `${
				1 - (window.scrollY - settings.top) / 5000
			}`;
			heroScrollHorizontalItems.style.filter = `blur(${
				(window.scrollY - settings.top) / 1000
			}px)`;
		} else {
			heroScrollHorizontalItems.style.opacity = `1`;
			heroScrollHorizontalItems.style.filter = `blur(0px)`;
		}
		// console.log(settings.height - window.innerWidth / 3);
	});
}

window.addEventListener('DOMContentLoaded', render);
