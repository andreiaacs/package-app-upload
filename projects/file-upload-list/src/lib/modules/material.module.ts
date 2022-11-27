import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule
  ]
})

export class MaterialCustomModule { }
