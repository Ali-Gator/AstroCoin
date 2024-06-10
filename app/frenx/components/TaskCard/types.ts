export interface ITaskCard {
  title: string;
  description: string;
  additionalClass?: string;
  onClick?: () => void;
}
