import { Heart, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import overMijFoto from "@/assets/over-mij-foto.jpg";
import krantenartikel from "@/assets/krantenartikel.jpg";

const OverMij = () => {
  const [isKrantenArtikelOpen, setIsKrantenArtikelOpen] = useState(false);

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
                Door het boek 'Leven met hoog gevoeligheid, van opgave naar gave' van Susan Marletta-Hart, inmiddels 25
                jaar geleden, kwam ik erachter dat veel kenmerken van hoog gevoelig zijn op mij en vele anderen van
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
              Van oorsprong was ik 33 jaar docente Lichamelijke Opvoeding in het basisonderwijs te Ootmarsum en Motorisch
              Remedial Teacher maar de afgelopen jaren heb ik me op volgorde van tijd steeds verder ontwikkeld tot:
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
                <span>Familieopstellingen Kind en Jongeren bij Ingrid Dijkstra</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-semibold min-w-[24px]">7.</span>
                <span>Holistisch Kindertherapeut met HSP-specialisatie bij Anne van Ommen</span>
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

        <Card className="mb-4 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Je hart volgen</h2>
            <p className="text-muted-foreground leading-relaxed">
              In april 2024 heb ik gedaan wat mijn hart al langer wist. Vaak moet er eerst wat minder fijns gebeuren, voordat je een grote nieuwe stap durft te zetten. Ik ben gestopt als gym juf en ben als gezinsondersteuner gaan werken. Het bemiddelingsbureau waar ik vanuit werk heet "hulp met gevoel". Dat paste precies op mijn weg. Tot nu toe een hele goede keus.
            </p>
          </CardContent>
        </Card>

        {/* Krantenartikel */}
        <Card className="mb-4 shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">In de media</h2>
            <div 
              className="cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => setIsKrantenArtikelOpen(true)}
            >
              <img 
                src={krantenartikel} 
                alt="Krantenartikel over Patricia Kroeze - Zetje in de rug voor kinderen" 
                className="rounded-lg shadow-[var(--shadow-card)] w-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* Krantenartikel Dialog */}
        <Dialog open={isKrantenArtikelOpen} onOpenChange={setIsKrantenArtikelOpen}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-auto">
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10 bg-background/80 backdrop-blur-sm p-2">
              <X className="h-6 w-6" />
              <span className="sr-only">Sluiten</span>
            </DialogClose>
            <img 
              src={krantenartikel} 
              alt="Krantenartikel over Patricia Kroeze - Zetje in de rug voor kinderen" 
              className="w-full h-auto"
            />
          </DialogContent>
        </Dialog>

        <div className="mt-4 text-center">
          <p className="text-lg text-muted-foreground italic">Lieve mens,</p>
          <p className="text-lg text-muted-foreground mt-4">
            Kies op gevoel en met je hart of mijn hulp bij jou/jullie past.
          </p>
          <p className="text-lg text-primary font-semibold mt-6">
            groet Patricia
          </p>
        </div>
      </div>
    </main>
  );
};

export default OverMij;
