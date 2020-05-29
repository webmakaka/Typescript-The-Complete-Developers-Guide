import { CsvFileReaderAbstract } from './CsvFileReaderAbstract';
import { dateStringToDate } from './utils';
import { MatchResultEnum } from './MatchResultEnum';

type MatchDataType = [
  Date,
  string,
  string,
  number,
  number,
  MatchResultEnum,
  string
];

export class MatchReader extends CsvFileReaderAbstract<MatchDataType> {
  mapRow(row: string[]): MatchDataType {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResultEnum,
      row[6],
    ];
  }
}
