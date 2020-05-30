import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Experience, DashboardService } from 'src/app/pages/dashboard/dashboard.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {

  public clicked = true;
  public clicked1 = false;
  experience: Experience[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.experience = this.dashboardService.getExperience();
  }

  filterExperience(category: string) {
    this.experience = [];
    this.experience = this.dashboardService.getExperience();
    if (category !== 'All') {
      this.experience = this.experience.filter(e =>
        e.category === category
      );
    }
  }

}
