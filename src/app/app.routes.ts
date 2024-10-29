import { Routes } from '@angular/router';
import { ResultComponent } from './pages/result/result.component';
import { SearchComponent } from './pages/search/search.component';
import { CompanyComponent } from './pages/company/company.component';

export const routes: Routes = [


    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'result/:term',
        component: ResultComponent
    },
    {
        path: 'company/:company_number',
        component: CompanyComponent,
        // data:
    }
];
