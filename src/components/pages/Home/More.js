import React from "react";

const Testimonials = () => (
  <section className="bg-background py-20 px-6 h-[90vh]">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-primary mb-12">
        Testimonials & <span className="text-accent">Success Stories</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {[{
          text: "EcoConnect helped our company reduce energy costs by 30%! Their guidance made sustainable practices easy and impactful.",
          author: "- GreenTech Solutions"
        },
        {
          text: "I never realized how small changes could make a big difference. Thanks to EcoConnect, my household cut water usage by 25%.",
          author: "- Priya Sharma"
        },
        {
          text: "EcoConnect's tips empowered our school to implement eco-friendly initiatives that inspired students and saved resources.",
          author: "- River Valley High School"
        },
        {
          text: "Our café switched to compostable packaging thanks to EcoConnect. We've received fantastic feedback from eco-conscious customers.",
          author: "- Nature's Brew Café"
        }].map((testimonial, index) => (
          <div
            key={index}
            className="bg-secondary p-8 rounded-3xl shadow-lg border border-primary hover:scale-105 transition-transform duration-300"
          >
            <p className="italic text-lg mb-4">{testimonial.text}</p>
            <h3 className="font-bold text-xl text-primary">{testimonial.author}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;