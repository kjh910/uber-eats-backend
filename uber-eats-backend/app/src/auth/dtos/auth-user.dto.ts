import { CoreOutput } from '../../common/dtos/output.dto';
import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class AuthUserOutput extends CoreOutput {
    @Field()
    user: User
}
