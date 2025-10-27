import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Baby, Eye, ArrowRight } from "lucide-react";
import kindertolkFoto1 from "@/assets/kindertolk-foto-1.jpg";

const Kindertolk = () => {
  return (
    <main className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Kindertolk
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-6">
          Voor Ouders/verzorgers, begeleiders, leerkrachten van kinderen
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
          <Card className="shadow-[var(--shadow-card)] border-border/50 bg-accent/20 h-full">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-semibold mb-6 text-primary">De wijsheid van jouw kind</h2>
              <p className="text-muted-foreground leading-relaxed">
                Je kind kan je spiegelen en heeft er veel voor over heeft om jou als ouder, via signalen, te helpen. Om je op een bepaald vlak weer in je kracht te zetten! Een deel (een blinde vlek) dat altijd al in jou aanwezig is en was. Je kind doet dit gewoon en is zich hiervan meestal niet eens bewust.
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

        <h2 className="text-2xl font-semibold mb-3 text-primary">Hoe kun je dat zien?</h2>
        
        <Card className="mb-4 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Signalen kunnen zijn:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>ziekte van je kind waar je zorgen om hebt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>een probleem van je kind waar jij, je zorgen om maakt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Jij ergert je aan een van je kinderen en je het maar niet los kan laten of er zelf maar niet achter komen waarom je dat zo sterk voelt.</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-4 text-foreground">Voorbeelden zijn;</h3>
            <p className="text-muted-foreground mb-3">Slecht slapen, gedragsproblemen, ruzies of pesten, plaswekkers en bedplassen, driftbuien, niet goed eten, angsten, weerkerende klachten zoals hoofd- of buikpijn, ontstekingen, een allergie of eczeem etc.</p>
          </CardContent>
        </Card>

        <Card className="mb-4 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Wanneer hulp Kindertolk® inschakelen?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Iedere ouder kent wel periodes waarin het even niet zo lekker loopt. Bijvoorbeeld omdat je kind gedrag vertoont waar je moeite mee hebt. Of omdat je kind een lichamelijke klacht heeft waarover je, je zorgen maakt. Meestal gaan deze periodes vanzelf voorbij of kom je er met wat hulp van familie of vrienden doorheen. Soms lukt dat niet, dan kan een Kindertolk® sessie wellicht uitkomst bieden.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4 shadow-[var(--shadow-card)] border-border/50 bg-gradient-to-br from-accent/30 to-accent/10">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Presentchild methode®- Methode Fluisterkind® ontwikkelaar</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De methode is ontwikkeld door Janita Venema en gaat ervanuit dat kinderen ons weerspiegelen. Soms herkennen we dit en zien we bijvoorbeeld dat ons kind dingen op dezelfde manier doet als wijzelf. Soms herkennen we het niet, omdat ons kind dan een deel van ons weerspiegelt wat we niet of niet zo goed kennen van onszelf. Een "blinde vlek". Ik ben opgeleid tot Kindertolk® en kan je helpen om te ontdekken welke delen jouw kind van jou weerspiegelt.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4 shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary text-center">Wie haalt het beste in jou naar boven?</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              Als je zoekt naar iemand die het beste in jou naar boven kan halen, die alle dagen beschikbaar is om jou te begeleiden; die geduldig volhoudt, steeds opnieuw, nauwkeurig en doelgericht werkt...... Zoek dan niet verder want je kind weet er alles van!
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Een Kindertolk® sessie?</h2>
            <p className="text-muted-foreground mb-4">Een kindertolk sessie bestaat meestal uit 2 afspraken. Tijdens de 1e afspraak vraag ik je m.b.v. een aantal Kindertolk vragen om te vertellen over jouw kind(eren), waarbij jij grotendeels aan het woord bent. Door jouw antwoorden voel ik al snel wat de essentie is en/of waar jouw pijnpunt of blinde vlek zit. Aan de hand daarvan stel ik vanuit mijn intuïtie een eigen/nieuwe vraag. Dan ga je voelen dat jouw antwoorden/verhaal niet langer over je kind, maar over jou (b)lijkt te gaan. In deze sessie wordt duidelijk welke stukjes van jou door jouw kind weerspiegelt worden. En wat daarin de specifieke kern is.</p>
            
            <p className="text-muted-foreground mb-4">We kijken samen naar de stukjes die weerspiegelt worden en nemen de tijd om stil te staan bij het gevoel dat dit jou geeft. Uiteraard kijken we ook hoe je handen en voeten kunt geven aan dat wat je ontdekt hebt over jezelf. We kijken wat nodig is voor jou en of er nog iets nodig is voor jouw kind.</p>

            <p className="text-muted-foreground">Tijdens de 2e afspraak kijken we opnieuw naar het gedrag of de gezondheid van jouw kind. We staan stil bij de veranderingen, zowel bij jouw kind als bij jezelf. Als die veranderingen bevredigend zijn, dan sluiten we de sessie af.</p>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Wil je nog meer weten over de PresentChild®methode/Het Fluisterkind® dan kun je kijken op de website van Janita Venema, <a href="https://www.presentchild.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.presentchild.nl</a>
          </p>
          <p className="text-muted-foreground mb-4">
            Ben je nu toch wel nieuwsgierig geworden wat jouw kind jou te spiegelen heeft, dan help ik je graag verder om samen te kijken wat er achter het gedrag van je kind "schuilt". Klik dan hier op contact.
          </p>
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

export default Kindertolk;
