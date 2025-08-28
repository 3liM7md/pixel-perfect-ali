import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Users, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Community@Dal Social Media App',
      description: 'A full-stack social media platform built specifically for Dalhousie University students, featuring comprehensive social networking capabilities.',
      period: 'May 2024 – Aug 2024',
      role: 'Team Member',
      achievements: [
        'Built a full-stack social media platform with features like posts, comments, friends, groups, and profile management',
        'Implemented advanced search functionality for users and groups with real-time updates',
        'Developed status update system to enhance user engagement and community interaction',
        'Utilized modern tech stack with seamless deployment and continuous integration'
      ],
      technologies: ['React', 'SpringBoot', 'MySQL', 'Docker', 'Git', 'CI/CD'],
      type: 'Full-Stack Web Application',
      teamSize: 'Team Project'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects, skills, and experience with optimized performance and clean design.',
      period: 'Jun 2024',
      role: 'Team Member',
      achievements: [
        'Built a personal portfolio website using React + Vite with modern development practices',
        'Implemented responsive design with Tailwind CSS for optimal viewing across all devices',
        'Created reusable React components to showcase projects, skills, and experience effectively',
        'Configured and optimized development workflow with Vite, PostCSS, and Autoprefixer for fast builds and deployment'
      ],
      technologies: ['React', 'Vite', 'Tailwind CSS', 'PostCSS', 'Autoprefixer'],
      type: 'Frontend Web Application',
      teamSize: 'Individual Project'
    },
    {
      title: 'Python Video Game Development',
      description: 'An interactive Python-based video game featuring complex game mechanics, multiple mini-games, and engaging user interface elements.',
      period: 'Jan 2024 – Apr 2024',
      role: 'Junior Developer',
      achievements: [
        'Developed comprehensive video game with interactive menus, player mechanics, and dynamic scoring system',
        'Implemented modular game architecture including player movement, character interactions, and background rendering',
        'Created multiple game states with pause functionality, instruction menus, and seamless navigation',
        'Collaborated effectively in multi-developer environment using Git for version control and code management'
      ],
      technologies: ['Python', 'Object-Oriented Programming', 'Git', 'Game Development'],
      type: 'Game Development',
      teamSize: 'Team Project'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-Stack Web Application':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Frontend Web Application':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'Game Development':
        return 'bg-accent-muted/20 text-accent-muted border-accent-muted/30';
      default:
        return 'bg-secondary/20 text-secondary-foreground border-secondary/30';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my development work and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient hover:shadow-accent transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                  <Badge className={getTypeColor(project.type)} variant="secondary">
                    {project.type}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.teamSize}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1">
                  <h4 className="font-semibold mb-3 text-card-foreground">Key Achievements:</h4>
                  <ul className="space-y-2 mb-6">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex} 
                        className="flex items-start gap-2 text-sm text-card-foreground leading-relaxed"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-card-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-secondary/50 text-secondary-foreground border-secondary/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-card-border">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => {
                      // In a real implementation, this would link to the actual project
                      console.log(`View ${project.title} project`);
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      // In a real implementation, this would link to the GitHub repo
                      console.log(`View ${project.title} code`);
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              // Link to GitHub profile
              window.open('https://github.com/3liM7md', '_blank');
            }}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;