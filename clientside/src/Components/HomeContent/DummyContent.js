import './DummyContent.css';
import React from 'react';


const Box = ({ title, content, imageUrl }) => {
  return (
    <div className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg mx-2 mb-4 mt-4 bg-sky-500" style={{ backgroundColor: 'white' }}>
      <div className="image-container px-3 py-2 justify-content-center">
        <img style={{ width: 50, height: 49, marginLeft: 11 }} src={imageUrl} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      
    </div>
  );
};

const DummyContent = () => {
  return (
    <div className="flex flex-wrap justify-center p-4" style={{ backgroundColor: '#0798BC' }}>
      <Box
        title="Operation Theater"
        content="An operating theatre accommodates one or two patient(s) at a time, during and only during the period in which, under the direct supervision of a medical or dental practitioner..."
        imageUrl="https://cdn-icons-png.flaticon.com/512/3209/3209103.png"
        
      />
      <Box
        title="Box 2"
        content="A mortar and pestle are two tools used together to mill (grind) and mix substances. The mortar is bowl-shaped, and used to hold the substance to be ground. Mortars have smooth, rounded bottoms and wide mouths. The pestle is a stick used for pounding and grinding."
        imageUrl="https://media.istockphoto.com/id/1407054148/vector/mortar-pastel-modern-concepts-design-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=36vdSuN97vVTdkriCc3pLjwU4rXAaVPWuKT-yT6FO6g="
      />
      <Box
        title="Box 3"
        content="An operating theatre accommodates one or two patient(s) at a time, during and only during the period in which, under the direct supervision of a medical or dental practitioner...."
        imageUrl="https://cdn.iconscout.com/icon/free/png-512/free-ambulance-1468835-1242929.png?f=webp&w=256"
      />
    </div>
  );
};

export default DummyContent;
