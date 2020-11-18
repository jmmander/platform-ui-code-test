import { Injectable } from '@angular/core';
import { PROVIDERS } from './providers-list';
import { Provider } from './provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor() { }

  savedProviders: Provider[] = this.getSaved();
  
  unselectedProviders: Provider[] = this.getUnselected()

  providers: Provider[] = this.getProviders()

  getProviders(): Provider[] {
    this.providers = PROVIDERS;
    return PROVIDERS;
  }

  getUnselected(): Provider[] {
    let localStorageItem = JSON.parse(localStorage.getItem('unselected'));
    if (localStorageItem == null) {
      this.unselectedProviders = this.getProviders() 
      } 
    else
         {
      this.unselectedProviders = localStorageItem.providers;    
      }
    return this.unselectedProviders;
  }

  getSaved(): Provider[] {
    let localStorageItem = JSON.parse(localStorage.getItem('saved'));
    if (localStorageItem == null) {
      this.savedProviders = [];
      } 
    else
         {
      this.savedProviders = localStorageItem.providers;    
      }
    return this.savedProviders;
  }

  saveProvider(provider){
    this.savedProviders.push(provider);
    var index = this.unselectedProviders.indexOf(provider);
    this.unselectedProviders.splice(index, 1);
    localStorage.setItem("saved", JSON.stringify({ providers: this.savedProviders }));
    localStorage.setItem("unselected", JSON.stringify({ providers: this.unselectedProviders }))
   
  }

  removeProvider(provider){
    this.unselectedProviders.push(provider);
    var index = this.savedProviders.indexOf(provider);
    this.savedProviders.splice(index, 1);
    localStorage.setItem("saved", JSON.stringify({ providers: this.savedProviders }));
    localStorage.setItem("unselected", JSON.stringify({ providers: this.unselectedProviders }))
  }

}
   

