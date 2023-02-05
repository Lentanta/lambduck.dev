export class Timer {
  public value: number;
  public freezeValue: boolean;

  constructor(value?: number) {
    this.value = value ? value : 0;
    this.freezeValue = false;
  };

  setFreezeValue = (isFreeze: boolean) => {
    this.freezeValue = isFreeze;
  };

  resetTime = () => {
    this.value = 0;
  };

  increaseTimeBy = (amount: number) => {
    if (this.value >= Number.MAX_SAFE_INTEGER) {
      this.resetTime();
    };

    if (!this.freezeValue) {
      this.value += amount;
    };
  };
}