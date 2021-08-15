const heroScrollContainer = document.querySelector('.hero-scroll-container');
const heroScrollContent = heroScrollContainer.querySelector(
	'.hero-scroll-content'
);
const heroScrollHead = heroScrollContainer.querySelector('.hero-scroll-head');

const heroScrollHorizontalItems = heroScrollContainer.querySelector(
	'.hero-scroll-horizontal-items'
);
heroScrollHorizontalItemsCollection =
	heroScrollHorizontalItems.querySelectorAll('.hero-scroll-item');
function render() {
	const settings = {
		height: heroScrollHorizontalItems.getBoundingClientRect().width,
		top: heroScrollHorizontalItems.getBoundingClientRect().top - 100,
		opacity: 1,
	};
	heroScrollContainer.style.height = `${settings.height}px`;
	window.addEventListener('scroll', () => {
		settings.opacity = 1 - (window.scrollY - settings.top) / 200;
		if (window.scrollY >= settings.top) {
			heroScrollContent.style.transform = `translate(-${
				window.scrollY - settings.top
			}px, ${window.scrollY - settings.top}px)`;
			heroScrollHead.setAttribute(
				'style',
				`opacity: ${settings.opacity};
                filter: blur(${(window.scrollY - settings.top) / 100}px)`
			);
			if (settings.opacity <= 0) {
				heroScrollHead.setAttribute(
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
			heroScrollHorizontalItems.transform = `translateY(${
				window.scrollY - settings.top
			}px)`;
		} else if (window.scrollY < settings.top) {
			heroScrollContent.style.transform = `translate(0px)`;
			heroScrollHead.removeAttribute('style');
		}
		if (
			window.scrollY - settings.top >=
			settings.height - window.innerWidth / 3
		) {
			heroScrollContent.style.opacity = `${
				1 - (window.scrollY - settings.top) / 5000
			}`;
			heroScrollContent.style.filter = `blur(${
				(window.scrollY - settings.top) / 1000
			}px)`;
		} else {
			heroScrollContent.style.opacity = `1`;
			heroScrollContent.style.filter = `blur(0px)`;
		}
		console.log(settings.height - window.innerWidth / 3);
	});
}

window.addEventListener('DOMContentLoaded', render);
