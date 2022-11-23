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
			label: 'Click me',
			events: {
				click: () => console.log('clicked'),
			},
		});
	}

	render() {
		return this.compile(template, this.props);
	}
}
