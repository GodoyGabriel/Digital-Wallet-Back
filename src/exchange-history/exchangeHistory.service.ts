import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ExchangeHistory, ExchangeHistoryDocument } from './schemas/exchangeHistory.schema';
import { Model } from 'mongoose';
import { CreateExchangeHistoryDto } from './dto/create-exchangeHistory.dto';

@Injectable()
export class ExchangeHistoryService {
  constructor(@InjectModel(ExchangeHistory.name) private exchangeHistoryModel: Model<ExchangeHistoryDocument>) {}

  async create(createExchangeHistoryDto: CreateExchangeHistoryDto) {
    const newExchange = new this.exchangeHistoryModel(createExchangeHistoryDto);
    return await newExchange.save();
  }

  async getAll(): Promise<ExchangeHistory[]> {
    return await this.exchangeHistoryModel.find({});
  }
}
