import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  array: string[] = [];

  constructor() { }

  loadExperienceData(): void {
    this.array = ['Опыт работы 1', 'Опыт работы 2', 'Опыт работы 3'];
  }
  ngOnInit(): void {
    this.loadExperienceData();
  }

 
}
