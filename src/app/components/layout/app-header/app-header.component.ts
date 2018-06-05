import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MenuItem } from '@shared/models';
import { ElementsScrollHeightService } from '@shared/services';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: ['./app-header.component.sass'],
	host: {'style': 'display:block'}
})

export class AppHeaderComponent implements OnInit {
	logo: string;
	menuItems: Array<MenuItem>;
	scrollPosition: number;

	constructor(private _elementsScrollHeightService: ElementsScrollHeightService) {
		this.logo = 'assets/images/logo.png';
	}

	getMenuItems() {
		this.menuItems = this._elementsScrollHeightService.menuItems;
	}

	scrollTo(el) {
		const element: HTMLElement = document.getElementById(el);
		element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
	}

	prevent(event) {
		event.preventDefault();
	}

	ngOnInit() {
		this.getMenuItems();
	}

}
