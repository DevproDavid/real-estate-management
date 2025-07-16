import React from 'react';
import { useNavigate } from 'react-router-dom';

const workers = [
  {
    id: 'john-mason',
    name: 'John Mason',
    title: 'Bricklayer',
    experience: '7 years',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    email: 'john@example.com',
    phone: '+2347012345678',
    whatsapp: '+2347012345678',
  },
  {
    id: 'grace-okafor',
    name: 'Grace Okafor',
    title: 'Architect',
    experience: '10 years',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    email: 'grace@example.com',
    phone: '+2348034567890',
    whatsapp: '+2348034567890',
  },
  {
    id: 'samuel-ojo',
    name: 'Samuel Ojo',
    title: 'Electrician',
    experience: '5 years',
    image: 'https://randomuser.me/api/portraits/men/88.jpg',
    email: 'samuel@example.com',
    phone: '+2348123456789',
    whatsapp: '+2348123456789',
  },
];

const WorkersSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-3">Featured Service Providers</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Meet some of our top-rated professionals who are ready to work on your next project.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {workers.map((worker, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 group"
          >
            <img
              src={worker.image}
              alt={worker.name}
              className="w-24 h-24 mx-auto rounded-full border-4 border-green-500 mb-4"
            />
            <h3 className="text-xl font-bold text-center text-gray-900">{worker.name}</h3>
            <p className="text-sm text-center text-green-700 font-medium">{worker.title}</p>
            <p className="text-center text-gray-600 mb-4">{worker.experience} experience</p>

            <div className="flex justify-center gap-4 text-green-600 text-lg mb-4">
              <a href={`mailto:${worker.email}`} title="Email">
                <i className="fas fa-envelope hover:text-green-800"></i>
              </a>
              <a href={`https://wa.me/${worker.whatsapp.replace('+', '')}`} target="_blank" title="WhatsApp">
                <i className="fab fa-whatsapp hover:text-green-800"></i>
              </a>
              <a href={`tel:${worker.phone}`} title="Call">
                <i className="fas fa-phone-alt hover:text-green-800"></i>
              </a>
            </div>

            <div className="text-center">
              <button
                className="bg-green-600 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow hover:bg-green-700 transition"
                onClick={() => navigate(`/profile/${worker.id}`)}
              >
                View Full Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkersSection;