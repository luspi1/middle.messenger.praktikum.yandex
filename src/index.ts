import { LoginPage } from './pages/Login'


window.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector('#app')!;

	const loginPage = new LoginPage({title: 'Вход'});

	root.append(loginPage.getContent()!);

});
