import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import overMijFoto from "@/assets/over-mij-foto.jpg";

const OverMij = () => {
  return (
    <main className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Over Mij</h1>

        <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
          <div>
            <img src={overMijFoto} alt="Patricia Kroeze" className="rounded-lg shadow-[var(--shadow-card)] w-full" />
          </div>
          <Card className="shadow-[var(--shadow-card)] border-border/50 h-full">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold text-primary">Help….. IK VOEL ZO VEEL!</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ja ik voel ook veel en dat is soms heel erg lastig. Je gaat je aanpassen omdat je anderen zo goed
                  begrijpt. Gelukkig weet ik nu al heel snel als ik iets voel dat dit niet van mij is maar van een
                  ander. Ik weet ook wat ik daarmee kan doen en er soms ook helemaal niks mee hoef te doen.
                </p>
                <p>
                  Het aanvoelen is een 'natuurlijke gave' van mij. Het grote voordeel is dat ik jou/u daardoor ook snel
                  begrijp en aanvoel. Inmiddels heb ik me zover ontwikkeld dat het aanvoelen, m.n. bij geven van een
                  energetische healing, een gave is geworden!
                </p>
                <p>
                  Door het boek 'Leven met hooggevoeligheid, van opgave naar gave' van Susan Marletta-Hart, inmiddels 15
                  jaar geleden, kwam ik erachter dat veel kenmerken van hooggevoelig zijn op mij en vele anderen van
                  toepassing zijn. Sindsdien snap ik nog beter hoe het voor kinderen werkt. Ik voelde me vaak niet
                  gehoord (luisteren) en begrepen als kind. Dat neem ik mijn ouders niet kwalijk en wil daarom andere
                  kinderen en volwassenen graag helpen zodat zij zich wel gehoord en begrepen voelen en de 'blinde
                  vlekken' laten ontdekken.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-4 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Mijn Achtergrond</h2>
            <p className="text-muted-foreground mb-4">
              Van oorsprong ben ik docente Lichamelijke Opvoeding in het basisonderwijs te Ootmarsum en Motorisch
              Remedial Teacher maar de afgelopen 15 jaren heb ik me steeds verder ontwikkeld tot:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold min-w-[24px]">1.</span>
                <span>Docente Tai Chi (Chi Choice)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold min-w-[24px]">2.</span>
                <span>
                  Docente Rots en Water basistraining: Primair Onderwijs groep 1 t/m 8 en Voortgezet Onderwijs 1 en 2
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold min-w-[24px]">3.</span>
                <span>Kindertolk® (tegenwoordig) Presentchild bij Janita Venema</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold min-w-[24px]">4.</span>
                <span>
                  Medium therapeut en Paramedisch & Psychosociaal mediumschap bij de Spirituele & Intuïtieve Academie
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold min-w-[24px]">5.</span>
                <span>Coachee-spel ® Licentie bij Jeanette Stam</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold min-w-[24px]">6.</span>
                <span>Systematisch Kindercoach – Familieopstellingen Kind en Jongeren</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary text-center">Durf Jezelf Te Zijn</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              Luister naar wat jij wilt, niet naar wat je omgeving van je verlangt. En ontdek dat de grootste druk van
              buitenaf eigenlijk van binnen komt. Het zijn je overtuigingen, ingesleten patronen en vaste denkgewoontes
              die je het meest behoeden om helemaal jezelf te zijn. Blijf dichtbij jezelf. Merk op wat je voelt, wat je
              intuïtie je ingeeft. En probeer het meer en meer te volgen. Dat is precies waar ik je op welk vlak dan ook
              bij kan helpen. En ook ik heb daarbij soms hulp nodig als ik er zelf even niet uit kom.
            </p>
          </CardContent>
        </Card>

        <div className="mt-4 text-center">
          <p className="text-lg text-muted-foreground italic">Lieve mensen,</p>
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

export default OverMij;
