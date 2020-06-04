import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experience, DashboardService, Skills } from 'src/app/pages/dashboard/dashboard.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  public clicked = true;
  public clicked1 = false;

  @Input() isShortRow = false;
  @Input() title: string;
  @Input() skills: Skills[];

  @Output() selectedItemChanged: EventEmitter<string> = new EventEmitter();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  selectItem(item: string) {
    this.selectedItemChanged.emit(item);
  }

}
