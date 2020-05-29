import { OutputTargetInterface } from '../Summary';

export class ConsoleReports implements OutputTargetInterface {
  print(report: string): void {
    console.log(report);
  }
}
