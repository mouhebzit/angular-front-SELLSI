import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentPortal} from "@angular/cdk/portal";
import {BlankComponent} from "./shared/components/header/blank.component";
import {Overlay, OverlayRef, PositionStrategy} from "@angular/cdk/overlay";
import {ParfumesComponent} from "./shared/components/header/submenu/parfumes/parfumes.component";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SELLSI';
  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer() {
    this.drawer.toggle();
  }
}


