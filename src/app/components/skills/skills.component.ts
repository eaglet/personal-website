import { Component, OnInit } from '@angular/core';
import { Experience, DashboardService, Skills } from 'src/app/pages/dashboard/dashboard.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  public clicked = true;
  public clicked1 = false;
  skills: Skills[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.skills = this.dashboardService.getSkills();
  }

}
