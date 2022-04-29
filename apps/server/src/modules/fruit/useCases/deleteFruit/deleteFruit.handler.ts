import type { FastifyReply, FastifyRequest, HTTPMethods } from 'fastify'
import type { FromSchema } from 'json-schema-to-ts'
import { deleteFruitUseCase } from './deleteFruit.useCase'

const deleteFruitRouteParamsSchema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: { type: 'string', minLength: 1 },
  },
} as const

type DeleteFruitRouteParams = FromSchema<typeof deleteFruitRouteParamsSchema>

export const deleteFruitRoute = {
  // 'GET' here to ease tests directly from browser
  method: 'GET' as HTTPMethods,
  url: '/delete/:name',
  schema: {
    params: deleteFruitRouteParamsSchema,
  },
  async handler(
    request: FastifyRequest<{ Params: DeleteFruitRouteParams }>,
    reply: FastifyReply
  ): Promise<void> {
    // 1- Extract info from request
    const { name } = request.params

    // 2- Call use-case
    await deleteFruitUseCase({
      name,
    })

    // 3- API answer
    reply.send({
      message: `${name} well deleted!`,
    })
  },
}
