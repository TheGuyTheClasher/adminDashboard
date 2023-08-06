import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { SidenavToggleService } from '../services/sidenav-toggle.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent {
  @ViewChild('sidenav', { static: false })
  sidenav!: MatSidenav;
  isSidenavOpen = true;
  private subscription: Subscription;

  constructor(private sidenavToggleService: SidenavToggleService) {
    this.subscription = this.sidenavToggleService.sidenavToggle$.subscribe(() => {
      this.toggleSidenav();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleSidenav() {
    this.sidenav.toggle();
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
