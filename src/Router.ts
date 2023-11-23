import * as tools from './tools';
import { PageHome } from './pages/PageHome';
import { PagePreise } from './pages/PagePreise';
import { PageBestellen } from './pages/PageBestellen';
import { Page404 } from './pages/Page404';
import { PageKontakt } from './pages/PageKontakt';

const pageNames = ['Home', 'Preise', 'Bestellen', 'Kontakt'];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
	switch (currentPageIdCode) {
		case 'home':
			return PageHome();
		case 'preise':
			return PagePreise();
		case 'bestellen':
			return PageBestellen();
		case 'kontakt':
			return PageKontakt();
		default:
			return Page404();
	}
}

const getPageIdCode = (pageName: string) => {
	pageName = tools.cleanCharactersToAscii(pageName);
	return pageName.toLowerCase();
}

export const getMenu = () => {
	const getMenuClass = (pageName: string) => {
		const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
		if (pageIdCode === currentPageIdCode) {
			return ` class="active"`
		} else {
			return '';
		}
	}

	return /*html*/`
	<nav class="menu">
		<ul>
			${pageNames.map(pageName => `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
		</ul>
	</nav>
`;
}


function getSmartCurrentPageId() {
	let currentPageIdCode = tools.getCurrentPageIdCode();
	currentPageIdCode = currentPageIdCode === '' ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase()) : currentPageIdCode;
	return currentPageIdCode;
}
