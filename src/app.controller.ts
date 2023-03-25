import { AuthGuard } from '@nestjs/passport';
/* eslint-disable prettier/prettier */
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('protected')
  getProtected(@Req() req) {
    return `Welcome ${req.user.name} To The App`
  }

}
