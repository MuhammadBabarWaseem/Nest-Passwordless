/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    private readonly users: User[] = [

        {
            id: 1,
            name : 'mambo',
            email : 'mambo@email.com',
        },
        {
            id: 2,
            name : 'bambo',
            email : 'bambo@email.com',
        },
    ];

    findOneByEmail(email: string) : User | undefined {
        return this.users.find((user) => user.email === email)
    }

}
