import { Start, New, Address, Restore } from './steps';

interface IStepDir {
  [index: string]: () => JSX.Element;
}

const directory: IStepDir = {
  start: Start,
  new: New,
  address: Address,
  restore: Restore,
};

const steps = Object.keys(directory);

export { steps, directory };
