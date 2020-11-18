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

  //gets updated provider lists upon loading
  ngOnInit() {
    this.unselectedProviders = this.providerService.getUnselected();
    this.savedProviders = this.providerService.getSaved();
  
  }
//add provider to savedProviders and removes from unselectedProviders
  onSave(provider): void { 
    this.providerService.saveProvider(provider);
    this.unselectedProviders = this.providerService.getUnselected();
    this.savedProviders = this.providerService.getSaved();

  }

  

  }



