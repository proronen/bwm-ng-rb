import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// rfom login
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { TempComponent } from './temp/temp.component';
import { RentalComponent } from './rental/rental.component';

import { RentalModule } from './rental/rental.module';

// from login:
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';


const routes: Routes = [
	{path: '', component: RentalComponent},
	{path: 'temp', component: TempComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent,
	AlertComponent,
	HomeComponent,
	LoginComponent,
	RegisterComponent
  ],
  imports: [
	RouterModule.forRoot(routes), 
    BrowserModule,
	RentalModule,
	ReactiveFormsModule,
	HttpClientModule,
	routing
  ],
  providers: [
		AuthGuard,
		AlertService,
		AuthenticationService,
		UserService,
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

		// provider used to create fake backend
		//fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
