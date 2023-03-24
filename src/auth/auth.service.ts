import { UsersService } from './../users/users.service';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService){}

    validateUser(email: string) {
        const user = this.userService.findOneByEmail(email);
        if(!user){
            throw new UnauthorizedException();
        }
        

        return user;
    }
}
