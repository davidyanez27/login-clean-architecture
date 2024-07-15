import { CustomError } from "../../errors/customs.error";

export enum entityRoles {
    admin = 'admin',
    user = 'user',
}

export interface user {
    user: UserEntity,
    jwt:string
}



export class UserEntity {

    constructor(
        public email: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public role: entityRoles,
        public emailValidated: Boolean,
        public createdAt?: Date,
        public updateddAt?: Date,

    ) { }

    static fromObject(object: { [key: string]: any }): UserEntity {
        const { email, password, firstName, lastName, role, createdAt, updateddAt} = object
        let parseRole = entityRoles.user

        if (!email) throw CustomError.badRequest('Missing email');
        if (!password) throw CustomError.badRequest('Missing password');
        if (!firstName) throw CustomError.badRequest('Missing firstName');
        if (!lastName) throw CustomError.badRequest('Missing lastName');
        if (!role) throw CustomError.badRequest('Missing role');
        if (!createdAt) throw CustomError.badRequest('Missing createdAt');
        if (!updateddAt) throw CustomError.badRequest('Missing updateddAt');

        if (role === 'ADMIN') parseRole = entityRoles.admin;
        if (role === 'USER') parseRole = entityRoles.user;



        return new UserEntity( email, password, firstName, lastName, parseRole, createdAt, updateddAt)
    }
}

