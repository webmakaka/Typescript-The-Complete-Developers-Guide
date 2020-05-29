import { dateStringToDate } from './utils';
import { MatchResultEnum } from './MatchResultEnum';
import { MatchDataType } from './MatchDataType';
import { CsvFileReader } from './CsvFileReader';

interface DataReaderInterface {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchDataType[] = [];

  constructor(public reader: DataReaderInterface) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
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
