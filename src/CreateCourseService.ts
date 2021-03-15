interface Course {
  name: string
  educator: string
  duration?: number
}

class CreateCourseService {
  async execute({ name, educator, duration = 8 }: Course) {
    console.log(name, educator, duration)
  }
}
export default new CreateCourseService()