import { OutputTargetInterface } from '../Summary';

export class ConsoleReport implements OutputTargetInterface {
  print(report: string): void {
    console.log(report);
  }
}
