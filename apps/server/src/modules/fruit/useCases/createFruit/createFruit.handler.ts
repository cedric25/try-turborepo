import type { HTTPMethods, FastifyReply, FastifyRequest } from 'fastify'
import type { FromSchema } from 'json-schema-to-ts'
import { createFruitUseCase } from './createFruitUseCase'

const createFruitRouteParamsSchema = {
  type: 'object',
  required: ['name', 'color'],
  properties: {
    name: { type: 'string', minLength: 1 },
    color: { type: 'string', minLength: 1 },
  },
} as const

type CreateFruitRouteParams = FromSchema<typeof createFruitRouteParamsSchema>

export const createFruitRoute = {
  // 'GET' here to ease tests directly from browser
  method: 'GET' as HTTPMethods,
  url: '/create/:name/:color',
  schema: {
    params: createFruitRouteParamsSchema,
  },
  async handler(
    request: FastifyRequest<{ Params: CreateFruitRouteParams }>,
    reply: FastifyReply
  ): Promise<void> {
    // 1- Extract info from request
    const { name, color } = request.params

    // 2- Call use-case
    const createdDbFruit = await createFruitUseCase({
      name,
      color,
    })

    // 3- API answer
    reply.status(201).send({
      message: `${createdDbFruit.name} well created!`,
    })
  },
}
