import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type AddressDataDocument = AddressData & Document;


@Schema({ collection: 'addressesData' })
export class AddressData {
  @Prop()
  address: string;

  @Prop()
  fav: boolean;
}

export const AddressDataSchema = SchemaFactory.createForClass(AddressData);