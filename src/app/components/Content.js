import React from "react";
import "./Content.css"; // Import styles

function Content() {
  return (
    <main className="content">
      <section className="hero">
        <h1>Welcome to Our Website!</h1>
        <p>
          Your journey to success starts here. Explore our services and get to
          know more about us.
        </p>
      </section>

      <section className="features">
        <h2>Our Services</h2>
        <div className="feature-item">
          <h3>Web Development</h3>
          <p>Building modern and responsive websites for your business.</p>
        </div>
        <div className="feature-item">
          <h3>Mobile Apps</h3>
          <p>
            Creating mobile apps that make your business accessible anywhere.
          </p>
        </div>
        <div className="feature-item">
          <h3>SEO Optimization</h3>
          <p>
            Helping you rank higher on search engines and reach your audience.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Content;
