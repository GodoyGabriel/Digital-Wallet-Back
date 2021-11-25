import { Test, TestingModule } from '@nestjs/testing';
import { AddressesDataController } from './addressesData.controller';
import { AddressesDataService } from './addressesData.service';

describe('AddressesDataController', () => {
  let controller: AddressesDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressesDataController],
      providers: [AddressesDataService],
    }).compile();

    controller = module.get<AddressesDataController>(AddressesDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
