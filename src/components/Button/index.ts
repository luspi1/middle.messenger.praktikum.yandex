import Block from '../../utils/Block';
import template from './button.hbs';
import * as style from './button.scss'

interface ButtonProps {
  label: string;
  events: {
    click: () => void;
  };
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('button', props);

    this.element?.classList.add(style.button)

  }

  render() {
    return this.compile(template, this.props);
  }
}
