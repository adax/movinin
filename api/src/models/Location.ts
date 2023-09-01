import { Schema, model } from 'mongoose'
import * as Env from '../config/env.config'

const locationSchema = new Schema<Env.Location>(
  {
    values: {
      type: [Schema.Types.ObjectId],
      ref: 'LocationValue',
      validate: (value: string): boolean => Array.isArray(value) && value.length > 1,
    },
  },
  {
    timestamps: true,
    strict: true,
    collection: 'Location',
  },
)

const Location = model<Env.Location>('Location', locationSchema)

Location.on('index', (err) => {
  if (err) {
    console.error('Location index error: %s', err)
  } else {
    console.info('Location indexing complete')
  }
})

export default Location