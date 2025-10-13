import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Contact
        </h1>

        <Card className="mb-8 shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2 text-primary">Patricia Kroeze</h2>
              <p className="text-lg text-muted-foreground">"Heyikkanhetwel"</p>
              <p className="text-muted-foreground">Spiritueel Kindercoach</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Telefoon</h3>
                  <a 
                    href="tel:+31651317365" 
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    +31 (0)6 51317365
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Email</h3>
                  <a 
                    href="mailto:info@heyikkanhetwel.nl" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@heyikkanhetwel.nl
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Adres</h3>
                  <p className="text-muted-foreground">
                    Kastanjestraat 58<br />
                    7572TC Oldenzaal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        <Card className="shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary text-center">Neem Gerust Contact Op</h2>
            <p className="text-muted-foreground text-center leading-relaxed mb-4">
              Heb je vragen of wil je meer informatie over mijn werkwijze? Ik sta altijd open voor een kennismakingsgesprek. Je kunt mij bellen, mailen of direct een afspraak online inplannen.
            </p>
            <p className="text-center text-sm text-muted-foreground">
              KvK: 72639377
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            Lieve mensen,
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Succes bij jou/jullie proces bij mij of bij iemand anders. Belangrijk is dat het voor jou/jullie goed voelt.
          </p>
          <p className="text-lg text-primary font-semibold mt-6">
            Hartelijke groet,
            <br />
            Patricia
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
