import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseModel } from '../../model/responseModel';
import { UrlUtil } from '../../util/urlUtil';
import { Company } from '../../model/company';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [DataViewModule, CommonModule, ButtonModule, BlockUIModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  API_KEY: string = "PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf"
  companies: Company[] = [];
  superuser: boolean;
  loading: boolean = false;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute,) {
    this.superuser = this.router.getCurrentNavigation()?.extras.state?.['superuser'];
    this.excuteSearch();
  }

  excuteSearch() {
    this.loading = true;
    return this.http.get<ResponseModel<any>>(UrlUtil.getUrl("search"), { headers: { "x-api-key": this.API_KEY }, params: { "Query": this.activatedRoute.snapshot.params['term'] } })
      .subscribe({
        next: (res) => {
          this.companies = res.items
          this.loading = false;
        },
        error: (e) => {
          console.debug("error", e)


        }
      })
  }
  handleClick(company: Company) {
    this.router.navigate([`company/${company.company_number}`], {
      state: {
        data: company
      },
    });
  }

}
