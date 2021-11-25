import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AddressesDataModule } from './addresses-data/addressesData.module';
require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL), UsersModule, AddressesDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
