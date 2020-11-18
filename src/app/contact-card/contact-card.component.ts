import { Component, OnInit, Input} from '@angular/core';
import { Provider } from '../provider'
import { ProviderService } from '../provider.service';

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() provider: Provider; 

  @Input() saved: boolean;


  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    
  }

  private onRemove(provider): void {
    this.providerService.removeProvider(provider)
  }


}
