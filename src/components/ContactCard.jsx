import React from 'react';

function ContactCard({ name, img, roll }) {
  return (
    <div className="contact-card bg-white shadow-lg rounded-lg overflow-hidden w-80 ">
      <img src={img} alt={name} className="w-full h-[400px] object-top object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{roll}</p>
      </div>
    </div>
  );
}

export default ContactCard;
