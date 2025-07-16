// WorkShowcase.jsx (Styled Variant)
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    houseType: "4-Bedroom Duplex",
    client: "Mr. Okoro",
    location: "Enugu, Nigeria",
    engineer: "Engr. Emmanuel Obi",
    approval: "Approved by Enugu Dev. Board",
    contributors: ["Bricklayer: Chinedu N.", "Electrician: Paul A."],
    image: "https://images.unsplash.com/photo-1590650046871-92c88705b231?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    houseType: "3-Bedroom Bungalow",
    client: "Mrs. Adaeze",
    location: "Awka, Anambra",
    engineer: "Engr. Blessing Uche",
    approval: "Approved by Anambra Urban Dev. Board",
    contributors: ["Mason: James I.", "Electrician: Sola M."],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    houseType: "Renovated 2-Flat",
    client: "Mr. & Mrs. Onuoha",
    location: "Owerri, Imo State",
    engineer: "Engr. Nneka Paul",
    approval: "Renovation cleared by IMDA",
    contributors: ["Carpenter: Ike C.", "Tiler: Femi A."],
    image: "https://images.unsplash.com/photo-1629791957544-8f3c64b4ae67?auto=format&fit=crop&w=800&q=80",
  },
];

const infiniteProjects = [...projects, projects[0]];

const WorkShowcase = () => {
  const [index, setIndex] = useState(0);
  const slideRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === projects.length + 1) {
      setTimeout(() => {
        slideRef.current.style.transition = "none";
        setIndex(0);
        slideRef.current.style.transform = `translateX(0%)`;
      }, 500);
      return;
    }
    slideRef.current.style.transition = "transform 0.7s ease-in-out";
    slideRef.current.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-green-800 mb-4">🏡 Project Showcase</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Discover beautifully completed projects built by trusted Nigerian professionals.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto h-[520px] overflow-hidden">
        <div ref={slideRef} className="flex w-full">
          {infiniteProjects.map((project, i) => (
            <div key={i} className="w-full flex-shrink-0 px-5">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.houseType}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.houseType}</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li><i className="fas fa-map-marker-alt text-green-600 mr-2"></i>{project.location}</li>
                    <li><i className="fas fa-user text-green-600 mr-2"></i>Client: {project.client}</li>
                    <li><i className="fas fa-hard-hat text-green-600 mr-2"></i>Engineer: {project.engineer}</li>
                    <li><i className="fas fa-check-circle text-green-600 mr-2"></i>{project.approval}</li>
                  </ul>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-green-700 hover:text-green-900"
                  >
                    <i className="fas fa-users"></i> View Contributors
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
