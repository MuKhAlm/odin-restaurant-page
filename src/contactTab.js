import './styles.css';

export default class ContactTab {
  /**
   * Creates the contactContainer and returns it,
   * 
   * @return    contactCountainer
   */
  createTab() {
    // Create contact-container div
    const contactContainer = document.createElement('div');
    // Set contactContainer ID
    contactContainer.id = 'contact-container';
    // Create p elements
    const p0 = document.createElement('p');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p0.textContent = 'Contact us!!';
    p1.textContent = 'Phone Number: xxx xxx xxx';
    p2.textContent = 'Address: xxxxxxxx';
    // Add p elements to contact-container
    contactContainer.append(p0, p1, p2);

    return contactContainer;
  }

  /**
   * Erases aboutContainer,
   */
  eraseTab() {
    document.getElementById('contact-container').remove();
  }
}