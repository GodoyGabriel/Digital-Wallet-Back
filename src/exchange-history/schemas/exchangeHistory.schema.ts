import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type ExchangeHistoryDocument = ExchangeHistory & Document;


@Schema()
export class ExchangeHistory {
  @Prop()
  currency: string;

  @Prop()
  amount: number;
}

export const ExchangeHistorySchema = SchemaFactory.createForClass(ExchangeHistory);