import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Message } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { CheckboxModule } from 'primeng/checkbox';
import { state } from '@angular/animations';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonModule, MessagesModule, CheckboxModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  term: string = "";
  messages: Message[] = [];
  superuser: boolean = false;

  constructor(private router: Router) { }



  handleClick() {
    this.messages.splice(0, this.messages.length);
    // check the input at least 3 chars and not included and special characters other than space , - and &.
    if (this.term.trim().length > 2 && this.term.match(/[^\w-\s&]/g) == null) {
      this.router.navigate([`result/${this.term}`], {
        state: {
          superuser: this.superuser
        },
      });
    } else {
      this.messages.push({ severity: 'error', summary: 'Please input a vaild search term which is more three characters and no special characters other than space , - and & ' },)
    }

  }

}
