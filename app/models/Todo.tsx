export interface TodoObject {
  id: string;
  value: string;
  done: boolean;
  onDelete: () => void;
}