import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule,MatProgressBarModule,MatGridListModule, MatSidenavModule,MatMenuModule,MatIconModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,MatProgressBarModule, MatToolbarModule,MatGridListModule, MatSidenavModule,MatMenuModule,MatIconModule],
    exports: [MatButtonModule,MatProgressBarModule, MatToolbarModule,MatGridListModule, MatSidenavModule,MatMenuModule,MatIconModule],
})

export class MaterialModule{

}