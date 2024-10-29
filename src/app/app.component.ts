import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular_exercise';

  API_KEY: string = "PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf"
  term: string = "";

  constructor(private http: HttpClient,private router: Router) { }



  // handleClick() {
  //   // return this.http.get<ResponseModel<any>>(UrlUtil.getUrl("search"), { headers: { "x-api-key": this.API_KEY }, params: { "Query": this.term } })
  //   //   .subscribe({
  //   //     next: (res) => {

  //   //     },
  //   //     error: (e) => {
  //   //       console.log("error", e)


  //   //     }
  //   //   })
  //   this.router.navigate([`result/${this.term}`]);

  // }




}
