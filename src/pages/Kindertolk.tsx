import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Baby, Eye, ArrowRight } from "lucide-react";
import kindertolkFoto1 from "@/assets/kindertolk-foto-1.jpg";
import kindertolkFoto2 from "@/assets/kindertolk-foto-2.jpg";

const Kindertolk = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Kindertolk
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-12">
          Voor Ouders/verzorgers, begeleiders en leerkrachten van kinderen
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <Card className="shadow-[var(--shadow-card)] border-border/50 bg-accent/20 h-full">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-semibold mb-6 text-primary">De Wijsheid Van Jouw Kind</h2>
              <p className="text-muted-foreground leading-relaxed">
                Je kind kan je spiegelen en heeft er veel voor over om jou als ouder, via signalen, te helpen. Om je op een bepaald vlak weer in je kracht te zetten! Een deel (een blinde vlek) dat altijd al in jou aanwezig is en was. Je kind doet dit gewoon en is zich hiervan meestal niet eens bewust.
              </p>
            </CardContent>
          </Card>
          <div>
            <img 
              src={kindertolkFoto1} 
              alt="Kindertolk" 
              className="rounded-lg shadow-[var(--shadow-card)] w-full"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-primary">Hoe Kun Je Dat Zien?</h2>
        
        <Card className="mb-8 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-8">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Signalen kunnen zijn:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Ziekte van je kind waar je zorgen om hebt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Een probleem van je kind waar jij je zorgen om maakt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Jij ergert je aan een van je kinderen en je het maar niet los kan laten of er zelf maar niet achter komen waarom je dat zo sterk voelt</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-4 text-foreground">Voorbeelden zijn:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Slecht slapen</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Gedragsproblemen</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Ruzies of pesten</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Bedplassen</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Driftbuien</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Niet goed eten</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Angsten</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Hoofd- of buikpijn</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Ontstekingen</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Allergie of eczeem</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Wanneer Hulp Kindertolk® Inschakelen?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Iedere ouder kent wel periodes waarin het even niet zo lekker loopt. Bijvoorbeeld omdat je kind gedrag vertoont waar je moeite mee hebt. Of omdat je kind een lichamelijke klacht heeft waarover je, je zorgen maakt. Meestal gaan deze periodes vanzelf voorbij of kom je er met wat hulp van familie of vrienden doorheen. Soms lukt dat niet, dan kan een Kindertolk® sessie wellicht uitkomst bieden.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-[var(--shadow-card)] border-border/50 bg-gradient-to-br from-accent/30 to-accent/10">
          <CardContent className="pt-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Presentchild Methode® / Het Fluisterkind®</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De methode is ontwikkeld door Janita Venema en gaat ervanuit dat kinderen ons weerspiegelen. Soms herkennen we dit en zien we bijvoorbeeld dat ons kind dingen op dezelfde manier doet als wijzelf. Soms herkennen we het niet, omdat ons kind dan een deel van ons weerspiegelt wat we niet of niet zo goed kennen van onszelf. Een "blinde vlek". Ik ben opgeleid tot Kindertolk® en kan je helpen om te ontdekken welke delen jouw kind van jou weerspiegelt.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Een Kindertolk® Sessie</h2>
            <p className="text-muted-foreground mb-6">Een Kindertolk® sessie bestaat meestal uit 3 afspraken:</p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">1e Afspraak</h3>
                  <p className="text-muted-foreground">
                    Tijdens de 1e afspraak vraag ik je om te vertellen over jouw kind(eren). Ik zal af en toe wat vragen stellen, maar jij bent grotendeels aan het woord. Na afloop van dit gesprek vertaal ik als het ware het verhaal dat jij aan mij hebt verteld, zodat er een tweede verhaal ontstaat. Dat verhaal gaat dan niet langer over je kind, maar over jou. In dit verhaal wordt duidelijk welke stukjes van jou door jouw kind weerspiegelt worden. En wat daarin de specifieke kern is.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">2e Afspraak</h3>
                  <p className="text-muted-foreground">
                    Tijdens de 2e afspraak staat dit tweede verhaal centraal. We kijken samen naar de stukjes die weerspiegelt worden en nemen de tijd om stil te staan bij het gevoel dat dit jou geeft. Uiteraard kijken we ook hoe je handen en voeten kunt geven aan dat wat je ontdekt hebt over jezelf. We kijken wat nodig is voor jou en of er nog iets nodig is voor jouw kind.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Baby className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">3e Afspraak</h3>
                  <p className="text-muted-foreground">
                    Tijdens de 3e afspraak kijken we opnieuw naar het gedrag of de gezondheid van jouw kind. We staan stil bij de veranderingen, zowel bij jouw kind als bij jezelf. Als die veranderingen bevredigend zijn, dan sluiten we de sessie af.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary text-center">Wie Haalt Het Beste In Jou Naar Boven?</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              Als je zoekt naar iemand die het beste in jou naar boven kan halen, die alle dagen beschikbaar is om jou te begeleiden; die geduldig volhoudt, steeds opnieuw, nauwkeurig en doelgericht werkt...... Zoek dan niet verder want je kind weet er alles van!
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Wil je nog meer weten over de PresentChild®methode/Het Fluisterkind®? Kijk dan op de website van Janita Venema:{" "}
            <a href="https://www.presentchild.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              www.presentchild.nl
            </a>
          </p>
          <p className="text-muted-foreground mb-8">
            Ben je nu toch wel nieuwsgierig geworden wat jouw kind jou te spiegelen heeft? Dan help ik je graag verder om samen te kijken wat er achter het gedrag van je kind "schuilt".
          </p>
          <Button asChild size="lg" variant="gradient">
            <Link to="/contact">
              Neem Contact Op <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Kindertolk;
