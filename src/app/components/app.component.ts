import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ElementsScrollHeightService } from '@shared/services';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {

	constructor(private _elementsScrollHeightService: ElementsScrollHeightService) {}

	ngOnInit() {
		this.hideScroll();
	}

	hideScroll() {
		const child: HTMLElement = document.getElementById('app');
		child.style.paddingRight = child.offsetWidth - child.clientWidth + 'px';
	}

	checkScrollPosition(event): void {
		this._elementsScrollHeightService.checkScrollPosition(event);
	}
}
