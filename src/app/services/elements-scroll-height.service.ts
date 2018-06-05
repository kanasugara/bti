import {Injectable} from '@angular/core';
import { MenuItem } from '@shared/models';

@Injectable()
export class ElementsScrollHeightService {
	dataArray: any;
	public showFixedMenu = false;
	public hideFixedMenu = false;
	public primeViewLine: number;
	public menuItems: Array<MenuItem> = [
		{
			id: 'about',
			name: 'Про нас'
		}, {
			id: 'service',
			name: 'Послуги'
		}, {
			id: 'contacts',
			name: 'Контакти'
		}, {
			id: 'map',
			name: 'Карта'
		}];

	saveElementsScrollHeight() {
		for (let i = 0; i < this.menuItems.length; i++) {
			const element: HTMLElement = document.getElementById(this.menuItems[i].id);
			this.menuItems[i].offsetTop = element.offsetTop;
			this.menuItems[i].offsetBottom = element.offsetTop + element.offsetHeight;
		}
	}

	checkScrollPosition(event): void {
		const el: HTMLElement = document.getElementById(event.target.id);
		const position: number = el.scrollTop;
		this.primeViewLine = position + window.innerHeight / 2;
		this.showHideSideNavBar(position);
	}

	showHideSideNavBar(position) {
		if (!this.showFixedMenu && position > 300 ) {
			this.showFixedMenu = true;
		} else if (this.hideFixedMenu && position > 300) {
			this.hideFixedMenu = false;
		} else if (this.showFixedMenu && position < 150) {
			this.showFixedMenu = false;
			this.hideFixedMenu = false;
		} else if (this.showFixedMenu && position < 300) {
			this.hideFixedMenu = true;
		}
	}
}
