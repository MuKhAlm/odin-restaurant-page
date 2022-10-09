import './styles.css';
import MainTab from './mainTab';

const contentDiv = document.getElementById('content');

class TabManager {
  mainTab;
  active;

  constructor() {
    // Create header
    this.createHeader();

    // Create Main
    let main = document.createElement('main');
    contentDiv.appendChild(main)

    // Create mainTab
    this.mainTab = new MainTab();
    let aboutTab = this.mainTab.createMainTab();
    main.appendChild(aboutTab);
    this.active = this.mainTab;

    // Create footer
    this.createFooter();
  }

  createFooter() {
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

  createHeader() {
    const header = document.createElement('header');
    // Create h1 element
    const h1 = document.createElement('h1');
    h1.textContent = 'Primordial Taste';
    // Add h1 element to header
    header.appendChild(h1);
    // Add header to content div
    contentDiv.appendChild(header);
    // Create tabs div
    const tabs = document.createElement('div');
    tabs.id = 'tabs-container';
    // Create tab buttons and add them
    const mainTab = document.createElement('button');
    mainTab.className = 'tab';
    mainTab.classList.add('active');
    mainTab.id = 'main-tab';
    mainTab.textContent = 'Main';
    const contactTab = document.createElement('button');
    contactTab.textContent = 'Contact';
    contactTab.className = 'tab';
    contactTab.id = 'contact-tab';
    tabs.append(mainTab, contactTab);
    header.appendChild(tabs);
  }
}

const tabManager = new TabManager();