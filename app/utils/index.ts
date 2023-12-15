export function canCompleteCircuit(grifo: number[], costo: number[]): number {
  let totalGas = 0;
  let totalCost = 0;
  let start = 0;
  let tank = 0;

  for (let i = 0; i < grifo.length; i++) {
    totalGas += grifo[i];
    totalCost += costo[i];
    tank += grifo[i] - costo[i];
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return totalGas < totalCost ? -1 : start;
}
