


/*
 Component Name : Amexio  Dropdown Menu
 Component Selector : <amexio-drop-down-menu-options>
 Component Description : Amexio Dropdown component with various modes and configurations .
 */

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'amexio-drop-down-menu-option', template: ''
})

export class AmexioDropDownOptionComponent implements OnInit{

  ngOnInit() {
  }
  /*
   Properties
   name : label
   datatype : string
   version : 4.0 onwards
   default :
   description : Label Dropdown
   */
  @Input() label: string;
  /*
   Properties
   name : icon
   datatype : string
   version : 4.0 onwards
   default :
   description : icon on DropDown Menu
   */
  @Input() icon: string;
  /*
   Properties
   name : label-align
   datatype : string
   version : 4.0 onwards
   default :
   description : Label-align for label right/left
   */
  @Input() ('label-align') labelalign : string;
  /*
   Properties
   name : icon-align
   datatype : string
   version : 4.0 onwards
   default :
   description : icon-align for text field right/left
   */
  @Input() ('icon-align') iconalign : string;
  /*
   Properties
   name : add-seperator
   datatype :  boolean
   version : 4.0 onwards
   default : false
   description : add divider to the dropdown menu list
   */
  @Input() ('Add-Seperator') addseperator : boolean;

  /*
   Events
   name : onItemClick
   datatype : none
   version : none
   default : none
   description : Fire when dropdown item or icon click
   */

  @Output() onItemClick: EventEmitter<any> = new EventEmitter<any>();





}
