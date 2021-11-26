import { Controller, Get, Res, Body, Post, HttpStatus } from '@nestjs/common';
import { ExchangeHistoryService } from './exchangeHistory.service';
import { CreateExchangeHistoryDto } from './dto/create-exchangeHistory.dto';

@Controller('exchangeHistory')
export class ExchangeHistoryController {
  constructor(private readonly exchangeHistoryService: ExchangeHistoryService) {}

  @Post('/create')
  async create(@Res() res, @Body() createExchangeHistoryDto: CreateExchangeHistoryDto) {
    const exchangeSave = await this.exchangeHistoryService.create(createExchangeHistoryDto);
    return res.status(HttpStatus.OK).json({
      message: 'Exchange Successfully saved',
      exchangeSave,
    });
  }

  @Get('/getAll')
  async getAll(@Res() res) {
    const all = await this.exchangeHistoryService.getAll();
    return res.status(HttpStatus.OK).json({ all });
  }
}
