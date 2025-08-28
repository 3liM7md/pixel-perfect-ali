import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const courses = [
    'Data Structures & Algorithms',
    'Software Engineering', 
    'Database Management',
    'Operating Systems',
    'Web-Centric Computing',
    'Human-Computer Interaction',
    'Information Security',
    'Network Computing',
    'Object-Oriented Programming'
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic journey in computer science
          </p>
        </div>

        <div className="space-y-6">
          <Card className="card-gradient hover:shadow-accent transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1">
                      Bachelor of Applied Computer Science
                    </CardTitle>
                    <p className="text-primary font-semibold">Dalhousie University</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Expected Dec 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Halifax, NS</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-muted-foreground mb-2">Currently in 4th year</p>
                <h4 className="font-semibold mb-3 text-card-foreground">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground border-secondary"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient hover:shadow-accent transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1">
                      High School Diploma
                    </CardTitle>
                    <p className="text-accent font-semibold">Philadelphia Private School</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Graduated 2022</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Dubai, UAE</span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;