import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000').subscribe(result => {
      console.log(result);
    });
  }

  logForm(value: any) {
    console.log('LogForms fired..');
    
    this.http.post('http://localhost:3000/users/info', value).subscribe(result => {
      console.log('Logged');
    });

    // this.http.post('http://localhost:3000/users/info', {}).subscribe(result => {
    //   console.log('Logged');
    // });
    console.log(value);
  }
}
