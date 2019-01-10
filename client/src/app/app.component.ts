import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  dummy_arr =  { 'firstname': 'uday',
    'lastname': 'h',
    'street': '#home',
    'zip': '877',
    'city': 'bangalore'
};
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get('http://localhost:3000').subscribe(result => {
    //   console.log(result);
    // });
    this.http.get('http://localhost:3000/users/allusers').subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  logForm(value: any) {
    console.log('LogForms fired..');
    this.http.post('http://localhost:3000/users/info', value).subscribe(result => {
      console.log('Logged');
    });
    console.log(value);
  }

  delete(id) {
    console.log('Lets Delete user', id);
    this.http.get('http://localhost:3000/users/delete/' + id).subscribe(result => {
      console.log('Deleted..!');
    });
  }
}
