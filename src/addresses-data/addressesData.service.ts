import { Injectable } from '@nestjs/common';
import { CreateAddressesDataDto } from './dto/create-addressesData.dto';
import { UpdateAddressesDataDto } from './dto/update-addressesData.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddressData, AddressDataDocument } from './schemas/addressData.schema';

@Injectable()
export class AddressesDataService {
  constructor(
    @InjectModel(AddressData.name)
    private AddressDataModel: Model<AddressDataDocument>,
  ) {}

  create(createAddressesDataDto: CreateAddressesDataDto) {
    const newAddressData = new this.AddressDataModel(createAddressesDataDto);
    return newAddressData.save();
  }

  async getAll(): Promise<AddressData[]> {
    return await this.AddressDataModel.find({});
  }

  async getAddress(id: string) {
    const addressData = await this.AddressDataModel.findById(id);
    return addressData;
  }

  async favUpdate(id: string, updateAddressesDatumDto: UpdateAddressesDataDto) {
    return this.AddressDataModel.findByIdAndUpdate(id, updateAddressesDatumDto, { new: true });
  }
  
  async remove(id: string) {
    const result = await this.AddressDataModel.findByIdAndDelete(id);
    return result;
  }
}
