import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/User/user.roue';
import { ProjectRoutes } from './app/modules/Projects/project.router';
import { SkillRoutes } from './app/modules/Skills/skill.router';
import { BlogRoutes } from './app/modules/Blogs/blog.router';


const app: Application= express();
app.use(cors({
   origin: "http://localhost:3000", 
  credentials: true
}));

//parser
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req: Request, res: Response) => {
     res.send({
        Message: "My portfolio website"
     })
})

app.use('/api/users', UserRoutes )
app.use('/api/projects', ProjectRoutes )
app.use('/api/skills', SkillRoutes )
app.use('/api/blogs', BlogRoutes )

export default app;