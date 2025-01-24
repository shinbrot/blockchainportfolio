import React from 'react';
import { Github, Linkedin, Mail, Feather as Ethereum, Bitcoin, Code2, Database, Cpu, Layers, Wallet } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-indigo-500/30 shadow-lg shadow-indigo-500/20">
          <img 
            src="https://files.catbox.moe/3sysnm.jpg" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Jinshi,</h1>
          <div className="inline-block">
            <h2 className="text-xl md:text-2xl text-indigo-400 mb-6 typing-animation">Web3 & Blockchain Developer</h2>
          </div>
          <p className="text-gray-300 mb-8 text-base md:text-lg max-w-2xl">
            Passionate blockchain and Website developer specializing in DeFi protocols, Web Server and smart contract development.
            Building the future of decentralized finance and profesional website with expertise in Solidity, Web3.js, and React.
          </p>
          
          <div className="flex justify-center md:justify-start gap-6 mb-12">
            <a href="https://github.com/shinboseishiro" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ceo@lieeyan.my.id" 
               className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
            <Ethereum size={24} className="text-gray-400" />
            <Bitcoin size={24} className="text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
        <div className="expertise-card backdrop-blur-md bg-white/5 border border-gray-700/50 p-6 md:p-8 rounded-xl">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-6">Developing Expertise</h3>
          <div className="space-y-2">
            <div className="expertise-item">
              <Code2 className="text-indigo-400" size={20} />
              <span>Smart Contract & Web Development (Solidity, etc)</span>
            </div>
            <div className="expertise-item">
              <Database className="text-indigo-400" size={20} />
              <span>Backend Architecture</span>
            </div>
            <div className="expertise-item">
              <Cpu className="text-indigo-400" size={20} />
              <span>Standard web, Web3.js & Ethers.js Integration</span>
            </div>
            <div className="expertise-item">
              <Layers className="text-indigo-400" size={20} />
              <span>Fullstack Developer</span>
            </div>
            <div className="expertise-item">
              <Wallet className="text-indigo-400" size={20} />
              <span>Cross-chain Solutions</span>
            </div>
          </div>
        </div>
        
        <div className="project-card backdrop-blur-md bg-white/5 border border-gray-700/50 p-6 md:p-8 rounded-xl">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-6">Recent Projects</h3>
          <div className="space-y-2">
            <div className="project-item">
              <h4 className="font-medium mb-1">Top-up Website</h4>
              <p className="text-sm text-gray-400">Automated user store self service 24/7</p>
            </div>
            <div className="project-item">
              <h4 className="font-medium mb-1">Cloud Managements</h4>
              <p className="text-sm text-gray-400">Cloud consultant, risk and plan managements</p>
            </div>
            <div className="project-item">
              <h4 className="font-medium mb-1">Cross-chain Bridge</h4>
              <p className="text-sm text-gray-400">Secure asset transfer between networks</p>
            </div>
            <div className="project-item">
              <h4 className="font-medium mb-1">DAO Governance</h4>
              <p className="text-sm text-gray-400">Decentralized voting and proposal system</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}