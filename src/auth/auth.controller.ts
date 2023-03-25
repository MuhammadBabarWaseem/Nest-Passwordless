import { PasswordLogicDto } from './passwordless-login.dto';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Res, Req, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './magicLogin.strategy';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private strategy: MagicLoginStrategy) {}

  @Post('login')
  login(@Req() req, @Res() res, @Body(new ValidationPipe()) body: PasswordLogicDto){
    this.authService.validateUser(body.destination);
    return this.strategy.send(req, res);
  }

  @Get('login/callback')
  callback(){
    
  }

}
