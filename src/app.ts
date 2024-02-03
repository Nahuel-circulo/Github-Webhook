import express  from 'express';
import { envs } from './config';
import { GithubController } from './presentation/github/controller';
import { GithubMiddleware } from './presentation/middlewares/github-sha256.middleware';

(() => {
  main()
})()


function main() {

  const app = express();

  app.use(express.json());


  const controller = new GithubController()

  app.use(GithubMiddleware.verifySignature)

  app.post('/api/github', controller.webhookHandler)


  app.listen(envs.PORT, () => {
    console.log(`App running on http://localhost:${envs.PORT}`)
  })

}