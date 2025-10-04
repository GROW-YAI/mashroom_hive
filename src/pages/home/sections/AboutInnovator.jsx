import React, { useState } from 'react';
import Innovator from '../../../../public/images/innovator.jpg';
import Joseph from '../../../../public/images/team/Sales.jpg';
import Grace from '../../../../public/images/team/Production Lead.jpg'

const AboutInnovator = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    {
      name: "Grace Korantemaa Yamoah",
      position: "Production Lead",
      bio: "Grace Korantemaa Yamoah is a dynamic young entrepreneur and the Production Lead for The Mushroom Hive dedicated to cultivating high-quality mushrooms and developing innovative, sustainable mushroom-based products. With a passion for agriculture, food innovation, and environmental sustainability, Miss Yamoah leads the company's efforts in producing fresh mushrooms, dried mushrooms, functional foods, and eco-friendly waste solutions.The Mushroom Hive has expanded into the health and wellness sector, creating mushroom powders, teas, and sustainable agricultural products. With expertise in mushroom farming, supply chain management, and product development, Miss Yamoah ensures that every product meets the highest standards of quality and sustainability.",
      image: Grace
    },
    {
      name: "Joseph Yamoah",
      position: "Sales & Marketing Manager",
      bio: "Joseph Yamoah is a dynamic and results-driven sales and marketing personnel at The Mushroom Hive, passionate about promoting the benefits of mushroom-based products. With a keen understanding of customer needs, he focuses on expanding brand reach, driving sales, and building strong client relationships. His goal is to make high-quality, eco-friendly mushroom products accessible to a wider audience.",
      image: Joseph
    }
  ];

  return (
    <section id='innovator' className="relative bg-[#f5fff5] py-16 md:py-24 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2e7d32]/10 rounded-full mix-blend-multiply blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1b5e20]/10 rounded-full mix-blend-multiply blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-[#2e7d32]">Team</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[#2e7d32] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 mb-4">
            Our team is comprised of passionate and dedicated individuals who share a common goal of harnessing the power of mushrooms to improve lives. With diverse backgrounds and expertise, we work together to drive innovation and sustainability in the industry.
          </p>
        </div>

        {/* Team Member Selection */}
        <div className="flex justify-center gap-4 mb-12">
          {teamMembers.map((member, index) => (
            <button
              key={index}
              onClick={() => setActiveTeamMember(index)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTeamMember === index
                  ? 'bg-[#2e7d32] text-white shadow-lg'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-100 hover:shadow'
              }`}
            >
              {member.name}
            </button>
          ))}
        </div>

        {/* Active Team Member Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group p-4">
            <img
              src={teamMembers[activeTeamMember].image}
              alt={teamMembers[activeTeamMember].name}
              className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[550px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="hidden md:block absolute inset-0 rounded-2xl bg-gradient-to-t from-[#2e7d32]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="hidden md:block absolute -top-4 -right-4 w-full h-full border-2 border-[#2e7d32]/40 rounded-2xl -z-10 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800">
                {teamMembers[activeTeamMember].name}
              </h3>
              <p className="text-[#2e7d32] font-medium text-xl mt-2">
                {teamMembers[activeTeamMember].position}
              </p>
            </div>
            <div className="w-20 h-1 bg-[#2e7d32]/80"></div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {teamMembers[activeTeamMember].bio}
            </p>

            {/* Optional: Add social links or contact information */}
            <div className="flex gap-4 justify-center items-center">
              <button className="px-6 py-2 border border-[#2e7d32] text-[#2e7d32] font-semibold rounded-full shadow-md hover:bg-[#1b5e20] hover:text-white hover:border-[#1b5e20] hover:shadow-lg transition-all duration-300 ease-in-out">
                Contact
              </button>
              <button className="px-6 py-2 bg-[#2e7d32] text-white font-semibold rounded-full shadow-md hover:bg-[#1b5e20] hover:shadow-lg transition-all duration-300 ease-in-out">
                Learn More
              </button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutInnovator;