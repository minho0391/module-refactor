class Footer {
  constructor() {
    this.footer = document.querySelector("#footer");
  }

  render() {
    this.footer.innerHTML = `
      <p>&copy; 2014. All rights reserved. Questions?</p>

      <p>
        Email us at
        <a href="#" class="text-link">office@product.com</a>
      </p>
    `;
  }
}

export default Footer;
