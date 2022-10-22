import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    @HttpCode(201)
    createUser(@Body() user: User) {
       return this.userService.create(user)
    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        const user = this.userService.getSingleUser(id)
        if(!user) {
            return new NotFoundException("Couldn't found user")
        }
        return this.userService.getSingleUser(id)
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() user: User) {
        return this.userService.updateSingleUser(id, user)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteSingleUser(id)
    }
}