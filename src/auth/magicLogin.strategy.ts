/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { AuthService } from './auth.service';
import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import Strategy from "passport-magic-login";

@Injectable()
export class MagicLoginStrategy extends PassportStrategy(Strategy) {
    private readonly logger= new Logger(MagicLoginStrategy.name);
    constructor(private authService: AuthService) {
        super({
            secret : 'your-secret',
            jwtOptions: {
                expiresIn: '5m',
            },
            callbackUrl : 'http://localhost:3000/auth/login/callback',
            sendMagicLink: (destination, href) => {
                // Todo: Send Email
                this.logger.debug(`Sending Email  to ${destination} with link ${href}`);
            },
            verify: async (payload, callback) => 
            callback(null,this.validate(payload)),
        });
    }

    validate(payload: {destination: string}) {
        // validate email, user of application

        const user  = this.authService.validateUser(payload.destination);
        return user;

    }


}