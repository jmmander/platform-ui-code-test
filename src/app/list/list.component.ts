import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider';
import { PROVIDERS } from '../providers-list'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  providers = PROVIDERS;
  public selectedProviders: Provider[] = [];
  public unselectedProviders = this.providers;


  constructor() {}

  ngOnInit() {}

  onSave(selectedProvider: Provider) {
      console.log(selectedProvider);
      console.log("moving to saved")
      this.selectedProviders.push(selectedProvider);
      var index = this.unselectedProviders.indexOf(selectedProvider);
      this.unselectedProviders.splice(index, 1);
  }

  onRemove(selectedProvider: Provider){this.unselectedProviders.push(selectedProvider);
      var index = this.selectedProviders.indexOf(selectedProvider);
      this.selectedProviders.splice(index, 1);
    }
  }



