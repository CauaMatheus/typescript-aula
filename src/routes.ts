import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function CreateCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'NodeJs',
    educator: 'Daniele',
    duration: 10
  });
  CreateCourseService.execute({
    name: 'ReactJs',
    educator: 'Diego Fernandes'
  })

  return response.send()
}