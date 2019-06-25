import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: object;
  //total: any;
  //perPage: any;
  //page: any;
  //totalPages: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data;
        //this.totalPages = data.total_pages;
        //this.total = data.total;
        //this.perPage = data.per_page;
        //this.page = data.page;
        //console.log('total pages: ' + this.totalPages);
        //console.log('per page: ' + this.perPage);
        //console.log('actual page: ' + this.page);
        //console.log('total pages: ' + this.total);
        console.log(this.users);
      }
    );

  }

  firstClick() {
    console.log('clicked');
  }

  dblClick() {
    console.log('double clicked');
  }

}
