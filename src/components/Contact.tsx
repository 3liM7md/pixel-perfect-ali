import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ali.m7md.adil@email.com',
      href: 'mailto:ali.m7md.adil@email.com',
      description: 'Send me an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (902) 210-2271',
      href: 'tel:+19022102271',
      description: 'Give me a call'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Halifax, NS, Canada',
      href: 'https://maps.google.com/?q=Halifax,NS,Canada',
      description: 'Currently based in Halifax'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ali-adill',
      href: 'https://linkedin.com/in/ali-adill',
      description: 'Connect with me professionally'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Let's Connect!</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm actively seeking Co-op opportunities and would love to discuss how my 
            technical skills and passion for innovation can contribute to your team.
          </p>
        </div>

        <Card className="card-gradient mb-8">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              Ready to start a conversation?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block group"
                  >
                    <Card className="bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 transform group-hover:-translate-y-1 border-secondary/30">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-card-foreground mb-1">{contact.label}</h3>
                            <p className="text-primary text-sm font-medium mb-1">{contact.value}</p>
                            <p className="text-muted-foreground text-xs">{contact.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-6">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('mailto:ali.m7md.adil@email.com', '_blank')}
            className="group"
          >
            <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Send Email
          </Button>

          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://linkedin.com/in/ali-adill', '_blank')}
              className="group"
            >
              <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://github.com/3liM7md', '_blank')}
              className="group"
            >
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
          </div>

          <Card className="card-gradient max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-card-foreground">Additional Information</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-card-foreground">Languages:</strong> Proficient in English and Arabic
                  </p>
                  <p>
                    <strong className="text-card-foreground">References:</strong> Available upon interview
                  </p>
                  <p>
                    <strong className="text-card-foreground">Availability:</strong> Currently seeking Co-op opportunities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;