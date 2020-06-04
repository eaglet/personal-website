import { Component, OnInit } from '@angular/core';
import { DashboardService, CardInfo, Skills, Projects } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cardInfos: CardInfo[] = [];
  technologiesSkills: Skills[] = [];
  otherSkills: Skills[] = [];
  selectedItems: string[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.cardInfos = this.dashboardService.getCardInfos();
    this.technologiesSkills = this.dashboardService.getTechnologoesSkills();
    this.otherSkills = this.dashboardService.getOtherSkills();
  }

  filterSelected(item: string) {
    const index = this.selectedItems.indexOf(item);
    if (index === -1) {
      this.selectedItems.push(item);
      this.selectedItems = this.selectedItems.slice();
    }
  }

  removeFilter(item: string) {
    const index = this.selectedItems.indexOf(item);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
      this.selectedItems = this.selectedItems.slice();
    }
  }
}
