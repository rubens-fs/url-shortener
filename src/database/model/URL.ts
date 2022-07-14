import { prop, getModelForClass } from '@typegoose/typegoose'

export class URL {
    @prop({ required: true })
    hash!: string

    @prop({ required: true })
    originURL!: string

    @prop({ required: true })
    shortURL!: string

    // The non-null assertion operator (!) removes null and undefined from a type without doing any explicit type checking.
}

export const URLModel = getModelForClass(URL)
