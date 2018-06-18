import { Component, AfterViewInit } from '@angular/core';
import { ElementsScrollHeightService } from '@shared/services';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
	host: {'style': 'display:block'}
})
export class HomeComponent implements AfterViewInit {
	image: any;
	icon: any;
	styles: any;
	services: any;
	center: {
		lat: number,
		lng: number
	};
	public schedule: any;
	lat: number = 49.444315;
	lng: number = 24.937426;
	options: any;

	constructor(private _elementsScrollHeightService: ElementsScrollHeightService) {
		this.image = {
			large: {
				src: 'assets/images/main-image/main-xl.jpg',
				width: '1920px'
			},
			big: {
				src: 'assets/images/main-image/main-lg.jpeg',
				width: '1280px'
			},
			medium: {
				src: 'assets/images/main-image/main-md.jpeg',
				width: '640px'
			},
			small: {
				src: 'assets/images/main-image/main-sm.jpeg',
				width: '640px'
			},
			sertificates: [
			'assets/images/sertificates/001.jpg',
			'assets/images/sertificates/002.jpg',
			'assets/images/sertificates/003.jpg'
			]
		};

		this.schedule = [
			{
				name: 'ПН',
				time: {
					from: '8:00',
					to: '17:00'
				}
			}, {
				name: 'ВТ',
				time: {
					from: '8:00',
					to: '17:00'
				}
			}, {
				name: 'СР',
				time: {
					from: '8:00',
					to: '17:00'
				}
			}, {
				name: 'ЧТ',
				time: {
					from: '8:00',
					to: '17:00'
				}
			}, {
				name: 'ПТ',
				time: {
					from: '8:00',
					to: '17:00'
				}
			}, {
				name: 'СБ, НД',
				time: {
					from: 'вихідні'
				}
			}
		];

		this.services = [
			{
				image: 'assets/images/services/passport.jpg',
				title: 'Технічна інвентаризація і виготовлення технічного паспорту',
				text: [
					'Технічна інвентаризація об\'єктів нерухомості - це комплекс робіт ' +
					'по визначенню площі конструкції, положенню на місцевості, матеріалу, ' +
					'протяжності та інших характеристик об\'єкта.',

					'Технічний паспорт - це один з головних документів на будинок, квартиру,' +
					'будівлю або іншу капітальну споруду. На його підставі площа об\'єкта ' +
					'нерухомості вноситься в реєстр прав власності на нерухоме майно' +
					'і безліч інших операцій, пов\'язаних з нерухомістю.',

					'При купівлі-продажу, обміні або перепланування нерухомого майна' +
					'виникає необхідність отримання комплекту документів, в тому числі' +
					'і оформлення техпаспорта.',

					'В яких випадках необхідно проводити технічну інвентаризацію?',

					'В процесі оформлення документів на новозбудований будинок',
					'При переоформленні прав власності на майно, на нового власника',
					'При реєстрації прав власності на об\'єкт будівництва',
					'Перед прийняттям в експлуатацію об\'єктів нерухомості після закінчення ' +
					'будівництва, реконструкції та капітального ремонту',
					'При проведенні реєстрації прав власності на нерухоме майно, яке утворилося ' +
					'в результаті поділу, об\'єднання чи виділення частини',
					'Також, технічна інвентаризація може проводитися за заявою замовника.',

					'Які об\'єкти підлягають технічній інвентаризації?',
					'Багатоквартирні житлові будинки, гуртожитки',
					'Житлові будинки',
					'Багатофункціональні будинки та комплекси',
					'Будівлі та споруди громадського та виробничого призначення',
					'Господарські будівлі, до яких відносяться: Гаражі, літні кухні,' +
					'Сараї, майстерні, вбиральні, погреби, котельні, трансформаторні підстанції, навіси.',
					'Господарські споруди, до яких відносяться: Колодязі, вигрібні ями, огорожі, паркани,' +
					'Ворота, хвіртки.'
				]
			}, {
				image: 'assets/images/services/dovidka.jpg',
				title: 'Інформаційна довідка і виготовлення інформаційної довідки',
				text: [
					'Інформаційна довідка БТІ – це дані ( інформація) про проведену державну ' +
					'реєстрацію права власності, що здійснювалася на паперових носіях ' +
					'(реєстраційних книгах, архівних/реєстраційних справах).',

					'Інформаційна довідка потрібна для того, щоб нотаріус/державний ' +
					'реєстратор міг встановити, чи дійсно нерухоме майно (квартира, будинок ' +
					'та ін.) належить особі, яка звернулася до нього (у разі оформлення ' +
					'відчуження), чи спадкодавцю (померлій особі) після якого оформляється спадщина.'
				]
			}, {
				image: 'assets/images/services/rozpodil.jpg',
				title: 'Розподіл нерухомого майна',
				text: [
					'Розділ майна - комплекс робіт, який дозволяє виконати висновок про' +
					'технічної можливості поділу (проект розділу), в якому, на підставі' +
					'технічних вимірів, визначаються частки власників без нанесення шкоди' +
					'господарським призначенням будови.',

					'Дарування частки квартири',

					'Законодавством передбачено право власників на поділ,' +
					'дарування та виділення загального майна. В такому випадку важливе значення ' +
					'має технічна складова. Так, поділ об\'єкта повиннен бути ' +
					'технічно можливим, не змінювати функціональне призначення об\'єкта, не' +
					'ускладнювати його використання і т.п. Тому обов\'язковим є' +
					'розробка проекту поділу майна, який містить частки' +
					'власників, що в свою чергу дозволяє здійснити розділ, дарування' +
					'та інші операції.'
				]
			}, {
				image: 'assets/images/services/vudil.jpg',
				title: 'Підготовка документів та Розрахунок часток для виділення із складу будинку володіння',
				text: [
					'Домоволодіння складається з земельної ділянки, будинку та господарських ' +
					'будівель та споруд. Для того щоб провести розділ домоволодіння в натурі, ' +
					'необхідно враховувати те, щоб кожен власник своєї частини, міг здійснювати ' +
					'своє право користування і розпорядження майном, не приносячи незручностей, ' +
					'іншим співвласникам. Тому розподіл домоволодіння відбувається з урахуванням ' +
					'можливості кожного співвласника мати свою земельну ділянку і окремі входи в ' +
					'житлове приміщення і на ділянку. Іноді виділ в натурі не дає можливості ' +
					'обладнання окремого проходу на ділянку, тому  частина земельної ділянки ' +
					'може пропонуватися у спільне користування. '
				]
			}
		];

		this.center = {
			lat: 49.444315,
			lng: 24.933441
		};

		this.styles = [
			{
				featureType: 'all',
				stylers: [
					{ saturation: -80 }
				]
			}, {
				featureType: 'road.arterial',
				elementType: 'geometry',
				stylers: [
					{ hue: '#00ffee' },
					{ saturation: 50 }
				]
			}, {
				featureType: 'poi.business',
				elementType: 'labels',
				stylers: [
					{ visibility: 'off' }
				]
			}
		];

		this.icon = {
			service: 'assets/images/service-icon.png',
			money: 'assets/images/money-icon.png',
			house: 'assets/images/house-icon.png',
			scroll: 'assets/images/scroll-icon.png'
		};
	}

	ngAfterViewInit() {
		this._elementsScrollHeightService.saveElementsScrollHeight();
	}

	elScrollHeight(event) {
		const element: HTMLElement = document.getElementById(event.target.id);
		const fullScrollHeight = element.offsetTop + element.offsetHeight;
		return fullScrollHeight;
	}

	check(e) {
		const num = document.getElementById(e.target.id);
		const rect = num.offsetTop;
	}

	moveToActive(event) {
		if (event.target.className === 'active') {
			return;
		} else {
			const element = document.querySelector('img.active');
			if (event.target.nextElementSibling === null) {
				element.className = 'left';
				event.target.className = 'active';
			} else if (event.target.previousSibling.localName !== 'img') {
				element.className = 'right';
				event.target.className = 'active';
			}	else {
				if (event.target.className === 'left') {
					element.className = 'right';
					event.target.className = 'active';
				} else if (event.target.className === 'right') {
					element.className = 'left';
					event.target.className = 'active';
				}
			}
		}
	}
}
