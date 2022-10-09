import './styles.css';

const contentDiv = document.getElementById('content');

class MainScreen {
  constructor() {
    // Create a header element
    const header = document.createElement('header');
    // Create h1 element
    const h1 = document.createElement('h1');
    h1.textContent = 'Primordial Taste'
    // Add h1 element to header
    header.appendChild(h1);
    // Add header to content div
    contentDiv.appendChild(header);

    // Create a main element
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
    gitHubIcon.style.fontSize = '30px';
    a.appendChild(gitHubIcon);
    footer.appendChild(a);
    document.body.appendChild(footer);
  }
}

const mainScreen = new MainScreen();