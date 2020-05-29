import { AnalyzerInterface } from '../Summary';
import { MatchDataType } from '../MatchDataType';
import { MatchResultEnum } from '../MatchResultEnum';

export class WinsAnalysis implements AnalyzerInterface {
  constructor(public team: string) {}

  run(matches: MatchDataType[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResultEnum.HomeWin) {
        wins++;
      } else if (
        match[2] === 'Man United' &&
        match[5] === MatchResultEnum.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
