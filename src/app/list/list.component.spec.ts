import { ListComponent } from './list.component';
import { ProviderService } from '../provider.service'
import { PROVIDERS } from '../providers-list'
import { Provider } from '../provider';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ContactCardComponent} from '../contact-card/contact-card.component'

describe('ListComponent', () => {
  
  let component: ListComponent;
  let service: ProviderService

  beforeEach(() => {
    service = new ProviderService();
    component = new ListComponent(service);
    localStorage.clear();
    service.savedProviders = [];
    service.unselectedProviders = PROVIDERS;

    component.ngOnInit();
  });

  afterEach(() => {
    localStorage.clear();
    service.savedProviders = [];
    service.unselectedProviders = PROVIDERS;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselectedProviders', () => {
    it('should have a length of 3 on first load', () => {
      expect(component.unselectedProviders.length).toEqual(3)
    });
  });

  describe('savedProviders', () => {
    it('should be empty on first load', () => {
      expect(component.savedProviders.length).toEqual(0)
    });
  });

  describe('onSave', () => {
    const provider: Provider = {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    };

    it('should move a provider from unselectedProviders to savedProviders', () => {
      component.onSave(provider);
      expect(component.savedProviders.length).toEqual(1);
      expect(component.unselectedProviders.length).toEqual(2);
    });

    it('should move Johns card into savedProviders', () => {
      component.onSave(provider);
      expect(component.savedProviders[0].id).toEqual('1');
      expect(component.savedProviders[0].name).toEqual('John');
      expect(component.savedProviders[0].address).toEqual('123 Greenway Blvd');
      expect(component.savedProviders[0].phone).toEqual('8991234321');
    });
    });
  });
  

