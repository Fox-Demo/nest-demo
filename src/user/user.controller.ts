import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorator/';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  //todo 為什麼這邊是要去找 req.user 這個欄位
  //note 使用 "jwt" key 的 strategy 當作 guard
  //note req.user 使用 validate() 回傳回來的資訊
  @Get('me')
  getMe(@GetUser('email') userEmail: string) {
    return userEmail;
  }
}
