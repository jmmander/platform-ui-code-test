import { Component, OnInit, Input } from '@angular/core';
import { Provider } from '../provider'

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() provider: Provider; 

  constructor() { }

  ngOnInit() {
  }

}
