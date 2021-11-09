import { Sizes } from './enums';

export type ButtonProps = {
  label: string;
  size: Sizes;
  type: 'button' | 'submit' | 'reset';
  href?: string;
  buttonStyle?: 'primary' | 'secondary' | 'danger' | 'link';
  isDisabled?: boolean;
  loading?: boolean;
};
