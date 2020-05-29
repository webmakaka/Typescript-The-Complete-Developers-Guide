import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResultEnum } from './MatchResultEnum';

console.clear();

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResultEnum.HomeWin) {
    manUnitedWins++;
  } else if (
    match[2] === 'Man United' &&
    match[5] === MatchResultEnum.AwayWin
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
