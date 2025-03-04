import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/roles/role.enum';

export type StudentDocument = Student & Document;

@Schema({ timestamps: true })
export class Student {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: String, enum: Role, default: Role.USER })
  role: Role;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
