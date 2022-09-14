import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ionite: string;

  displayedColumns: string[] = ['first_name', 'last_name', 'twitter'];
  dataSource = new MatTableDataSource<any>([
    {
    first_name : 'Max',
    last_name: 'Lynch',
    twitter:'max_lynch'
    },
    {
      first_name : 'Matt',
      last_name: 'Netkow',
      twitter:'dotNetkow'
     },
     {
      first_name : 'Ben',
      last_name: 'Sperry',
      twitter:'benjsperry'
     },
     {
      first_name : 'Jack',
      last_name: 'Young',
      twitter:'jackyoung'
     },
     {
      first_name : 'Thomas',
      last_name: 'Young',
      twitter:'thomasyoung'
     },
  ]);


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  useForm: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear: boolean;

  constructor(private fb:  FormBuilder) {

  }


  ngOnInit(): void {
    this.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log('ngOnInit');
    //FOI NECESSARIO O SEGUINTE APPROACH / TURN-AROUND
    //setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => this.dataSource.sort = this.sort);

    /*
    setTimeout(() => 
    {
      this.useForm = this.fb.group({
        name: ['', Validators.required],
        address:['', Validators.required]
      });
    });
    */

    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
    this.isLinear = false;


  }

  ngAfterViewInit() {
    //OU ENTAO O SEGUINTE APPROACH / TURN-AROUND
    this.dataSource.paginator = this.paginator


    /*
    this.useForm = this.fb.group({
      name:['', Validators.required],
      address:['', Validators.required]
    }); 
    */
}




}
