import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Stats', icon: 'pi pi-check', routerLink: "dashboard"},
          {label: 'Calendar', icon: 'pi pi-download', routerLink: "create-expanse"},
          {label: 'Documentation', icon: 'fa fa-fw fa-book', routerLink: "create-transfer"}
      ];
  }

}
