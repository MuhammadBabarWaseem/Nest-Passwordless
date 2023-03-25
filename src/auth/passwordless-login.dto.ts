/* eslint-disable prettier/prettier */
import { IsEmail } from "class-validator";
export class PasswordLogicDto {
    @IsEmail()
    destination: string;
}