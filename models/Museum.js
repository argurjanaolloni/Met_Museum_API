import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let Museum = new Schema({
  objectID: { type: Number },
  isHighlight: { type: Boolean },
  accessionNumber: { type: String },
  isPublicDomain: { type: Boolean },
  primaryImage: {type: String},
  department: { type: String },
  objectName:  { type: String },
  title:  { type: String },
  culture:  { type: String },
  period:  { type: String },
  objectDate:  { type: String },
  objectBeginDate: { type: Number },
  objectEndDate: { type: Number },
  medium: { type: String },
})

export default mongoose.model("museum", Museum);