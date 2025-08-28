import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Dalhousie University',
      location: 'Halifax, NS',
      period: 'Jan 2025 – May 2025',
      type: 'Academic Project',
      achievements: [
        'Led a team project developing a full-stack web app with Vite + React, contributing to frontend, backend, and testing',
        'Deployed the app on Netlify and integrated it with Telegram BotFather for real-time interaction',
        'Built a Telegram Mini App to extend platform usability and enhance user engagement'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Dalhousie University',
      location: 'Halifax, NS',
      period: 'Jan 2024 – Apr 2024',
      type: 'Academic Project',
      achievements: [
        'Developed a Python-based video game with interactive menus, player mechanics, and scoring system, showcasing strong object-oriented programming and problem-solving skills',
        'Collaborated in a multi-developer team using Git for version control, contributing to game logic, user interface elements, and mini-games',
        'Implemented modular game components (player movement, pirate characters, background rendering, pause/instructions menus) to ensure maintainability and scalability'
      ]
    },
    {
      title: 'IT Support & Hardware Intern',
      company: 'Earth Gate Computers',
      location: 'Dubai, UAE',
      period: 'May 2023 – Aug 2023',
      type: 'Internship',
      achievements: [
        'Diagnosed and repaired Acer and Dell laptops by disassembling systems, replacing defective components (HDDs, keyboards, palm rests), and verifying functionality using BIOS/UEFI diagnostics',
        'Installed drivers, updated firmware, and configured system software with tools such as Device Manager, Windows Update, and vendor support utilities to optimize device performance',
        'Managed IT hardware inventory by performing stock checks, logging equipment with Excel/Google Sheets, and assisting with device deployment'
      ]
    },
    {
      title: 'Community Safety Team Member',
      company: 'Dalhousie University Residence',
      location: 'Halifax, NS',
      period: 'Aug 2024 – Present',
      type: 'Leadership Role',
      achievements: [
        'Patrolled residence buildings to maintain a safe and welcoming environment',
        'Mediated conflicts between students, resolving issues respectfully and fairly',
        'Conducted access control by verifying student entry into residence buildings',
        'Performed daily student check-ins to support wellness, safety, and community building'
      ]
    },
    {
      title: 'Community Mentor',
      company: 'Dalhousie University Residence',
      location: 'Halifax, NS',
      period: 'Aug 2023 – Present',
      type: 'Leadership Role',
      achievements: [
        'Supported first-year students in their transition to university life by providing guidance and mentorship',
        'Facilitated campus tours and responded to inquiries to help students navigate university resources and services',
        'Organized monthly community events to encourage connection, inclusion, and student engagement',
        'Served as a reliable support system, fostering a welcoming and safe environment for new students'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Academic Project':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Internship':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'Leadership Role':
        return 'bg-accent-muted/20 text-accent-muted border-accent-muted/30';
      default:
        return 'bg-secondary/20 text-secondary-foreground border-secondary/30';
    }
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional and academic experience in software development and leadership
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="card-gradient hover:shadow-accent transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getTypeColor(exp.type)}>
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li 
                      key={achievementIndex} 
                      className="flex items-start gap-3 text-card-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;