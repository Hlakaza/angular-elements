import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  @Input() title: any;
  @Input() token: any;
  @Input() dataobject: any;
  data: any;
  red: any = '{"june": "Token"}';
  ngOnInit(): void {
    console.log('title 1', this.title);
    console.log('token 1', this.token);
    this.data = this.title;
    console.log('this.data', this.data);
    console.log('this.red', this.red.june);
    if (this.dataobject) {
       console.log('Red', JSON.parse(this.dataobject));
    }
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log('change', change);
    this.title = change?.title ? change?.title?.currentValue : this.title;
    this.token = change?.token ? change?.token?.currentValue : this.token;
    this.dataobject = change?.dataobject ? change?.dataobject?.currentValue : this.dataobject;
    console.log('title 2', this.title);
    console.log('token 2', this.token);
  }
}
