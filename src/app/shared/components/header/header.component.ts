import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ParfumesComponent} from "./submenu/parfumes/parfumes.component";
import {FormControl, FormGroup} from "@angular/forms";
import {Overlay, OverlayRef} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {BlankComponent} from "./blank.component";

@Component({
  selector: 'header-section',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  drawerState = 'out';
  showFiller = false;
  tabs = ['PARFUMS', 'COSMETIQUE VISAGE', 'CHEVEUX', 'MAQUILLAGE', 'PARAPHARMACIE', 'BONS PLANS','CADEAUX', 'MARQUES'];
  submenu = ParfumesComponent
  activeTab: number = -1; // Initial state, no tab is active
  hoveredTabIndex: number | null = null;
  // Function to set active tab on hover
  onTabHover(index: number) {
    this.activeTab = index;
    this.hoveredTabIndex = index;
    console.log('Focus changed to tab', index);
  }
  onTabLeave() {
    this.hoveredTabIndex = null;
  }
  onTabFocus(event: MatTabChangeEvent) {
    // Do something when the tab gets focus
    console.log('Focus changed to tab', event.index);
  }

  // Function to handle tab changes
  onTabChange(event: MatTabChangeEvent) {
    // Do something when the tab changes
    console.log('Tab changed to index', event.index);
  }

  @Output() onFocus = new EventEmitter<void>();
}
