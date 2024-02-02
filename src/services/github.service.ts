import { GithubIssuePayload } from "../interfaces/github-issue.interface";
import { GithubStarPayload } from "../interfaces/github-star.interface";

export class GithubService {

  constructor() { }


  onStar(payload: GithubStarPayload): string {
    let message: string = '';

    const { starred_at, sender, action, repository } = payload;


    message = `User ${sender.login} ${action} star on ${repository.full_name}`

    return message;
  }
  onIssue(payload: GithubIssuePayload) {

    const { issue, action } = payload;

    if (action === 'opened') {
      return `An issue was opened with this title: ${issue.title}`
    }
    if (action === 'closed') {
      return `An issue was closed by: ${issue.user.login}`
    }
    if (action === 'reopened') {
      return `An issue was reopened by: ${issue.user.login}`
    }
    return `Unhandled action for the issue event ${action}`
  }
}