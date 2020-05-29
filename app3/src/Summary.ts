import { MatchDataType } from './MatchDataType';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface AnalyzerInterface {
  run(matches: MatchDataType[]): string;
}

export interface OutputTargetInterface {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
  constructor(
    public analyzer: AnalyzerInterface,
    public outputTarget: OutputTargetInterface
  ) {}

  buildAndPrintReport(matches: MatchDataType[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
