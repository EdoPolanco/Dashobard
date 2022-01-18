import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SerieResponseModel } from 'src/models/uf-indicator/response/serie-response.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'valor'];
  pageSize: number = 5;
  page: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatTableDataSource<SerieResponseModel>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.paginator.pageIndex = this.page;
      this.paginator.length = this.data.data.length;
      this.data.paginator = this.paginator;
    });
  }
}
