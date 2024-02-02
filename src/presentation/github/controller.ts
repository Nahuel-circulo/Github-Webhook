import { Request, Response } from "express";
import { GithubService } from "../../services/github.service";


export class GithubController {


  constructor(
    private readonly githubService = new GithubService
  ) { }


  webhookHandler = (req: Request, res: Response) => {

    const githubEvent = req.header('x-github-event') ?? 'unknown'

    // const signature = req.header('x-hub-signature-256') ?? 'unknown'
    console.log({ githubEvent })
    // console.log(signature)
    const payload = req.body;
    let message = ''
    switch (githubEvent) {
      case 'star':
        message = this.githubService.onStar(payload)
        break;
      default:
        message = `Unknown Event ${githubEvent}`
        break;
    }

    console.log(message)
    res.status(201).send('Accepted')
  }

}