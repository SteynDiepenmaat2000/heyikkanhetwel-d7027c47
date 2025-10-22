import { Card, CardContent } from "@/components/ui/card";
import { Heart, Moon, Shield, Sparkles, Home as HomeIcon } from "lucide-react";
import spiritualFoto from "@/assets/spiritual-foto-1.jpg";

const SpiritueleKindercoach = () => {
  return (
    <main className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Spiritueel (Kinder)coach
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-8">
          Voor Alle Leeftijden
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
          <div>
            <img 
              src={spiritualFoto} 
              alt="Spiritueel Kindercoach" 
              className="rounded-lg shadow-[var(--shadow-card)] w-full"
            />
          </div>
          <Card className="shadow-[var(--shadow-card)] border-border/50 bg-accent/20 h-full">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Paranormaal Begaafd of Paranormaliteit</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mijn ervaring met kinderen die paranormaal zijn of intuïtieve vermogens hebben is dat het voor hen normaal is. Belangrijk is dat je je daar als ouder of opvoeder bewust van bent. Het ene kind, vaak intuïtieve kind, vindt het wel lastig om ermee om te gaan omdat ze niet precies weten wat ze ermee moeten. Als een kind het wil gaan we in een veilige setting samen contact maken zodat ze leren hoe ze dat kunnen doen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Een paranormaal heeft er vaak geen last van om de spirit(s) te zien en ermee te communiceren. Het hoort bij hun leven, maar het is wel fijn als ze zelf kunnen bepalen wat ze ermee doen en op welk moment. Dat is wat ik hun kan leren. Het geeft rust bij het kind en binnen het gezin. Het kind leeft daardoor &quot;makkelijker&quot; of &quot;meer&quot; in het aardse leven.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center text-primary">
          Huiszuivering
        </h2>

        <Card className="mb-6 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Wat houdt huiszuivering in?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Soms lijkt het alsof er iemand of iets in uw huis aanwezig is terwijl u (of uw kind) het niet kunt zien maar wel voelt (intuïtie). Vanaf mijn eigen huis stem ik af op uw huis en kijk ik wat ik tegenkom ten aanzien van de vraag of probleem die u mij gesteld heeft. De antwoorden die ik krijg zijn belangrijk voor u, uw kind of een van uw gezinsleden. Zo krijgt u inzicht waarom deze situatie of dit probleem zich voordoet.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              U hebt zelf de keus of u hiermee wat gaat doen. Weet dat als u daar niets mee doet, het probleem waarschijnlijk in dezelfde of andere vorm terug gaat komen. Ga van uw eigen mogelijkheden, kunnen en kracht uit!
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 shadow-[var(--shadow-card)] border-border/50 bg-gradient-to-br from-accent/30 to-accent/10">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Wanneer zet ik huiszuivering in bij kinderen?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Na een 1ᵉ overleg aan telefoon of in de praktijk met ouder en kind geef ik de mogelijkheid om eerst af te stemmen op hun huis om te kijken wat ik tegenkom aan spirits en boodschappen. Na de huiszuivering zal uw kind of u merken dat de energie veranderd is. Enkele opmerkingen van kinderen en ouders die dit ervaren hebben:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary">*</span>
                <span>mijn dochter huilde van geluk toen ze zelf ging voelen dat die man niet meer in haar kamer was en de kamer zoveel lichter voelde</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">*</span>
                <span>ik heb mijn zoon niet meer over die man gehoord</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">*</span>
                <span>mijn zoon is nu vrij rustig en niet meer verdrietig</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">*</span>
                <span>het heeft mijn dochter veel rust gegeven</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">*</span>
                <span>ik als ouder heb ook bijzonder veel aan onze gesprekken gehad, na afstemming van Patricia op ons huis, en dat voelde erg fijn</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">*</span>
                <span>we maken gauw nog weer een afspraak, want daar heeft mijn dochter echt profijt van</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-bold mb-6 text-center text-primary">
          Healing & Reading
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Healing</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tijdens een behandeling wordt jouw energetische lichaam opgeschoond. Dit gebeurt met energie. Ik fungeer als doorgever om de goede energie daar zijn werk te laten doen waar het nodig is. Met als eindresultaat dat je in zijn geheel genomen meer ontspannen, (innerlijke) rust ervaart, de pijn verminderd of weggenomen wordt en je daardoor meer in balans bent.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Healing bij kinderen</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Binnen mijn kindercoachsessies komt het af en toe voor dat ik een healing met mijn handen geef. Dit ontstaat en weet ik dus niet van tevoren. Natuurlijk zal ik dit eerst overleggen, voordat ik een energetische behandeling geef.
              </p>
              <h4 className="font-semibold text-foreground mb-2">Healing bij volwassenen</h4>
              <p className="text-muted-foreground leading-relaxed">
                Volwassenen kan ik helpen bij klachten als onrust of spanning in het lichaam, wat de oorzaak daar ook van is. Ook bij lichamelijke pijnklachten kan er middels healing een vermindering van pijn plaatsvinden.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Reading</h3>
              <p className="text-muted-foreground leading-relaxed">
                Readen is een manier van bewust &quot;intuïtief&quot; waarnemen van informatie die zich bevindt in je energiesysteem. Een reading geeft een beeld van wat er op dit moment in essentie in je leven afspeelt en waarom. Ik ga samen met u afstemmen op &apos;het probleem&apos; wat u op dit moment bezighoudt. Dit kan een fysiek klacht zijn of een gevoel dat steeds terugkomt of iets waar u zich zorgen om maakt en waar u graag een antwoord op wil.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary text-center">Paranormaliteit bij kinderen moet je altijd serieus nemen</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wuif het niet weg, dat kan schade berokkenen bij het kind. Er is niet veel aan de hand met een paranormaal kind. Ga er mee om als een gegeven, dat is het voor het kind ook; hij of zij weet niet beter.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kinderen die echt paranormaal zijn hebben er geen last van in de zin van dat ze &apos;s nachts niet kunnen slapen en het uitschreeuwen van ellende. Die vinden het eerder vermoeiend, omdat ze de hele dag door extra waarnemen en energie oppikken en dus constant bezig zijn met hun omgeving.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nog een tip tot slot: als je kind iets concreets zegt, hoeft het niet gelijk paranormaliteit te zijn. Het kan ook toeval zijn of een instinct; een waarschuwing.
            </p>
            <p className="text-right text-muted-foreground italic">-Liesbeth van Dijk-</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default SpiritueleKindercoach;
