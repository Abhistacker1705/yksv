export const menuClickhandle = (e) => {
	const menuText = e.target.innerText.replace(' ', '-').toLowerCase();
	const section = document.getElementById(menuText);
	if (section) section.scrollIntoView({behavior: 'smooth'});
};
