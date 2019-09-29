import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  netAsset: number = 1000000; // 计算得到：总资产 - 总负债



}
