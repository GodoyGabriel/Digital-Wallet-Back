import { Module } from '@nestjs/common';
import { AddressesDataService } from './addressesData.service';
import { AddressesDataController } from './addressesData.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressData, AddressDataSchema } from './schemas/addressData.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: AddressData.name, schema: AddressDataSchema}])],
  controllers: [AddressesDataController],
  providers: [AddressesDataService]
})
export class AddressesDataModule {}
