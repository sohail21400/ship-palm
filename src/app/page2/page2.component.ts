import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-page2',
	templateUrl: './page2.component.html',
	styleUrls: ['./page2.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class Page2Component {
	selectedData: any; // To hold the data passed from Page1Component
	data: any; // To hold the data fetched from the JSON file
	constructor(private route: ActivatedRoute, private http: HttpClient) { }

	ngOnInit() {
		this.http.get<any>('assets/page1data.json').subscribe(
			(data) => {
				this.data = data; // Assign the data to the class property for further processing
				console.log(data); // Display the fetched data in the browser console for testing
			},
			(error) => {
				console.error('Error:', error); // Handle any errors that occur during the HTTP request
			}
		);

		this.selectedData = this.route.snapshot?.queryParams;
		console.log(this.selectedData);
		console.log("Type: ", typeof this.selectedData);

		console.log("Data: ", this.selectedData.data);
	}
}
