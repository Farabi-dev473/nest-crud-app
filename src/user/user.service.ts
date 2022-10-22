import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./user.model";

@Injectable()
export class UserService {
    users: User[] = []
    userId = 0

    create(user: User) {
        const newUser = new User()
        newUser 
             .setId(this.userId + '')
             .setName(user.name)
             .setAge(user.age)
             .setAdult(user.adult)

        ++this.userId
        this.users.push(newUser)
        return newUser.id 
    }

    getSingleUser(id: string) {
        return this.users.find((user) => user.id === id) 
    }

    updateSingleUser(id: string, user: User) {
        let currentUserDetails = this.users.find((user) => user.id === id)
        if(!user) {
           return new NotFoundException("Couldn't found user")
        }

        currentUserDetails.setName(user.name)
        currentUserDetails.setAge(user.age)
        currentUserDetails.setAdult(user.adult)

        return {statusCode: 200, message: 'User was updated successfully'}
    }

    deleteSingleUser(id: string) {
        let index = this.users.findIndex((user) => user.id === id)
        if(!index && index !== 0) {
            return new NotFoundException('User not found')
        }
        this.users.splice(index, 1)
        return {statusCode: 200, message: 'User was deleted successfully'}
    }
}