import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {
  @Input() titleText: string;
  @Input() infoText: string;
  
  constructor(){
    this.titleText=' ',
    this.infoText = ' ';
  }
}
