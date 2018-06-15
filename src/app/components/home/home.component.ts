import { Component, OnInit } from '@angular/core';
import { ElementsScrollHeightService } from '@shared/services';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
	host: {'style': 'display:block'}
})
export class HomeComponent implements OnInit {
	image: any;
	icon: any;
	styles: any;

	center: {
		lat: number,
		lng: number
	};

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
			'assets/images/sertificates/002.jpg'
			]
		};

		this.center = {
			lat: 49.444315,
			lng: 24.933441
		};
		this.styles = [
			{
				featureType: "all",
				stylers: [
					{ saturation: -80 }
				]
			},{
				featureType: "road.arterial",
				elementType: "geometry",
				stylers: [
					{ hue: "#00ffee" },
					{ saturation: 50 }
				]
			},{
				featureType: "poi.business",
				elementType: "labels",
				stylers: [
					{ visibility: "off" }
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

	ngOnInit() {
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
		console.log(rect);
	}

}
