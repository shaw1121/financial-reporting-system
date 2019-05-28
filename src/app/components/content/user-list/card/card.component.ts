import { User } from './../../../../model/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'frs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }



}
