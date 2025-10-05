import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Sparkles, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import spiritualImage from "@/assets/services-spiritual.jpg";
import kindertolkImage from "@/assets/services-kindertolk.jpg";
import weerbaarheidImage from "@/assets/services-weerbaarheid.jpg";

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-accent/20 to-background"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.95)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Patricia Kroeze
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">
              Spiritueel Kindercoach
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Het toepassen van mijn invoelende gave op kinderen en volwassenen zorgt voor het openen van nieuwe deuren naar je ware zelf!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="gradient">
                <Link to="/contact">
                  Neem Contact Op <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/over-mij">Meer Over Mij</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Guide Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Ik Begeleid
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Kinderen & Jongvolwassenen</h3>
                <p className="text-muted-foreground">
                  Die zich aanpassen aan anderen en zichzelf daardoor verliezen. Ik laat ze weer trouw worden aan wie ze werkelijk zijn!
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Ouders</h3>
                <p className="text-muted-foreground">
                  Die hun, vaak hooggevoelige kind, zien worstelen. Ik help ze bij het (terug)vinden van rust.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Met Humor & Rust</h3>
                <p className="text-muted-foreground">
                  Ik heb de gave in- en mee te voelen wat bij kinderen past. Ik werk met humor en vanuit rust naar hun eigen kracht.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Mijn Diensten
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Klik op onderstaande diensten voor uitgebreide informatie
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/spiritueel-kindercoach" className="group">
              <Card className="overflow-hidden shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={spiritualImage} 
                    alt="Spiritueel Kindercoach" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-center text-primary group-hover:text-primary/80 transition-colors">
                    Spiritueel Kindercoach
                  </h3>
                </CardContent>
              </Card>
            </Link>

            <Link to="/kindertolk" className="group">
              <Card className="overflow-hidden shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={kindertolkImage} 
                    alt="Kindertolk" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-center text-primary group-hover:text-primary/80 transition-colors">
                    Kindertolk
                  </h3>
                </CardContent>
              </Card>
            </Link>

            <Link to="/weerbaarheid" className="group">
              <Card className="overflow-hidden shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={weerbaarheidImage} 
                    alt="Weerbaarheid" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-center text-primary group-hover:text-primary/80 transition-colors">
                    Weerbaarheid
                  </h3>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* My Goal Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
            Mijn Doel
          </h2>
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ik wil jou als kind en indirect jullie als ouder(s)/verzorger(s) graag helpen, zodat jij weer een fijn gevoel krijgt. Je voelt/leert dat je niet meer bang, onzeker etc. hoeft te zijn of buikpijn hoeft te hebben.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We gaan er samen achter komen waar jouw gevoel of probleem vandaan komt. Ik leer je allerlei manieren om hiermee om te gaan en jij bepaalt wat je uiteindelijk wel en niet wilt.
            </p>
            <p className="text-2xl font-semibold text-primary mt-8">
              HEY……… en OOK JIJ KUNT HET samen met een beetje hulp van mij.
            </p>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="gradient">
              <Link to="/contact">
                Start Je Reis <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
