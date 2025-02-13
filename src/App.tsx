import React, { useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Brain,
  Layout,
  Rocket,
  Wrench,
  Bot,
  Cpu,
  Database,
  Server,
  Globe,
  FileJson,
  Terminal,
  Blocks,
  GitBranch,
  Binary,
} from 'lucide-react';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          // Add stagger effect to child elements
          const children = entry.target.querySelectorAll('.stagger-animation');
          children.forEach((child, index) => {
            child.classList.add('animate-slide-up');
          });
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Hero Section with Photo */}
      <header className="container mx-auto px-4 py-16 md:py-24 animate-on-scroll">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform duration-300">
              <img
                src="./mypic.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-fade-in">
              SHORYA KSHETTRY
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              <span className="text-blue-400 hover:scale-105 inline-block transition-transform">Blockchain</span> |
              <span className="text-green-400 hover:scale-105 inline-block transition-transform"> Machine Learning</span> |
              <span className="text-purple-400 hover:scale-105 inline-block transition-transform"> Full-Stack Development</span>
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-300 mb-8">
              <a
                href="https://www.linkedin.com/in/shorya-kshettry-b7b196285/"
                className="flex items-center gap-2 hover:text-blue-400 hover:scale-105 transition-all bg-gray-800/50 rounded-full px-4 py-2"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="mailto:Shorya.k3.2005@gmail.com"
                className="flex items-center gap-2 hover:text-red-400 hover:scale-105 transition-all bg-gray-800/50 rounded-full px-4 py-2"
              >
                <Mail size={20} /> Email
              </a>
              <a
                href="https://github.com/shorya27"
                className="flex items-center gap-2 hover:text-gray-400 hover:scale-105 transition-all bg-gray-800/50 rounded-full px-4 py-2"
              >
                <Github size={20} /> GitHub
              </a>
              <span className="flex items-center gap-2 bg-gray-800/50 rounded-full px-4 py-2 hover:scale-105 transition-transform">
                <MapPin size={20} /> IIT Indore
              </span>
            </div>
          </div>
        </div>
      </header>


      <section className="container mx-auto px-4 py-16 animate-on-scroll">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 animate-fade-in">
          <Rocket className="text-blue-400 animate-bounce" />
          Blockchain Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* STRATOS */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 transform hover:scale-[1.03] transition-all duration-300 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">
                  STRATOS | DeFi Innovation Platform
                </h3>
                <p className="text-gray-300">
                  Project Developer | November 2024 – Present
                </p>
              </div>
              <a
                href="https://www.linkedin.com/posts/singhyashh_web3-aiagents-defi-ugcPost-7294361719412318208-uW-N?utm_source=share&utm_medium=member_desktop"
                className="text-blue-400 hover:text-blue-300 hover:rotate-12 transition-transform"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="mb-4 text-gray-200">
              Developing an innovative DeFi platform integrating cross-chain
              transactions, AI-powered trading, and lending protocols.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li className="hover:translate-x-2 transition-transform">
                Engineered a one-command DeFi interface for token transactions
              </li>
              <li className="hover:translate-x-2 transition-transform">
                Developed AI-powered trading algorithms
              </li>
              <li className="hover:translate-x-2 transition-transform">
                Integrated quantitative trading models
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-4 py-1 bg-blue-900/50 rounded-full text-sm hover:bg-blue-800/50 transition-colors">
                Solidity
              </span>
              <span className="px-4 py-1 bg-blue-900/50 rounded-full text-sm hover:bg-blue-800/50 transition-colors">
                Hardhat
              </span>
              <span className="px-4 py-1 bg-blue-900/50 rounded-full text-sm hover:bg-blue-800/50 transition-colors">
                DeFi Protocols
              </span>
              <span className="px-4 py-1 bg-blue-900/50 rounded-full text-sm hover:bg-blue-800/50 transition-colors">
                AI/ML
              </span>
            </div>
          </div>

          {/* NFT CREATURE GAME */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 transform hover:scale-[1.03] transition-all duration-300 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-green-400">
                  NFT CREATURE GAME | IITISoC Winner
                </h3>
                <p className="text-gray-300">
                  Project Developer | May 2024 – July 2024
                </p>
              </div>
              <a
                href="https://lnkd.in/deE9TyYW"
                className="text-green-400 hover:text-green-300 hover:rotate-12 transition-transform"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="mb-4 text-gray-200">
              Led the award-winning blockchain gaming project, securing 1st place
              in the intra-college competition.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li className="hover:translate-x-2 transition-transform">
                Built NFT-based gameplay mechanics
              </li>
              <li className="hover:translate-x-2 transition-transform">
                Developed smart contracts for NFT operations
              </li>
              <li className="hover:translate-x-2 transition-transform">
                Designed full-stack MERN architecture
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-4 py-1 bg-green-900/50 rounded-full text-sm hover:bg-green-800/50 transition-colors">
                Solidity
              </span>
              <span className="px-4 py-1 bg-green-900/50 rounded-full text-sm hover:bg-green-800/50 transition-colors">
                Socket.IO
              </span>
              <span className="px-4 py-1 bg-green-900/50 rounded-full text-sm hover:bg-green-800/50 transition-colors">
                MERN Stack
              </span>
              <span className="px-4 py-1 bg-green-900/50 rounded-full text-sm hover:bg-green-800/50 transition-colors">
                Web3.js
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Learning Projects */}
      <section className="container mx-auto px-4 py-16 animate-on-scroll">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Brain className="text-purple-400" />
          Machine Learning Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tool Integration System */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 transform hover:scale-[1.03] transition-all duration-300 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-purple-400">
                  Language Model Tool Integration
                </h3>
                <p className="text-gray-300">
                  AI/ML Developer | Inter IIT DevRev
                </p>
              </div>
              <a
                href="https://github.com/DSC-IITI/AI-Agent-008-B-DevRev-"
                className="text-purple-400 hover:text-purple-300 hover:rotate-12 transition-transform"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="mb-4 text-gray-200">
              LLM-based tool-calling system for AI workflows.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li className="hover:translate-x-2 transition-transform">
                Dynamic tool execution system
              </li>
              <li className="hover:translate-x-2 transition-transform">
                Error-handling mechanisms
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-4 py-1 bg-purple-900/50 rounded-full text-sm hover:bg-purple-800/50 transition-colors">
                Python
              </span>
              <span className="px-4 py-1 bg-purple-900/50 rounded-full text-sm hover:bg-purple-800/50 transition-colors">
                LangChain
              </span>
            </div>
          </div>

          {/* Persona-Based LLM */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 transform hover:scale-[1.03] transition-all duration-300 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-purple-400">
                  Persona-Based LLM Fine-Tuning
                </h3>
                <p className="text-gray-300">ML Engineer</p>
              </div>
              <a
                href="https://github.com/shorya27/Cynaptics-Induction/blob/main/Task3/script/Task_3.ipynb"
                className="text-purple-400 hover:text-purple-300 hover:rotate-12 transition-transform"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="mb-4 text-gray-200">
              Fine-tuned LLMs using Falcon-7B-Instruct.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li className="hover:translate-x-2 transition-transform">
                LoRA-based fine-tuning
              </li>
              <li className="hover:translate-x-2 transition-transform">
                PEFT optimization
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-4 py-1 bg-purple-900/50 rounded-full text-sm hover:bg-purple-800/50 transition-colors">
                PyTorch
              </span>
              <span className="px-4 py-1 bg-purple-900/50 rounded-full text-sm hover:bg-purple-800/50 transition-colors">
                Transformers
              </span>
            </div>
          </div>

          {/* NASA Turbofan */}
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 transform hover:scale-[1.03] transition-all duration-300 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-purple-400">
                  NASA Turbofan RUL Prediction
                </h3>
                <p className="text-gray-300">ML Developer</p>
              </div>
            </div>
            <p className="mb-4 text-gray-200">
              RUL estimation using NASA Turbofan Dataset.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li className="hover:translate-x-2 transition-transform">
                Multiple ML models implementation
              </li>
              <li className="hover:translate-x-2 transition-transform">
                Feature engineering optimization
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-4 py-1 bg-purple-900/50 rounded-full text-sm hover:bg-purple-800/50 transition-colors">
                Python
              </span>
              <span className="px-4 py-1 bg-purple-900/50 rounded-full text-sm hover:bg-purple-800/50 transition-colors">
                TensorFlow
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 animate-on-scroll">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Wrench className="text-green-400" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 transform hover:scale-[1.05] transition-all duration-300 shadow-xl">
            <Code2 className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-4">Blockchain & Web3</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:translate-x-2 transition-transform">Smart Contracts</li>
              <li className="hover:translate-x-2 transition-transform">DeFi</li>
              <li className="hover:translate-x-2 transition-transform">NFTs</li>
              <li className="hover:translate-x-2 transition-transform">Cross-Chain Development</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 transform hover:scale-[1.05] transition-all duration-300 shadow-xl">
            <Brain className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:translate-x-2 transition-transform">PyTorch</li>
              <li className="hover:translate-x-2 transition-transform">Transformers</li>
              <li className="hover:translate-x-2 transition-transform">Neural Networks</li>
              <li className="hover:translate-x-2 transition-transform">LoRA Fine-Tuning</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 transform hover:scale-[1.05] transition-all duration-300 shadow-xl">
            <Layout className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:translate-x-2 transition-transform">MERN Stack</li>
              <li className="hover:translate-x-2 transition-transform">Socket.IO</li>
              <li className="hover:translate-x-2 transition-transform">Full-Stack Development</li>
              <li className="hover:translate-x-2 transition-transform">RESTful APIs</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-8 transform hover:scale-[1.05] transition-all duration-300 shadow-xl">
            <Code2 className="w-8 h-8 text-red-400 mb-4" />
            <h3 className="text-xl font-bold mb-4">Programming</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:translate-x-2 transition-transform">Solidity</li>
              <li className="hover:translate-x-2 transition-transform">Python</li>
              <li className="hover:translate-x-2 transition-transform">JavaScript</li>
              <li className="hover:translate-x-2 transition-transform">Hardhat</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Shorya Kshettry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;