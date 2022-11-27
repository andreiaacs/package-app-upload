import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-file-upload-list',
  templateUrl: './file-upload-list.component.html',
  styleUrls: ['./file-upload-list.component.scss']
})
export class FileUploadListComponent implements OnInit {

  files: string[] = [ ];
  @Input() maxLenghtFile: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event: any) {
    debugger;
    if (this.files.length <= this.maxLenghtFile) {
      this.files.push(event.target.files[0]);
    } else {
      alert('São permitidos no máximo ' + this.maxLenghtFile + ' arquivos.');
    }
  }


}
