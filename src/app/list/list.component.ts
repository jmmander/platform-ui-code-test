import { Component, OnInit, Input } from '@angular/core';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  unselectedProviders: Provider[];
  savedProviders: Provider[];
  
  constructor(private providerService: ProviderService) {
  }

  ngOnInit() {
    this.unselectedProviders = this.providerService.getUnselected();
    this.savedProviders = this.providerService.getSaved();
  
  }

  onSave(provider): void { 
    this.providerService.saveProvider(provider);
    this.unselectedProviders = this.providerService.getUnselected();
    this.savedProviders = this.providerService.getSaved();

  }

  

  }



