import express, { Request, Response } from 'express';
import { envs } from './config';
import { GithubController } from './presentation/github/controller';

(() => {
  main()
})()


function main() {

  const app = express();

  const controller = new GithubController()

  
  app.post('/api/github', controller.webhookHandler)


  app.listen(envs.PORT, () => {
    console.log(`App running on http://localhost:${envs.PORT}`)
  })

}