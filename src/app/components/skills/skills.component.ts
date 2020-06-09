import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Experience, DashboardService, Skills } from 'src/app/pages/dashboard/dashboard.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnChanges {

  public clicked = true;
  public clicked1 = false;

  @Input() isShortRow = false;
  @Input() title: string;
  @Input() skills: Skills[];
  sortedCol: string;
  nameSortAscendingOrder = true;
  categorySortAscendingOrder = true;
  proficiencySortAscendingOrder = false;

  @Output() selectedItemChanged: EventEmitter<string> = new EventEmitter();

  constructor(private dashboardService: DashboardService) { }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.skills.currentValue !== simpleChanges.skills.previousValue) {
      this.sortBy('default');
    }
  }

  selectItem(item: string) {
    this.selectedItemChanged.emit(item);
  }

  sortBy(col: string) {
    if (col === 'name') {
      if (this.nameSortAscendingOrder) {
        this.skills.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
      } else {
        this.skills.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
      }

      this.nameSortAscendingOrder = !this.nameSortAscendingOrder;

    } else if (col === 'category') {
      if (this.categorySortAscendingOrder) {
        this.skills.sort((a, b) => a.category.toLowerCase() > b.category.toLowerCase() ? 1 : -1);
      } else {
        this.skills.sort((a, b) => a.category.toLowerCase() > b.category.toLowerCase() ? -1 : 1);
      }

      this.categorySortAscendingOrder = !this.categorySortAscendingOrder;

    } else if (col === 'proficiency') {
      if (this.proficiencySortAscendingOrder) {
        this.skills.sort((a, b) => a.proficiency.toLowerCase() > b.proficiency.toLowerCase() ? 1 : -1);
      } else {
        this.skills.sort((a, b) => a.proficiency.toLowerCase() > b.proficiency.toLowerCase() ? -1 : 1);
      }

      this.proficiencySortAscendingOrder = !this.proficiencySortAscendingOrder;

    } else {
      // Sort by category & proficiency
      // this.skills.sort((a, b) => {
      //   if (a.proficiency.toLowerCase() === b.proficiency.toLowerCase()) {
      //     return a.category.toLowerCase() < b.category.toLowerCase() ? -1 : a.category.toLowerCase() > b.category.toLowerCase() ? 1 : 0;
      //   }
      //   return a.category.toLowerCase() < b.category.toLowerCase() ? -1 : 1;
      // });
      this.skills.sort((a, b) => {
        if (a.category.toLowerCase() === b.category.toLowerCase()) {
          return a.proficiency.toLowerCase() > b.proficiency.toLowerCase() ? -1 :
           a.proficiency.toLowerCase() < b.proficiency.toLowerCase() ? 1 : 0;
        }
        return a.category.toLowerCase() < b.category.toLowerCase() ? -1 : 1;
      });
    }

    this.sortedCol = col;
  }

}
