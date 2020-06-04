import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DashboardService, Projects } from 'src/app/pages/dashboard/dashboard.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit, OnChanges {

  public clicked = true;
  public clicked1 = false;
  projects: Projects[] = [];
  allProjects: Projects[] = [];
  @Input() selectedItems: string[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.projects = this.dashboardService.getProjects();
    this.allProjects = this.projects;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.firstChange) {
      this.filterProjectsBySelectedItems();
    }
  }

  filterProjectsBySelectedItems() {
    if (this.selectedItems.length > 0) {
      this.projects = this.allProjects.filter(p => {
        let contain = false;
        const tag = p.tag.toLowerCase();
        for (const item of this.selectedItems) {
          if (tag.indexOf(item.toLowerCase()) > -1) {
            contain = true;
            break;
          }
        }
        return contain;
      });
    } else {
      this.projects = this.allProjects;
    }
  }

}
