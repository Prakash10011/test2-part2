import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(https://cdn.mappr.co/wp-content/uploads/2024/01/himalayas-nepal-flag.jpg)', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="text-center text-light">
        <h1>Welcome to Beautiful country Nepal</h1>
        <p>HEAVEN IS MYTH BUT NEPAL IS REAL</p>
      </div>
    </section>
  );
};

export default HeroSection;
