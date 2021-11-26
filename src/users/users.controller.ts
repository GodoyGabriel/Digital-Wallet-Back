import {
  Controller,
  Get,
  Post,
  Body,
  NotFoundException,
  Res,
  HttpStatus,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  async create(@Res() res, @Body() createUserDto: CreateUserDto) {
    const newUser = await this.usersService.create(createUserDto);
    return res.status(HttpStatus.OK).json({
      message: 'User Successfully created',
      newUser,
    });
  }

  @Get('/getAll')
  async getAllUsers(@Res() res) {
    const allUsers = await this.usersService.getAllUsers();
    return res.status(HttpStatus.OK).json({ allUsers });
  }

  @Get('/getUser')
  async getUser(@Res() res, @Query('id') id: string) {
    const userFound = await this.usersService.getUser(id);
    if (!userFound) throw new NotFoundException('User not found');
    return res.status(HttpStatus.OK).json({ userFound });
  }

  @Delete('/delete')
  async remove(@Res() res, @Query('id') id: string) {
    const userFound = await this.usersService.remove(id);
    if (!userFound) throw new NotFoundException('User not found');
    return res.status(HttpStatus.OK).json({ userFound });
  }
}
