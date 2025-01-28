import React from 'react';

const ThreeColumnSection = () => {
  return (
    <section id="three-columns" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-center">
            <img src="https://lh4.googleusercontent.com/proxy/a6RVro2pkldbcm3XHDggiAQEXGl-dt2ul6PZCXOPWvMCgFSUjmG72DI4XDnfKGIzcWjDyfhlM4UrXUJWbZED2b4ovydXdQzA"className="img-fluid mb-3" />
            <h4>Mt.Everest</h4>
            <p>Nepal - The Country of Mountains and Spirituality</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-center">
            <img src="https://media.worldnomads.com/explore/nepal-landmarks/pashupatinath-hero.jpg" alt="Image 2" className="img-fluid mb-3" />
            <h4>Pashupatinath Temple</h4>
            <p> Temples and Cultural Landmarks to See in Nepal
</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-center">
            <img src="https://www.asiaodysseytravel.com/images/asia-tours/nepal-tours/nepal-boudhanath-stupa-700-1.jpg" alt="Image 3" className="img-fluid mb-3" />
            <h4>Swoyambhu Mahachaitya</h4>
            <p>Temples in Nepal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnSection;
