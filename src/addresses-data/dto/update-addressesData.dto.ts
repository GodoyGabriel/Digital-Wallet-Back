import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressesDataDto } from './create-addressesData.dto';

export class UpdateAddressesDataDto extends PartialType(CreateAddressesDataDto) {
  readonly fav: boolean;
}
