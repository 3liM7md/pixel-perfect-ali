import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java', 'Python', 'C', 'C++', 'JavaScript', 'HTML/CSS', 'SQL', 'PHP'],
      color: 'text-primary'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      skills: ['React.js', 'Node.js', 'Express.js', 'Vite', 'SpringBoot'],
      color: 'text-accent'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git', 'GitLab', 'VSCode', 'MySQL', 'PostgreSQL', 'Docker', 'Linux', 'Netlify', 'Jira'],
      color: 'text-accent-muted'
    },
    {
      title: 'Interpersonal Skills',
      icon: Users,
      skills: ['Communication', 'Time Management', 'Attention to Detail', 'Problem Solving', 'Team Leadership', 'Agile Development'],
      color: 'text-primary'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technical expertise and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient hover:shadow-accent transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 bg-secondary/30 rounded-lg flex items-center justify-center">
                      <IconComponent className={`w-5 h-5 ${category.color}`} />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary/70 transition-colors border-secondary/30 text-card-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Card className="card-gradient max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2 text-card-foreground">Languages</h3>
              <div className="flex justify-center gap-4">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  English (Proficient)
                </Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  Arabic (Proficient)
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;