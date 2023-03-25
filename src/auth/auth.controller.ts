/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { PasswordLogicDto } from './passwordless-login.dto';
import { Controller, Get, Post, Res, Req, Body, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './magicLogin.strategy';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private strategy: MagicLoginStrategy) {}

  @Post('login')
  login(@Req() req, @Res() res, @Body(new ValidationPipe()) body: PasswordLogicDto){
    this.authService.validateUser(body.destination);
    return this.strategy.send(req, res);
  }

  @UseGuards(AuthGuard('magiclogin'))
  @Get('login/callback')
  callback(@Req() req){
    return this.authService.generateUser(req.user);
    
  }

}


