import { type Request, type Response } from 'express'
import { type IWebhookUpdate } from './payment.types'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import { logger } from '../../lib'
import { paymentService } from './payment.service'

const paymentController = {
  getUpdates: async (
    req: Request<unknown, unknown, IWebhookUpdate>,
    res: Response
  ): Promise<void> => {
    try {
      await paymentService.updateProcessing(req.body)

      res.status(StatusCodes.OK).json({ status: StatusCodes.OK })
    } catch (error) {
      logger.error(error)

      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: ReasonPhrases.INTERNAL_SERVER_ERROR
      })
    }
  }
}

export { paymentController }
