import { regularExps } from "../../../config";
import { entityRoles } from "../../entities";

export class RegisterUserDto {
    constructor(
        public readonly email      : string,
        public readonly password   : string,
        public readonly firstName  : string,
        public readonly lastName   : string,
        public readonly role       : entityRoles,

    ){}


    static create( props: {[key:string]:any}): [string?, RegisterUserDto?]{
        const {email, password, firstName, lastName, role } = props;
        const validRoles = Object.values(entityRoles);

        if( !regularExps.email.test(email) ) return ['email property is required'];
        if( !password ) return ['password property is required'];
        if( !regularExps.password.test(password)) return ['password contains at least eight characters, one special characters, uppercase and one number'];
        if( !firstName ) return ['firstName property is required'];
        if( !lastName ) return ['lastName property is required'];
        if( !role ) return ['role property is required'];
        if( !validRoles.includes(role) ) return [`Invalid role: ${role}. Valid roles are: ${validRoles.join(', ')}`];
        
        return [undefined, new RegisterUserDto(email, password, firstName, lastName, role)];
    }

}

