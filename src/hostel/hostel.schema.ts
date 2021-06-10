import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Hostel extends Document {
  @Prop()
  name: string;

  @Prop()
  slug: string;
}

export const HostelSchema = SchemaFactory.createForClass(Hostel);
