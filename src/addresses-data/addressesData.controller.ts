import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Query,
  NotFoundException,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AddressesDataService } from './addressesData.service';
import { CreateAddressesDataDto } from './dto/create-addressesData.dto';
import { UpdateAddressesDataDto } from './dto/update-addressesData.dto';

@Controller('addressesData')
export class AddressesDataController {
  constructor(private readonly addressesDataService: AddressesDataService) {}

  @Post('/newAddress')
  async create(
    @Res() res,
    @Body() createAddressesDatumDto: CreateAddressesDataDto,
  ) {
    const newAddressData = await this.addressesDataService.create(
      createAddressesDatumDto,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Address Successfully created',
      newAddressData,
    });
  }

  @Get('/getAll')
  async getAll(@Res() res) {
    const allAddressesData = await this.addressesDataService.getAll();
    return res.status(HttpStatus.OK).json({ data: allAddressesData });
  }

  @Get('/getAddress')
  async getAddress(@Res() res, @Query('id') id: string) {
    const addressData = await this.addressesDataService.getAddress(id);
    if (!addressData) throw new NotFoundException('Address not found');
    return res.status(HttpStatus.OK).json({ addressData });
  }

  @Put('/favUpdate')
  async favUpdate(
    @Res() res,
    @Query('id') id: string,
    @Body() updateAddressesDatumDto: UpdateAddressesDataDto,
  ) {
    const addressData = await this.addressesDataService.favUpdate(
      id,
      updateAddressesDatumDto,
    );
    if (!addressData) throw new NotFoundException('Address not found');
    return res.status(HttpStatus.OK).json({ addressData });
  }

  @Delete('/delete')
  async remove(@Res() res, @Query('id') id: string) {
    const addressData = await this.addressesDataService.remove(id);
    if (!addressData) throw new NotFoundException('Address not found');
    return res.status(HttpStatus.OK).json({
      message: 'Address deleted',
      addressData,
    });
  }
}
