import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Experience, DashboardService } from 'src/app/pages/dashboard/dashboard.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit, OnChanges {

  clicked = true;
  clicked1 = false;
  clicked2 = false;
  experience: Experience[] = [];
  allExperience: Experience[] = [];
  selectedItemExperience: Experience[] = [];
  @Input() selectedItems: string[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.experience = this.dashboardService.getExperience();
    this.allExperience = this.experience;
    this.selectedItemExperience = this.experience;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.firstChange) {
      this.filterExperienceBySelectedItems();
    }
  }

  filterExperienceByCate(category: string) {
    if (category !== 'All') {
      this.experience = this.selectedItemExperience.filter(e =>
        e.category === category
      );
    } else {
      this.experience = this.selectedItemExperience;
    }
  }

  filterExperienceBySelectedItems() {
    if (this.selectedItems.length > 0) {
      this.experience = this.allExperience.filter(e => {
        let contain = false;
        const tag = e.tag.toLowerCase();
        for (const item of this.selectedItems) {
          if (tag.indexOf(item.toLowerCase()) > -1) {
            contain = true;
            break;
          }
        }
        return contain;
      });
      this.selectedItemExperience = this.experience;
    } else {
      this.experience = this.allExperience;
    }
  }

  cateButtonClicked(index: string) {
    this.clicked = false;
    this.clicked1 = false;
    this.clicked2 = false;
    if (index === '0') {
      this.clicked = true;
    } else if (index === '1') {
      this.clicked1 = true;
    } else {
      this.clicked2 = true;
    }
  }

}
