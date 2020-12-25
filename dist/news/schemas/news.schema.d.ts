import { Document } from 'mongoose';
export declare type HomeDocument = News & Document;
export declare class News {
    imgUrl: string;
    videoUrl: string;
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
    titleHeader: string;
    detailsHeading: string;
    titleAuthor: string;
    description: string;
}
export declare const NewsSchema: import("mongoose").Schema<any>;
