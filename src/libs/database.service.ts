import mongoose from 'mongoose'
import { config } from './config.service'
import { logger } from './logger.service'

export const connectDatabase = async (): Promise<void> => {
  try {
    logger.info('Connecting database...')
    await mongoose.connect(config.MONGO_DATABASE_URL)
    logger.info('Database connected')
  } catch (err) {
    logger.error((err as Error).message)
    process.exit(1)
  }
}
