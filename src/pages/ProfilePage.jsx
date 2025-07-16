import React from 'react';
import MainNav from '../components/GeneralComponents/MainNav';
import Footer from '../components/GeneralComponents/footer';
import { useParams, useNavigate } from 'react-router-dom';

const allWorkers = [
  {
    id: 'john-mason',
    name: 'John Mason',
    title: 'Bricklayer',
    experience: '7 years',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    email: 'john@example.com',
    phone: '+2347012345678',
    whatsapp: '+2347012345678',
    samples: [
      'https://via.placeholder.com/300x200?text=Wall+Brick+Work',
      'https://via.placeholder.com/300x200?text=Garden+Fence',
    ],
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
    samples: [
      'https://via.placeholder.com/300x200?text=3D+House+Design',
      'https://via.placeholder.com/300x200?text=Plan+Sketch',
    ],
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
    samples: [
      'https://via.placeholder.com/300x200?text=Wiring+Panel',
      'https://via.placeholder.com/300x200?text=Generator+Setup',
    ],
  },
];

const Profile = () => {
  const { workerId } = useParams();
  const navigate = useNavigate();
  const worker = allWorkers.find(w => w.id === workerId);

  if (!worker) {
    return <div className="p-10 text-red-600 font-bold text-xl">Worker not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className=" md:-mt-24 md:absolute md:-ml-24"
      >
        <i className='fas fa-arrow-left text-2xl\7'></i>
      </button>

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <img
          src={worker.image}
          alt={worker.name}
          className="w-40 h-40 rounded-full border-4 border-green-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{worker.name}</h1>
          <p className="text-green-600 font-medium">{worker.title}</p>
          <p className="text-gray-600">{worker.experience} of experience</p>

          <div className="mt-4 flex gap-4 text-green-600 text-xl">
            <a href={`mailto:${worker.email}`} title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href={`https://wa.me/${worker.whatsapp.replace('+', '')}`} target="_blank" title="WhatsApp" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href={`tel:${worker.phone}`} title="Call">
              <i className="fas fa-phone-alt"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Sample Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {worker.samples.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Sample ${index + 1}`}
              className="rounded-xl border shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div className='space-y-16'>
      <MainNav />
      <Profile />
      <Footer />
    </div>
  );
};

export default ProfilePage;
