import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	constructor(
		private loginService: LoginService
	) { }

	ngOnInit() {

		this.loginService.Login('letscode', 'lets@123')
			.subscribe(
				(data) => {
					this.loginService.setAuthToken(data);
				}
			)

	}
}
