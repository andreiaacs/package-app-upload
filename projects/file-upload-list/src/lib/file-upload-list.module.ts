import { NgModule } from '@angular/core';
import { FileUploadListComponent } from './file-upload-list.component';
import { MaterialCustomModule } from './modules/material.module';

@NgModule({
  declarations: [
    FileUploadListComponent
  ],
  imports: [
    MaterialCustomModule
  ],
  exports: [
    FileUploadListComponent
  ]
})
export class FileUploadListModule { }
