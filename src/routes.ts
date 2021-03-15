import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function CreateCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'Cauã',
    duration: 2,
    educator: 'Daniele'
  });

  return response.send()
}