import './styles.css';

const contentDiv = document.getElementById('content');

class MainScreen {
  constructor() {
    // Create header
    const header = document.createElement('header');
    // Create h1 element
    const h1 = document.createElement('h1');
    h1.textContent = 'Primordial Taste'
    // Add h1 element to header
    header.appendChild(h1);
    // Add header to content div
    contentDiv.appendChild(header);
    // Create tabs div
    const tabs = document.createElement('div');
    tabs.id = 'tabs-container';
    // Create tab buttons
    const mainTab = document.createElement('button');
    mainTab.className = 'tab';
    mainTab.id = 'main-tab';
    mainTab.textContent = 'Main';
    const contactTab = document.createElement('button');
    contactTab.textContent = 'Contact';
    contactTab.className = 'tab';
    contactTab.id = 'contact-tab';
    tabs.append(mainTab, contactTab);
    header.appendChild(tabs);

    // Create main
    const main = document.createElement('main');
    // Create about-container div
    const aboutContainer = document.createElement('div');
    // Set aboutContainer ID
    aboutContainer.id = 'about-container';
    // Add about-container div to main
    main.appendChild(aboutContainer);
    // Create p elements
    const p0 = document.createElement('p');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p0.textContent = 'Best food in the universe';
    p1.textContent = 'Made with perfection since the down of time';
    p2.textContent = 'Order via the ether or wrap to us!!';
    // Add p elements to about-container
    main.append(p0, p1, p2);
    // Add main to content div
    contentDiv.appendChild(main);

    // Create footer
    const footer = document.createElement('footer');
    const a = document.createElement('a');
    a.href = 'https://github.com/MuKhAlt/odin-restaurant-page.git';
    const gitHubIcon = document.createElement('i');
    gitHubIcon.classList.add('fa-github');
    gitHubIcon.classList.add('fab');
    a.appendChild(gitHubIcon);
    footer.appendChild(a);
    document.body.appendChild(footer);
  }
}

const mainScreen = new MainScreen();