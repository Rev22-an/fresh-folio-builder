
import { User, Book } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400 animate-gradient mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start space-x-4 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg">
                <User className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Personal Info</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate frontend developer with a keen eye for design and user experience. 
                  I love turning complex problems into simple, beautiful, and intuitive solutions. 
                  When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                  or playing chess.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg">
                <Book className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="font-medium">Bachelor of Technology in Computer Science</p>
                  <p className="text-blue-400">ABC University • 2020-2024</p>
                  <p className="text-sm">CGPA: 8.5/10</p>
                  <p className="text-sm leading-relaxed">
                    Specialized in web development, data structures, and software engineering. 
                    Active member of the coding club and participated in multiple hackathons.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="bg-slate-700/30 p-8 rounded-2xl backdrop-blur-sm border border-slate-600 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Quick Facts</h3>
            <div className="space-y-4">
              {[
                { label: "Age", value: "22" },
                { label: "Location", value: "New York, USA" },
                { label: "Languages", value: "English, Spanish" },
                { label: "Interests", value: "Coding, Design, Music" },
                { label: "Availability", value: "Open to Work", special: true }
              ].map((fact, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-3 border-b border-slate-600/50 opacity-0 animate-fade-in" 
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <span className="text-gray-400">{fact.label}</span>
                  <span className={`${fact.special ? "text-green-400" : "text-white"} font-medium`}>
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
