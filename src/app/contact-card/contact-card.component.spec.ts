import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactCardComponent } from './contact-card.component';
import { ProviderService } from '../provider.service';
import {ListComponent } from '../list/list.component';
import {Provider} from '../provider';


describe('ContactCardComponent', () => {
  let component: ContactCardComponent;
  let service: ProviderService;
  let listComponent: ListComponent

  beforeEach(() => {
    service = new ProviderService();
    component = new ContactCardComponent(service);
    listComponent = new ListComponent(service);
    localStorage.clear();
    service.savedProviders = service.getProviders();
    service.unselectedProviders = [];

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onRemove', () => {
    const provider: Provider = {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    };

    it('should move a saved provider from savedProviders to unselectedProviders', () => {
      component.onRemove(provider);
      expect(service.savedProviders.length).toEqual(2);
      expect(service.unselectedProviders.length).toEqual(1);
    });

    it('should move John to unselectedProviders', () => {
      component.onRemove(provider);
      expect(service.unselectedProviders[0].name).toEqual('John');
      expect(service.unselectedProviders[0].id).toEqual('1');
      expect(service.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
      expect(service.unselectedProviders[0].phone).toEqual('8991234321');
    });
    
  });
});



