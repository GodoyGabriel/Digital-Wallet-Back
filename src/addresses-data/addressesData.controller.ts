import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Query
} from '@nestjs/common';
import { AddressesDataService } from './addressesData.service';
import { CreateAddressesDataDto } from './dto/create-addressesData.dto';
import { UpdateAddressesDataDto } from './dto/update-addressesData.dto';

@Controller('addressesData')
export class AddressesDataController {
  constructor(private readonly addressesDataService: AddressesDataService) {}

  @Post('/newAddress')
  create(@Body() createAddressesDatumDto: CreateAddressesDataDto) {
    return this.addressesDataService.create(createAddressesDatumDto);
  }

  @Get('/getAll')
  getAll() {
    return this.addressesDataService.getAll();
  }

  @Get('/getAddress')
  getAddress(@Query('id') id: string) {
    return this.addressesDataService.getAddress(id);
  }

  @Put('/favUpdate')
  favUpdate(
    @Query('id') id: string,
    @Body() updateAddressesDatumDto: UpdateAddressesDataDto,
  ) {
    return this.addressesDataService.favUpdate(id, updateAddressesDatumDto);
  }

  @Delete('/delete')
  remove(@Query('id') id: string) {
    return this.addressesDataService.remove(id);
  }
}
