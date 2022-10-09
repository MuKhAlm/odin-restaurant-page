import './styles.css';

export default class MainTab {
  /**
   * Creates the aboutContainer and returns it,
   * 
   * @return    aboutCountainer
   */
  createTab() {
    // Create about-container div
    const aboutContainer = document.createElement('div');
    // Set aboutContainer ID
    aboutContainer.id = 'about-container';
    // Create p elements
    const p0 = document.createElement('p');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p0.textContent = 'Best food in the universe';
    p1.textContent = 'Made with perfection since the down of time';
    p2.textContent = 'Order via the ether or wrap to us!!';
    // Add p elements to about-container
    aboutContainer.append(p0, p1, p2);

    return aboutContainer;
  }

  /**
   * Erases aboutContainer,
   */
  eraseTab() {
    document.getElementById('about-container').remove();
  }
}