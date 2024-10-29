import { Component, Input, OnInit } from '@angular/core';
import { Officer } from '../../model/officer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-officer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './officer.component.html',
  styleUrl: './officer.component.scss'
})
export class OfficerComponent {

  @Input() officersData: Officer[];
  constructor() { }
}
