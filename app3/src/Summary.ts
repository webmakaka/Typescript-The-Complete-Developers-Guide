import { MatchDataType } from './MatchDataType';

export interface AnalyzerInterface {
  run(matches: MatchDataType[]): string;
}

export interface OutputTargetInterface {
  print(report: string): void;
}

export class Summary {
  constructor(
    public analyzer: AnalyzerInterface,
    public outputTarget: OutputTargetInterface
  ) {}

  buildAndPrintReport(matches: MatchDataType[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
