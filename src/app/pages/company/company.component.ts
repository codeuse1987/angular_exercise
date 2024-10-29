import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ResponseModel } from '../../model/responseModel';
import { UrlUtil } from '../../util/urlUtil';
import { Company } from '../../model/company';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OfficerComponent } from '../officer/officer.component';
import { Officer } from '../../model/officer';

interface Map {
  label: string,
  value: string
}
@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, ButtonModule, OfficerComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})


export class CompanyComponent implements OnInit {
  API_KEY: string = "PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf"
  // term: string = "";
  data: Company;
  showOfficers: boolean = false;
  officers: Officer[] = [];
  sKey: string;


  display: Map[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state?.['data'];

    if (!this.data) {
      this.router.navigate(['']);
    }
  }
  setDisplay() {
    this.display.push({ label: "Registered office address", value: this.data.address_snippet });
    this.display.push({ label: "Company Status", value: this.data.company_status });
    this.display.push({ label: "Company type", value: this.data.company_type });
    let desc: string = this.data.description.match(/\d{1,2}\s\w*\s\d{4}/g)!.toString();
    this.display.push({ label: "Incorporated on", value: desc });
  }
  ngOnInit() {
    this.loadOfficers();
    this.setDisplay()
  }

  handleClick() {
    this.showOfficers = !this.showOfficers;
  }

  loadOfficers() {
    return this.http.get<ResponseModel<Officer>>(UrlUtil.getUrl("officers"), { headers: { "x-api-key": this.API_KEY }, params: { "CompanyNumber": this.data.company_number } })
      .subscribe({
        next: (res) => {
          this.officers = [...res.items]
          this.sKey = "Mary"
        },
        error: (e) => {
          console.debug("error", e)
        }
      })
  }

}
