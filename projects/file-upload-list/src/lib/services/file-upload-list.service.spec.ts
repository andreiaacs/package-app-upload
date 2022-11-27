import { TestBed } from '@angular/core/testing';

import { FileUploadListService } from './file-upload-list.service';

describe('FileUploadListService', () => {
  let service: FileUploadListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploadListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
