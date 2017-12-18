/**
 * Created by pratik on 27/11/17.
 */
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonDataService} from "../services/data/common.data.service";
import {HttpModule} from "@angular/http";
import {DeviceQueryService} from "../services/device/device.query.service";
import {AmexioTabComponent} from "./tab/tab.component";
import {AmexioTabPill} from "./tab/tab.pill.component";
import {AmexioVerticalTabComponent} from "./tab/vertical-tab/vertical.tab.component";
import {AmexioRightVerticalTabComponent} from "./tab/right-vertical-tab/right.vertical.component";
import {AmexioFieldSetComponent} from "./fieldset/fieldset.component";
import {AmexioAccordionTabComponent} from "./accordion/accordion.component";
import {AmexioAccordionComponent} from "./accordion/accordion.item";
import {AmexioWindowPaneComponent} from "./window/window.pane.component";
import {AmexioWindowBodyComponent} from "./window/pane.action.body";
import {AmexioWindowFooterComponent} from "./window/pane.action.footer";
import {AmexioWindowHeader} from "./window/pane.action.header";
import {AmexioCardComponent} from "./card/card.component";

export * from '../services/data/common.data.service';
export * from '../services/device/device.query.service';

export * from './tab/tab.component';
export * from './tab/tab.pill.component';

export * from './tab/vertical-tab/vertical.tab.component';
export * from './tab/right-vertical-tab/right.vertical.component';

export * from './fieldset/fieldset.component';

export * from './accordion/accordion.component';
export * from './accordion/accordion.item';

export * from './window/window.pane.component';
export * from './window/pane.action.body';
export * from './window/pane.action.footer';
export * from './window/pane.action.footer';

export * from './card/card.component';

const LAYOUT_COMPONENTS = [
  AmexioTabComponent,
  AmexioTabPill,
  AmexioVerticalTabComponent,
  AmexioRightVerticalTabComponent,
  AmexioFieldSetComponent,
  AmexioAccordionTabComponent,
  AmexioAccordionComponent,
  AmexioWindowPaneComponent,
  AmexioWindowBodyComponent,
  AmexioWindowFooterComponent,
  AmexioWindowHeader,
  AmexioCardComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: LAYOUT_COMPONENTS,
  declarations: LAYOUT_COMPONENTS
})
export class AmexioLayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AmexioLayoutModule,
      providers: [CommonDataService,DeviceQueryService]
    };
  }
}
