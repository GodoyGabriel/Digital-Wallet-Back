import { Test, TestingModule } from '@nestjs/testing';
import { AddressesDataService } from './addressesData.service';

describe('AddressesDataService', () => {
  let service: AddressesDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressesDataService],
    }).compile();

    service = module.get<AddressesDataService>(AddressesDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
