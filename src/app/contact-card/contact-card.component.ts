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
//saved boolean value is passed down from list component, determines if X is required.
  @Input() saved: boolean;


  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    
  }

//removes provider from savedProviders and into unselectedProviders
   onRemove(provider): void {
    this.providerService.removeProvider(provider)
  }


}
