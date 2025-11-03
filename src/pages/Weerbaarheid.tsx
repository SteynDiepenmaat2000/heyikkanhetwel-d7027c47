import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Shield, ArrowRight, School } from "lucide-react";

const Weerbaarheid = () => {
  return (
    <main className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Weerbaarheid & Sociale Vaardigheden
        </h1>

        <Card className="mb-4 shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold text-primary">Voor</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-center">
              <p className="text-muted-foreground">
                kinderen/jongeren individueel van<br />
                <span className="font-semibold">8-18 jaar</span>
              </p>
              <p className="text-muted-foreground">
                in groepen op school van<br />
                <span className="font-semibold">4-14 jaar</span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Kindercoach weerbaarheid</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Het allerbelangrijkste vind ik dat je het bij mij niet 'goed' of 'fout' kunt doen. Je gaat oefenen en ervaren hoe krachtig, slim en sterk je eigenlijk bent. Met allerlei leuke en speelse oefeningen zet ik jou terug in je (eigen) natuurlijke kracht. Je leert dat er andere keuzes mogelijk zijn en je dus ook andere keuzes kunt gaan maken. En uiteindelijk valt het achteraf altijd mee!
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-primary">Signalen</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>weinig zelfbeheersing, snel of fel reageren op een ander (fysiek of met woorden)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>(faal) angst of buikpijn (thuis, bij een ander of op school)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>bang zijn om er niet bij te horen (vaak geen nee durven te zeggen/geen grenzen durven te stellen of niet hun eigen mening durven te geven)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>bang zijn om fouten te maken en/of het niet goed te doen</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-primary">Doel</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>het verbeteren van communicatieve en sociale vaardigheden. Wat bijdraagt tot een verbeterde zelfbeheersing, zelfreflectie en zelfvertrouwen waardoor je steviger in je schoenen gaat staan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>het leren voorkomen van conflicten d.m.v. spel, rollenspelen en simpele zelfverdedigingsvormen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>het leren maken van eigen keuzes en het leren gaan van zijn of haar eigen weg</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-4 shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <School className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold text-primary">Groepen in school</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Samen actief, op een prettige en veilige manier, werken aan een betere sfeer in de klas. Veiligheid en vertrouwen zijn hierbij belangrijke voorwaarden.
            </p>
            <h3 className="font-semibold text-foreground mb-2">Hoe kan dit ingezet worden?</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>per klas of delen van een klas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>de training wordt aangepast aan het leerdoel van de groep</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-3 italic">*aantal bijeenkomsten is afhankelijk van de vraag en de vooruitgang</p>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">
              Neem Contact Op <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Weerbaarheid;
