import { Entity, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { CoreEntity } from "../../common/entities/core.entity";
import { InputType, ObjectType, Field, registerEnumType } from "@nestjs/graphql";
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from "@nestjs/common";
import { IsEnum } from "class-validator";

enum UserRole {
    Owner,
    Client,
    Delivery,
}

registerEnumType(UserRole, {name:"UserRole"});

@InputType({ isAbstract : true})
@ObjectType()
@Entity()
export class User extends CoreEntity{

    @Column()
    @Field( type => String)
    email:string;
    
    @Column({select:false})
    @Field( type => String)
    password:string;

    @Column({type: 'enum', enum:UserRole})
    @Field( type => UserRole)
    @IsEnum(UserRole)
    role: UserRole;

    @Column({ default:false })
    @Field( type => Boolean)
    verified: boolean;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void> {  
        if(this.password){
            try{
                this.password = await bcrypt.hash(this.password, 10);
    
            } catch(e){
                console.log(e);
                throw new InternalServerErrorException();
            }  
        } 
    }

    async checkPassword(aPassword:string) :  Promise<boolean>{
        try{
            const ok = await bcrypt.compare(aPassword, this.password);
            return ok;
        } catch(e){
            console.log(e);
            throw new InternalServerErrorException();
        }
    }
}