import express from 'express';
const app = express();
import { CreateCourse } from './routes'

app.get('/', CreateCourse)

app.listen(3333, () => {
  console.log(`Server is running on port 3333`)
})