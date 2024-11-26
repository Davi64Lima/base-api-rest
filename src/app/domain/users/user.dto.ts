import { ApiResponseProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
    @ApiResponseProperty({
        example: 'user'
    })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiResponseProperty({
        example: 'user@email.com'
    })
    @IsEmail()
    email: string;

}

export class CreateUserResponseDto {
    @ApiResponseProperty({
        example: 'da9b9f51-7b5d-4f3b-8f3d-3f5e4d7b7f3d',
        format: 'v4'
    })
    public id: string;

    @ApiResponseProperty({
        example: 'user'
    })
    public username: string;

    @ApiResponseProperty({
        example: 'user@email.com'
    })
    public email: string;
}