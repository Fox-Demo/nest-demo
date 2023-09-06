import { Controller, Get, Patch, UseGuards, Body } from '@nestjs/common';
import { GetUser } from '../auth/decorator/';
import { JwtGuard } from '../auth/guard';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { EditUserDto } from './dto/edit-user.dto';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //todo 為什麼這邊是要去找 req.user 這個欄位
  //note 使用 "jwt" key 的 strategy 當作 guard
  //note req.user 使用 validate() 回傳回來的資訊

  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
