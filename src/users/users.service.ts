import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const newAddressData = new this.userModel(createUserDto);
    return await newAddressData.save();
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find({});
  }

  async getUser(id: string) {
    try {
      const userFound = await this.userModel.findById(id);
      return userFound;
    } catch (error) {
      return null;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const result = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
        new: true,
      });
      return result;
    } catch (error) {
      return null;
    }
  }

  async remove(id: string) {
    try {
      const result = await this.userModel.findByIdAndDelete(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
