import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type HomeDocument = Home & Document

@Schema()
export class Home {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  videoUrl: string;
}

 export const HomeSchema = SchemaFactory.createForClass(Home)
