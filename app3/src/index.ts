import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReports } from './reportTargets/ConsoleReports';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

console.clear();

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReports()
);

summary.buildAndPrintReport(matchReader.matches);
