import { Schema,model,models} from "mongoose";

interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: Record<string, any>;
    transformationURL?: URL;
    aspectRatio?: string;
    color?: string;
    promt?: string;
    author: {
        _id:string;
        firstName:string;
        lastName:string;
    }
    createdAt: Date;
    updatedAt: Date;
}

const ImageSchema = new Schema({
    title : {type : String ,required:true},
    transformationType : {type : String ,required:true},
    publicId : {type : String ,required:true},
    secureUrl : {type : String ,required:true},
    width: {type: Number},
    height: {type : Number},
    config : {type : Object},
    transformationURL : {type : URL},
    aspectRatio: {type : String},
    color : {type : String},
    promt : {type :  String},
    author : {type : Schema.Types.ObjectId, ref : 'User'},
    createdAt : {type: Date, default : Date.now},
    updatedAt : {type: Date, default : Date.now}
});

const Image = models?.Image || model('Image',ImageSchema);

export default Image;