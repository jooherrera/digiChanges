import express from 'express'
import cors from 'cors'
import { peopleRouter } from './router/people.router'
import { notFoundHandler } from './middleware/not-found-handler'
import { planetRouter } from './router/planet.router'
import { filmRouter } from './router/film.router'
import { starshipRouter } from './router/starship.router'

export const serverExpress = express()

serverExpress.use(cors())
serverExpress.use(express.json())

serverExpress.get('/', (req, res) => res.json('Home API'))

serverExpress.use('/api/v1/people', peopleRouter)
serverExpress.use('/api/v1/planets', planetRouter)
serverExpress.use('/api/v1/films', filmRouter)
serverExpress.use('/api/v1/starships', starshipRouter)

serverExpress.use(notFoundHandler)
