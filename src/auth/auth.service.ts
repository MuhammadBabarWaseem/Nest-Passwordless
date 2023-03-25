/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }

    generateUser(user: User) {
        const payload = { sub: user.id, email: user.email };

        return {
            access_token: this.jwtService.sign(payload),
        }

    }

    validateUser(email: string) {
        const user = this.userService.findOneByEmail(email);
        if (!user) {
            throw new UnauthorizedException();
        }


        return user;
    }
}
