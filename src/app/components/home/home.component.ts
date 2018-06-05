import { Component, OnInit } from '@angular/core';
import { ElementsScrollHeightService } from '@shared/services';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
	host: {'style': 'display:block'}
})
export class HomeComponent implements OnInit {
	image: string;
	constructor(private _elementsScrollHeightService: ElementsScrollHeightService) {
		this.image = 'assets/images/3132.jpg'
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
