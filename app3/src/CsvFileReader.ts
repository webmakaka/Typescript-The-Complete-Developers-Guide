import fs from 'fs';
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
export class CsvFileReader {
  data: MatchDataType[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(
        (row: string[]): MatchDataType => {
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
      );
  }
}
