import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { RoleEnum } from 'src/roles/roles.enum';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true, index: true })
  username: string;

  @Prop({ required: false })
  firstName?: string;

  @Prop({ required: false })
  lastName?: string;

  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop({ required: true })
  password: string;
  // refresh-token
  @Prop({ required: false })
  refreshToken?: string;
  // relationship
  @Prop({ type: String, enum: RoleEnum, default: RoleEnum.ADMIN })
  role: RoleEnum;
  // relationship
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Book' }], default: [] })
  books: Types.Array<Types.ObjectId>;
}

export const UserSchema = SchemaFactory.createForClass(User);
