import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import {
	AppComponent,
	AppHeaderComponent,
	AppFooterComponent,
	HomeComponent
} from '@shared/components';

// Services
import { DataService, ElementsScrollHeightService } from '@shared/services';

// Routes
const routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		AppHeaderComponent,
		AppFooterComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes)
	],
	providers: [DataService, ElementsScrollHeightService],
	bootstrap: [AppComponent]
})
export class AppModule { }
