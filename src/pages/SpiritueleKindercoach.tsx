import { Card, CardContent } from "@/components/ui/card";
import { Heart, Moon, Shield, Sparkles } from "lucide-react";

const SpiritueleKindercoach = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Zo Werk Ik
        </h1>

        <Card className="mb-8 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Mijn doel is kinderen (en volwassenen) te helpen door "echt" te luisteren en in te voelen. Op aards, spiritueel en energetisch niveau. Kinderen vooral te laten voelen en ervaren zodat ze (intuïtief) weten en leren wat wel en niet bij hun past.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          Wat Kan Ik Betekenen Voor Jou, Je Kind of Je Gezin?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Terug In Je Kracht</h3>
              </div>
              <p className="text-muted-foreground">
                Als je kind niet zichzelf is, weer in zijn/haar KRACHT zetten. Dat kan zich uiten in onzekerheid, weinig zelfbeheersing (boosheid, thuis afreageren, slaan, ergens tegenaan schoppen), faalangst, bang om het fout te doen.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Moon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Prettig Slapen</h3>
              </div>
              <p className="text-muted-foreground">
                Als je kind niet goed kan slapen, buikpijn heeft en/of evt. dingen/mensen ziet in zijn/haar slaapkamer → zich weer prettig laten voelen zonder "buik"pijn en in slaap vallen in je eigen bed. Het bed moet een veilig plek zijn en rust geven.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Bescherming & Rust</h3>
              </div>
              <p className="text-muted-foreground">
                Als je kind, jij of iemand van je gezin last heeft van een minder fijn gevoel of energie die nog in een ruimte hangt of bepaalde personen waar hij/zij regelmatig mee te maken heeft → daar kan ik contact mee maken en zorgen dat dit verdwijnt of leer je om jezelf te beschermen. Dit geeft rust en voelt fijn.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Healing & Reading</h3>
              </div>
              <p className="text-muted-foreground">
                Je kind of jij een lichamelijke klacht, spanning/onrust heeft die maar niet over lijkt te gaan. → pijn of spanning/onrust vermindert of verdwijnt na healing en/of reading of via spiegelinzicht middels de methode Kindertolk.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Op Welke Manier Pak Ik Dat Aan?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Met mijn zuivere intentie weet ik, wat wel en niet te benoemen bij een kind. Dit gaat vanzelf. Kinderen voelen zich vaak erg snel op mijn gemak als ze eenmaal bij me zijn. En ik denk dat dit komt omdat het kind ZICHZELF mag zijn bij mij. Er is geen goed of fout. Het gaat erom dat we samen ontdekken waar uw kind zich fijn bij voelt en zodoende weer vanuit haar/zijn eigen mooie KRACHT verder gaat in het leven.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default SpiritueleKindercoach;
