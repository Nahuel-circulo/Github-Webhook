import { GithubStarPayload } from "../interfaces/github-star.interface";

export class GithubService {

  constructor() { }


  onStar(payload: GithubStarPayload): string {
    let message: string = '';

    const { starred_at, sender, action, repository } = payload;


    message = `User ${sender.login} ${action} star on ${repository.full_name}`

    return message;
  }
}