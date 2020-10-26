import { Injectable } from '@angular/core';
import { ISessions } from '../shared/index';

@Injectable()
export class VoterService {
  deleteVoter(session: ISessions, voterName: string) {
    session.voters = session.voters.filter((voter) => voter !== voterName);
  }

  addVoter(session: ISessions, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session: ISessions, voterName: string) {
    return session.voters.some((voter) => voter === voterName);
  }
}
