interface Course {
  name: string
  duration: number
  educator: string
}

class CreateCourseService {
  async execute({ name, duration, educator }: Course) {
    console.log(name, duration, educator)
  }
}
export default new CreateCourseService()