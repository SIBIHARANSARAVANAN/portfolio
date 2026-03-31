import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, PaperclipIcon, Bot, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const projects = [
  {
    title: "PaperParse",
    description: "PaperParse is an AI tool designed to help developers, students, and researchers quickly understand complex research papers.",
    icon: PaperclipIcon,
    tech: ["Python", "NLP", "Render", "OpenAI"],
    gradient: "from-orange-400 to-red-500",
    demo: "https://ai-research-paper-assistant.vercel.app/",
    github: "https://github.com/SIBIHARANSARAVANAN/ai-research-paper-assistant"
  },
  {
    title: "PrepBot",
    description: "PrepBot is an intelligent interview practice tool that helps users improve their communication and confidence.",
    icon: Bot,
    tech: ["Python", "Render", "Groq"],
    gradient: "from-blue-400 to-purple-500",
    demo: "https://ai-nlp-chatbot.vercel.app/",
    github: "https://github.com/SIBIHARANSARAVANAN/chat_bot"
  },
  {
    title: "Recommendation System Project",
    description: "This project is an intelligent Recommendation System designed to deliver personalized suggestions based on user preferences, behavior, and interaction history.",
    icon: BarChart3,
    tech: ["Power BI", "Python", "Pandas", "Data Viz"],
    gradient: "from-green-400 to-blue-500",
    demo: "https://your-demo-link.com",
    github: "https://github.com/SIBIHARANSARAVANAN/Recommendation-System"
  }
];

export function Projects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive gallery showcasing AI/ML projects that push the boundaries of what's possible
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">

                {/* HOVER GRADIENT */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* HEADER */}
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    {/* ICON */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* BUTTONS */}
                    <div className="flex space-x-2">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost">
                          <ExternalLink size={16} />
                        </Button>
                      </a>

                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost">
                          <Github size={16} />
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* TEXT */}
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* TECH TAGS */}
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
