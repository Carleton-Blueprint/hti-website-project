const About = () => {
  const coreValues = [
    { title: 'Innovation', description: 'Encouraging creativity and bold thinking in health tech.' },
    { title: 'Collaboration', description: 'Valuing collective knowledge, teamwork, and inclusivity.' },
    { title: 'Education', description: 'Prioritizing learning and growth through resources and events.' },
    { title: 'Impact', description: 'Making a tangible difference by enhancing patient care and outcomes.' },
    { title: 'Networking', description: 'Connecting like-minded individuals for meaningful professional relationships.' },
  ];

  return (
    <section className="py-16 px-4 bg-white font-['Arial',_'Helvetica',_'Open_Sans',_sans-serif]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#004AAD] mb-8 text-center">About Us</h2>
        
        {/* Mission Statement */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#004AAD] mb-3">Our Mission</h3>
          <p className="text-lg text-gray-700">
            The Health Tech Innovators Club fosters innovation, inspires creativity, and drives progress in the health tech industry. It provides a collaborative platform where members share ideas, connect with professionals, learn about the latest trends, and work on projects that improve healthcare outcomes and enhance patient experiences.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#004AAD] mb-3">Our Vision</h3>
          <p className="text-lg text-gray-700">
            A leading community of health tech enthusiasts, innovators, and professionals at the forefront of transforming healthcare through technology. The club empowers members by offering opportunities to engage with industry leaders, collaborate on cutting-edge projects, and influence the future of healthcare.
          </p>
        </div>
        
        {/* Core Values */}
        <div>
          <h3 className="text-xl font-semibold text-[#004AAD] mb-6 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white">
                <h4 className="text-lg font-semibold text-[#FF914D] mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 