import { Component } from '@angular/core';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { SidenavToggleService } from '../services/sidenav-toggle.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {
  userName: string = 'Alex Crow'


  constructor(private sidenavToggleService: SidenavToggleService) {}

  ngOnInit(): void {}
  toggleSidenav() {
    this.sidenavToggleService.toggleSidenav();
  }
}
