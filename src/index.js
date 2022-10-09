import './styles.css';
import MainTab from './mainTab';

const contentDiv = document.getElementById('content');

class TabManager {
  mainTab;
  active;

  constructor() {
    // Create header
    this.createHeader();

    // Create mainTab instance and set it to active
    this.mainTab = new MainTab();
    this.active = this.mainTab

    // Create Main
    this.createMain();

    // Create footer
    this.createFooter();

    // Link tab buttons to switch tabs
    this.linkTabButtons();
  }

  linkTabButtons = () => {
    let tabs = [...document.getElementsByClassName('tab')];
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        this.switchTab(e.target.id);
      })
    })
  }

  /**
   * 
   * @param {string} target    name of the tab to be switched to in the format of "<name>-tab"
   */
  switchTab = (target) => {
    if (target === 'contact-tab') {
      // Erase active tab
      this.active.eraseTab();
      // Change tab button
      activateTab('contact-tab');
      // Create new contact tab
      this.contactTab.createContactTab();
      // Set active tab to contact tab
      this.active = this.contactTab;
    } 
    if (target === 'main-tab') {
      // Erase active tab
      this.active.eraseTab();
      // Change tab button
      activateTab('main-tab');
      // Create new main tab
      this.mainTab.createMainTab();
      // Set active tab to main tab
      this.active = this.mainTab;
    }

    function activateTab(tabName) {
      [...document.getElementsByClassName('tab')].map(tab => {
        if (tab.classList.contains('active')) {
          tab.classList.remove('active');
        }
      });
      document.getElementById(tabName).classList.add('active');
    }
  }

  createMain() {
    let main = document.createElement('main');
    contentDiv.appendChild(main);

    // Create mainTab
    let aboutTab = this.mainTab.createMainTab();
    main.appendChild(aboutTab);
    this.active = this.mainTab;
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