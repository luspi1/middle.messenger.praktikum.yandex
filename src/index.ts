import { LoginPage } from './pages/Login'

window.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector('#app')!;

	const loginPage = new LoginPage({ title: 'Home page' });

	root.append(loginPage.getContent()!);

	loginPage.dispatchComponentDidMount();
});
