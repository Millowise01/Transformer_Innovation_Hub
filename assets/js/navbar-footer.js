// Injects navbar and footer into the page
function injectNavbarFooter() {
  const navbar = `<nav>
    <div class="logo"><img src='../assets/images/TIH-Logo.png' alt='TIH Logo' style='height:40px;vertical-align:middle;'> Transformer Hub</div>
    <div class="nav-links">
      <a href='../pages/Index.html'>Home</a>
      <a href='../pages/About Us.html'>About Us</a>
      <a href='../pages/Shop.html'>Shop</a>
      <a href='../pages/Blog.html'>Blog</a>
      <a href='../pages/Community.html'>Community</a>
      <a href='../pages/Events.html'>Events</a>
      <a href='../pages/Contact Us.html'>Contact</a>
      <a href='../pages/Sustainable Art.html'>Sustainable Art</a>
      <a href='../pages/Cart.html'>Cart</a>
      <a href='../pages/Checkout.html'>Checkout</a>
      <a href='../pages/login.html'>Login</a>
      <a href='../pages/Signup.html'>Signup</a>
    </div>
  </nav>`;
  const footer = `<footer>
    &copy; 2025 Transformer Innovative Hub. All rights reserved.
  </footer>`;
  document.body.insertAdjacentHTML('afterbegin', navbar);
  document.body.insertAdjacentHTML('beforeend', footer);
}
document.addEventListener('DOMContentLoaded', injectNavbarFooter);
