import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ParfumesComponent} from "./submenu/parfumes/parfumes.component";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'header-section',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {



  drawerState = 'out';
  showFiller = false;
  tabs = ['PARFUMS', 'COSMETIQUE VISAGE', 'CHEVEUX', 'MAQUILLAGE', 'PARAPHARMACIE', 'BONS PLANS', 'MARQUES'];
  submenu = ParfumesComponent
  activeTab: number = -1; // Initial state, no tab is active

  // Function to set active tab on hover
  onTabHover(index: number) {
    this.activeTab = index;
    console.log('Focus changed to tab', index);
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


}
