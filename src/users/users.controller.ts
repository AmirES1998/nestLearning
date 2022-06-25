import {Controller, Get, All, Put, Req, Res, Delete, Post, Body, Query, Param,} from '@nestjs/common';
import {CreateUserDto, ListAllEntities} from "./dto";

@Controller('users')
export class UsersController {

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return 'this action ads new user' ;
    }

    @Get()
    findAll(@Query() query: ListAllEntities) {
        return `this action return all cats (limit: ${query.limit} )items` ;
    }

    @Get(':id')
    fineOne(@Param('id') id: string) {
        return `this action return a #${id} cat` ;
    }


}
