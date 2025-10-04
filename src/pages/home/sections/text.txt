import React from "react";
import innovator from '../../../../public/images/innovator.jpg'
// import secondMushroom from "../../../images/mushroom_2.jpg"

const AboutInnovator = () => {
  return (
    <section className="relative py-20" style={{backgroundColor: '#f5fff5'}}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-zinc-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Entrepreneur & Business Strategist
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight">
                John Doe
              </h1>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Building and scaling successful ventures for over 15 years. 
                Specializing in market disruption and sustainable business growth.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100">
                <div className="text-3xl font-bold text-zinc-900">$50M+</div>
                <div className="text-sm text-zinc-500 mt-1">Revenue Generated</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100">
                <div className="text-3xl font-bold text-zinc-900">4</div>
                <div className="text-sm text-zinc-500 mt-1">Successful Exits</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100">
                <div className="text-3xl font-bold text-zinc-900">200+</div>
                <div className="text-sm text-zinc-500 mt-1">Jobs Created</div>
              </div>
            </div>

            {/* Areas of Expertise */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {['Business Strategy', 'Market Analysis', 'Growth Hacking', 'Team Building', 'Investment'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-wrap gap-4 pt-4"> */}
              {/* No buttons needed for this section */}
            {/* </div> */}
          </div>

          {/* Right Image Column */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-100">
              <img
                src={innovator}
                alt="John Doe"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Credentials */}
              <div className="absolute top-6 -right-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-zinc-900">Forbes 30</div>
                      <div className="text-sm text-zinc-500">Under 30</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-zinc-200/50">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-medium text-zinc-500">Current Venture</div>
                      <div className="text-lg font-semibold text-zinc-900">TechVentures Inc.</div>
                    </div>
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
