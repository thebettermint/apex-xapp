export interface ICommand {
  command: string;
  uuid?: string;
  refreshEvents?: boolean;
  url?: string;
}
