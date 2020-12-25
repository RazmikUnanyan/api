import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type HomeDocument = News & Document

@Schema()
export class News {
  @Prop()
 imgUrl: string;
  @Prop()
  videoUrl: string;
  @Prop()
  twitter: string;
  @Prop()
  facebook: string;
  @Prop()
  instagram: string;
  @Prop()
  linkedin: string;
  @Prop()
  titleHeader: string;
  @Prop()
  detailsHeading: string;
  @Prop()
  titleAuthor: string;
  @Prop()
  description: string;
}

 export const NewsSchema = SchemaFactory.createForClass(News)
