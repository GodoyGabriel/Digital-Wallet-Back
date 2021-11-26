import { Module } from '@nestjs/common';
import { ExchangeHistoryService } from './exchangeHistory.service';
import { ExchangeHistoryController } from './exchangeHistory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExchangeHistory, ExchangeHistorySchema } from './schemas/exchangeHistory.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: ExchangeHistory.name, schema: ExchangeHistorySchema}])],
  controllers: [ExchangeHistoryController],
  providers: [ExchangeHistoryService]
})
export class ExchangeHistoryModule {}
