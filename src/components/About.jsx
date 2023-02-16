import React from 'react';

const About = () => {
  return (
    <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-7 col-sm-12 my-5">
              <h1
                style={{
                  borderBottom: "5px solid rgb(99, 6, 6)",
                  width: "180px",
                }}
              >
                About Us
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus impedit aut deserunt doloremque dolor quod officia
                omnis nam necessitatibus, minus, consequuntur nihil. Voluptatem
                esse consequatur quaerat corporis voluptatibus culpa eveniet
                minus at commodi? Nihil laudantium earum adipisci! Error
                dignissimos, ut eos quo qui ex? Exercitationem eaque
                reprehenderit quia neque consectetur minima dicta voluptatem
                asperiores error sint veritatis modi tenetur repudiandae, ipsa
                natus dignissimos ab id ducimus est earum cum distinctio
                quisquam itaque. Sapiente ullam sint assumenda ducimus modi, ea
                deserunt ipsa labore veritatis. Unde exercitationem quos.
              </p>
              <button className="btn btn-primary btn-lg">See More</button>
            </div>
            <div className="col-md-5 col-sm-12 py-5">
              <img
                src="./assets/bg2.png"
                alt="about-img"
                style={{ objectfit: "fill" }}
                width="100%"
                height="min-content"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default About
