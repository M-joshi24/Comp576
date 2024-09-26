import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/styles/Testimonial.css";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1080 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1366, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 360 },
      items: 1,
    },
  };

  const testimonials = [
    {
      name: "Jahanara Ahmed",
      image: "https://media.istockphoto.com/id/923274708/photo/mid-adult-woman-headshot.jpg?s=612x612&w=0&k=20&c=0W9LmlqPr7bQyBGQEnBwJl-Qjss6r4-DgDUdSUQ_LeY=",
      quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      score: "88%",
    },
    {
      name: "Dilara Begum",
      image: "https://qph.cf2.quoracdn.net/main-qimg-d18e12caac9ff88d9293a013819b4429-lq",
      quote: "Cras sit amet nibh libero, in gravida nulla metus scelerisque ante sollicitudin commodo cras purus odio, vestibulum in tempus viverra turpis.",
      score: "100%",
    },
    {
      name: "Milon Ahmed",
      image: "https://media.licdn.com/dms/image/D5612AQEPv36iMlRGUQ/article-cover_image-shrink_600_2000/0/1681961472754?e=2147483647&v=beta&t=rMb4vw7fcCUfDwRKZYwCYlqU3JDPaD8Dz0DXxJ4QyAk",
      quote: "Autem, totam debitis suscipit saepe sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis labore laboriosam.",
      score: "88%",
    },
  ];

  return (
    <div className="testimonial">
      <h1 className="text-center pb-3">Testimonial</h1>
      <div className="d-flex justify-content-center">
        <div className="col-md-8">
          <Carousel
            showDots={true}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {testimonials.map((testimonial, index) => (
              <div className="card" key={index}>
                <div className="col text-center">
                  <div className="card-body mx-3">
                    <div className="mb-4">
                      <img
                        src={testimonial.image}
                        className="rounded-circle shadow-1-strong"
                        width={128}
                        height={128}
                        alt={`${testimonial.name}'s avatar`}
                      />
                    </div>
                    <h5 className="font-weight-bold">{testimonial.name}</h5>
                    <div className="score">
                      <span style={{ width: testimonial.score }}></span>
                    </div>
                    <p className="mb-2">
                      <i className="fas fa-quote-left pe-2" />
                      {testimonial.quote}
                      <i className="fas fa-quote-right pe-2" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
