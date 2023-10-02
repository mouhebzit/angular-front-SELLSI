import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Host,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ParfumesComponent} from "./submenu/parfumes/parfumes.component";
import {FormControl, FormGroup} from "@angular/forms";
import {FlexibleConnectedPositionStrategy, Overlay, OverlayRef, RepositionScrollStrategy} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {BlankComponent} from "./blank.component";


@Component({
  selector: 'header-section',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() toggleDrawerEvent = new EventEmitter<void>();

  onButtonClick() {
    this.toggleDrawerEvent.emit();
  }
  tabs = ['Parfums', 'Cosmétique visage', 'cheveux', 'Maquillage', 'Parapharmacie', 'Bons plans','Cadeaux', 'Marques'];
  submenu = ParfumesComponent

  ishovered = [false, false, false, false, false, false,false, false]

  constructor(private cdRef: ChangeDetectorRef) {}


  openMenu(i:number){
    this.ishovered = [false, false, false, false, false, false,false, false]
    this.ishovered[i] = true
    console.log("menu is opened")
  }

  closeMenu(){
    this.ishovered = [false, false, false, false, false, false,false, false]
    this.cdRef.detectChanges();
    console.log("from header close")
    console.log(this.ishovered)
  }
}
