import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';	
@Injectable() 
export class RentalService {
	
	private rentals: any[] = [{
		id: 1,
		title: 'Something',
		city: "New york",
		street: "Times Square",
		category: "apartment",
		image: "http://via.placeholder.com/350*250",
		bedrooms: 3,
		description: "Very nice place",
		dailyRate: 34,
		shared: false,
		createdAt: "24/12/2017"
	},{
		id: 2,
		title: 'Something2',
		city: "New york",
		street: "Times Square",
		category: "apartment",
		image: "http://via.placeholder.com/350*250",
		bedrooms: 3,
		description: "Very nice place",
		dailyRate: 34,
		shared: false,
		createdAt: "24/12/2017"
	},{
		id: 3,
		title: 'Something3',
		city: "New york",
		street: "Times Square",
		category: "apartment",
		image: "http://via.placeholder.com/350*250",
		bedrooms: 3,
		description: "Very nice place",
		dailyRate: 34,
		shared: false,
		createdAt: "24/12/2017"
	},{
		id: 4,
		title: 'Something4',
		city: "New york",
		street: "Times Square",
		category: "apartment",
		image: "http://via.placeholder.com/350*250",
		bedrooms: 3,
		description: "Very nice place",
		dailyRate: 34,
		shared: false,
		createdAt: "24/12/2017"
	}];
	
	public getRentals(): any {
		const rentalOservable = new Observable((observer) => {
			setTimeout(() => {
				observer.next(this.rentals);
			}, 1000);
			
			setTimeout(() => {
				observer.error("I am error");
			}, 2000);
			
			setTimeout(() => {
				observer.complete();
			}, 3000);
			
		});
		return rentalOservable;
	}
	
}