import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'caculator-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  @Input() title: any;
  @Input() token: any;
 
  ngOnInit() {
    console.log('title 1', this.title)
    console.log('token 1', this.token)
    let data: any = '';
  }
  
  ngOnChanges(change: SimpleChanges) {
    console.log('change', change);
    this.title = change?.title ? change?.title?.currentValue : this.title;
    this.token = change?.token ? change?.token?.currentValue : this.token;
    console.log('title 2', JSON.parse(this.title))
    console.log('token 2', this.token)
  }
}
