import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

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

const googleMapsCore = AgmCoreModule.forRoot({
	apiKey : 'AIzaSyB6PzPCKXOxqchWI5hoHa3bD0fGRcwpjig',
});

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
		googleMapsCore,
		RouterModule.forRoot(routes)
	],
	providers: [DataService, ElementsScrollHeightService],
	bootstrap: [AppComponent]
})
export class AppModule { }
