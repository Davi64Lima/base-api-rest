import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UsePipes, ValidationPipe } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { ApiBearerAuth, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUserDto, CreateUserResponseDto } from "./user.dto";

@ApiTags("users")
@Controller("users")
@ApiBearerAuth("authorization")
@UsePipes(new ValidationPipe(
    {
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }
))
export class UserController {
    constructor(private readonly userService: UserService) { }

    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: [CreateUserResponseDto], description: "Return all of the users" })
    @ApiOperation({ description: "Return all of the users" })
    @ApiConsumes("application/json")
    @Get('/')
    async findAll(): Promise<UserEntity[]> {
        return await this.userService.fetchAllUsers();
    }

    @HttpCode(HttpStatus.CREATED)
    @ApiCreatedResponse({ type: CreateUserResponseDto, description: "User created sucessfully" })
    @ApiOperation({ description: "Create a new user" })
    @ApiConsumes("application/json")
    @Post('/')
    async create(@Body() body: CreateUserDto): Promise<CreateUserResponseDto> {
        return await this.userService.create(body);
    }
}