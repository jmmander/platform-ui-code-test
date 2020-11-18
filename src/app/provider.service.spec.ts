import { TestBed } from '@angular/core/testing';
import {PROVIDERS} from './providers-list'
import { ProviderService } from './provider.service';
import { Provider } from './provider'

describe('ProviderService', () => {
  let service: ProviderService
  beforeEach(() => {
    service = new ProviderService();
    localStorage.clear();
    service.savedProviders = [];
    service.unselectedProviders = PROVIDERS;


   });

  

  it('should be created', () => {
    expect(service).toBeTruthy();
  }
  );


describe('getProviders', () => {
  it('should return a list of 3 items', () => {
    expect(service.getProviders().length).toEqual(3);
  });
});

describe('getSaved', () => {
  it('should return an empty list when first loaded', () => {
    expect(service.getSaved().length).toEqual(0);
  });
});

describe('getUnselected', () => {
  it('should return a list of length 3 when first loaded', () => {
    expect(service.getUnselected().length).toEqual(3);
  });
});


describe('providers', () => {
  it('should have an initial length of 3', () => {
    expect(service.providers.length).toEqual(3);
  });

  it('should have an id', () => {
    expect(service.providers[0].id).toEqual('1');
  });

  it('should have a name', () => {
    expect(service.providers[0].name).toEqual('John');
  });

  it('should have an address', () => {
    expect(service.providers[0].address).toEqual('123 Greenway Blvd');
  });

  it('should have a phone', () => {
    expect(service.providers[0].phone).toEqual('8991234321');
  });
});

describe('saveProvider', () => {
  const provider: Provider = {
    id: '1',
    name: 'John',
    address: '123 Greenway Blvd',
    phone: '8991234321'
  };

  it('should increase the length of savedProviders by 1', () => {
    service.saveProvider(provider);
    expect(service.savedProviders.length).toEqual(1);
  });

  it('should move Johns card into savedProviders', () => {
    service.saveProvider(provider);
    expect(service.savedProviders[0].id).toEqual('1');
    expect(service.savedProviders[0].name).toEqual('John');
    expect(service.savedProviders[0].address).toEqual('123 Greenway Blvd');
    expect(service.savedProviders[0].phone).toEqual('8991234321');
  });
});

});

