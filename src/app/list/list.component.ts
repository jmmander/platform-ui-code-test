import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders: Provider[] = [];
  public unselectedProviders: Provider[] = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];
  

  onSave(selectedProvider: Provider) {
    console.log("selected " + selectedProvider.name);
    this.selectedProviders.push(selectedProvider);
    var index = this.unselectedProviders.indexOf(selectedProvider);
    this.unselectedProviders.splice(index, 1);
    }

  onRemove(removedProvider: Provider) {
    console.log("removing " + removedProvider.name);
    this.unselectedProviders.push(removedProvider);
    var index = this.selectedProviders.indexOf(removedProvider);
    this.selectedProviders.splice(index, 1);
  }

  constructor() {}

  ngOnInit() {}

}
