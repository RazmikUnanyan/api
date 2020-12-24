import { Document } from 'mongoose';
export declare type HomeDocument = Home & Document;
export declare class Home {
    title: string;
    description: string;
    videoUrl: string;
}
export declare const HomeSchema: import("mongoose").Schema<any>;
