import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/90 text-white shadow-lg">
      <div className="w-full mx-auto px-16 py-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-lg font-bold mb-2 text-white">Rick and Morty</h1>
          <div className="flex justify-center items-center space-x-4 text-sm text-white-600">
            <span>© 2026 Rick and Morty</span>
            <span>•</span>
            <a 
              href="https://github.com/VanessaSLino/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-cyan-700 transition-colors"
            >
              <Github size={16} aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;