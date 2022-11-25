import Block from '../../utils/Block';
import template from './main-title.hbs';
import styles from './styles.module.scss';

interface MainTitleProps {
  label: string;
}

export class MainTitle extends Block<MainTitleProps> {
  render() {
    return this.compile(template, {...this.props, styles});
  }
}
