import { Start } from './steps';

interface IStepDir {
  [index: string]: () => JSX.Element;
}

const directory: IStepDir = {
  start: Start,
};

const steps = Object.keys(directory);

export { steps, directory };
