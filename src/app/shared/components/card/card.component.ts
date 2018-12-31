import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input() hasOptions: boolean;
  @Input() hasHeader: boolean;
  @Input() hasFooter: boolean;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
