import Block from '../../utils/Block';
import template from './login.hbs';
import { Button } from '../../components/Button';

interface LoginPageProps {
	title: string;
}

export class LoginPage extends Block<LoginPageProps> {
	constructor(props: LoginPageProps) {
		super('div', props);
	}

	init() {
		this.children.button = new Button({
			label: 'Войти',
			type: 'submit',
			events: {
				click: () => console.log('авторизация прошла успешно'),
			},
		});
	}

	render() {
		return this.compile(template, {title: this.props.title, button: this.children.button});
	}
}
