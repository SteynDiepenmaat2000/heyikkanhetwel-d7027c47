import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Ervaringen = () => {
  const testimonials = [
    {
      title: "Bevestiging van zijn gave op niveau",
      subtitle: "Jongen 8 jaar",
      text: "Ik zocht begeleiding voor mijn zoon. Iemand met eenzelfde ervaring die hem kon/kan helpen om zijn paranormale begaafdheid/intuïtieve vermogens een plekje te geven. Dat hij zich begrepen voelde en niet raar maar bijzonder. Het als iets positiefs, als een gave ervaart en niet als last. Belangrijk voor hem vond ik dat hij ermee om kan gaan en het \"uit\" kan zetten op de momenten als het hem even niet uitkomt. \nDit heb jij hem mee kunnen geven Patricia. Daarnaast heb jij hem een luisterend oor, advies, begrip, humor en een bevestiging van zijn gave op zijn niveau mee kunnen geven. De affiniteit die jij met jouw 30 jaar ervaring in het (basis)onderwijs met kinderen hebt is hierin ook belangrijk."
    },
    {
      title: "Lief, warm en betrokken",
      subtitle: "Jongen 9 jaar",
      text: "Onze zoon kwam bij Patricia voor de weerbaarheidstraining. Hij huilde vaak en was vaak niet tegen anderen opgewassen. \nPatricia leerde hem sterk te worden en het was voor hem altijd een feest om bij haar te zijn. Nu lacht hij weer en laat zich niet snel meer van zijn stuk brengen. Hij staat een stuk steviger en vrolijker in zijn schoenen. \nZo'n lieve, warme en betrokken vrouw, die Patricia. We zijn allemaal enorm blij dat we het hebben gedaan!"
    },
    {
      title: "Ervaar en doorleef het",
      subtitle: "Vrouw 34 jaar",
      text: "Ruim een jaar geleden zijn mijn man en ik gestart met een medisch traject rondom fertiliteit. Gedurende het proces kwam ik er steeds meer achter dat het zowel fysiek als mentaal veel van je vraagt. Ik ben iemand die emoties niet snel uit en daarom ben ik op zoek gegaan naar iemand die mij hierbij zou kunnen ondersteunen en, waar mogelijk, begeleiden in het proces. \n\nNa een korte zoektocht via, via ben ik bij Patricia Kroeze terecht gekomen. De eerste kennismaking voelde al gelijk goed. Een warm welkom in haar praktijkruimte deed mij goed en het gaf mij tevens een vertrouwd gevoel. We hebben samen gekozen voor een energetische behandeling met eventueel een reading als ze dit voelt. \n\nIn de weken erna heeft ze mij meerdere keren een energetische behandeling gegeven. Tijdens een ontspannen sessie met rustgevende muziek maakt ze een verbinding met mijn ziel en voelt ze waar ze haar handen moet plaatsen of bewegen. Ze gaat op zoek naar mijn diepste gevoelens en probeert mij daarin mee te nemen. Ze zorgt ervoor dat mijn gevoelens niet weggestopt worden, maar dat ze er mogen zijn (en geuit worden). Ze laat de energie weer in mijn lichaam stromen en heft (emotionele) blokkades op. Het contact dat zij heeft met het bovennatuurlijke is voor mij ongrijpbaar en niet te omschrijven. Zo nuchter als ik de eerste keer was, zo bijzonder en verbazingwekkend vind ik het nu elke keer. Deze energetische behandeling geeft mij persoonlijk rust in het hoofd en ontspanning in mijn lichaam. Het raakt mijn diepste gevoelens en dat lucht op. Het geeft mij weer nieuwe energie om de komende tijd verder te gaan. \n\nIk zou deze behandeling dan ook aan iedereen aan willen raden om welke persoonlijke reden dan ook. Ervaar en doorleef het. Het helpt je echt verder."
    },
    {
      title: "Bijzonder maar nuchter",
      subtitle: "Man 47 jaar",
      text: "Bij de eerste ontmoeting was me al duidelijk dat ik bij Patricia mezelf niet mooier voor hoef te doen dan ik ben. Zonder enig ongemak kwamen mijn grootste levensvragen en twijfels boven tafel. Het mooie is dat Patricia deze bijzondere vorm van contact combineert met nuchterheid, dat maakt haar heel aangenaam en uitnodigend. Ze hielp me te 'voelen' en er te 'zijn', iets wat me normaal gesproken enorm veel moeite kost omdat vele rationele gedachten dit gevoel verdrukken. Hier heb ik in het dagelijks leven last van; het maakt me onzeker en ik respecteer mijn grenzen onvoldoende. Dankzij Patricia lukt het me beter om te relativeren en om te ervaren wat belangrijk is in mijn leven. Zonder oordeel daagt ze me uit om mijn leven in te vullen zoals bij mij past."
    },
    {
      title: "Een hele fijne ervaring",
      subtitle: "Vrouw 48 jaar",
      text: "Voor het eerst in mijn leven heb ik een energetische behandeling gehad. Ik wist niet wat ik kon verwachten en ben er heel open in gegaan. Onder het genot van een heerlijk muziekje lag ik erg ontspannen, onder een lekkere warme deken, op de behandeltafel. Patricia is een fijne, rustige therapeut die oprecht in je geïnteresseerd is en waar je je onmiddellijk op je gemak voelt. Hierdoor kon de energie ook goed, vrij stromen. Ze heeft dingen benoemt, die zij voelt en ziet, die voor mij herkenbaar zijn waar ik op dit moment mee bezig ben en goed kan toepassen in mijn dagelijkse leven. Al met al was het een hele fijne ervaring, zeker voor herhaling vatbaar."
    },
    {
      title: "Een bijzondere ervaring…",
      subtitle: "Vrouw 53 jaar",
      text: "Een reading bij Patricia is voor mij altijd een bijzondere ervaring. Ik geef me volledig over aan het moment en ga er zonder verwachtingen in. Het heeft voor mij ook geen zin om iets te verwachten, et verloopt toch anders dan ik zou kunnen bedenken. Patricia heeft beslist een gave om op energetisch niveau contact te maken en ze kan werken met de informatie die ze daaruit krijgt. Daarnaast is het een heerlijk moment van ontspanning. Het is vanuit die ontspanning dat ik intuïtief de antwoorden vind op de vragen die ik nog niet stelde (Patricia stelt deze) en die me verder op weg helpen.\nAls Patricia met mij aan het werk is geweest ben ik altijd een inzicht rijker, of is er een idee dat spontaan ontstaat. Het is nooit voorspelbaar en juist dat maakt het voor mij zo waardevol. Het bevestigt voor mij dat er op een diepere laag heling mogelijk is, die veel effect kan hebben op mijn dagelijks handelen en mijn persoonlijke relaties."
    },
    {
      title: "Ik voelde me down, voel me nu beter",
      subtitle: "Vrouw 28 jaar",
      text: "Ik ben al enkele maanden down en had tijdens mijn menstruatie erg veel buikpijn. Toen ik bij Patricia thuis was heeft zij aangeboden om mij te behandelen. Ik hou niet heel erg van dat spirituele en ik heb dit bij haar aangegeven. Tijdens de sessie heb ik ook niks van het spirituele gemerkt. Ze heeft mij op het einde gezegd wat ze had gevoeld en wat ze daarmee heeft gedaan, deze manier vond ik erg fijn. Ik ben minder down en ik had daarna ook minder pijn, ook heb ik wat kunnen doen met haar tips. Ik ben haar erg dankbaar."
    },
    {
      title: "Moeder met gevoelige dochters",
      subtitle: "Vrouw 45 jaar",
      text: "Mijn dochter vond het niet prettig om 's avonds alleen naar boven te gaan, deze angst werd zo erg dat ze echt niet meer alleen naar boven wilde. Ze had heel sterk het gevoel dat ze daar aanwezigheid van iets of iemand voelde. Haar zussen bevestigden haar gevoel direct! Dat was fijn voor haar maar daarmee was de angst niet opgelost. \nEn nu? \nIk ben geen type die internet afstruint op zoek naar hulp voor dit soort zaken. Ik wilde goede (zuivere) hulp voor mijn dochter, liefst in Oldenzaal of omgeving. Maar hoe? Het zijn geen onderwerpen die ik op een verjaardag in de groep gooi. Op een ochtend las ik het stukje over Patricia, spiritueel kindercoach. Dit kan geen toeval zijn! Dit is het antwoord op mijn vraag!\nHet artikel voelde goed, de website bevestigde mijn gevoel maar ik wilde toch even telefonisch contact. Het telefoongesprek was direct goed, het laatste restje twijfel en weerstand was verdwenen en heb gelijk een afspraak gemaakt voor mijn dochter.\nHet was fijn dat Patricia direct aangaf dat het kind centraal staat en zelf leidend is tijdens de behandeling.\nMijn dochter was blij dat ik hulp had gevonden en een afspraak had gemaakt maar vond het superspannend om naar Patricia te gaan. Voor haar zussen was het een dubbel gevoel. Na de behandeling/sessie bij Patricia waren ze van de ene kant blij dat ze het verhaal van haar konden aanhoren en van de andere kant wilden ze het ook wel zelf ervaren. Ik heb er twee afspraken bij gemaakt zodat ze na de behandelingen direct de ervaringen samen konden delen.\nAlle drie vonden ze het toch wel een beetje eng en stonden, een voor een, gespannen bij Patricia voor de deur. Eenmaal binnenviel direct de spanning van ze af en konden ze rustig hun verhaal doen. Ze hebben het alle drie anders ervaren, ze voelen alle drie hele andere energieën en er waren geen overeenkomsten in de behandeling. Wel waren de sessies zo puur en voor hun zo fijn dat het \"iets\" nu toch \"vorm\" heeft gekregen en ze weten dat hun gevoel klopt. Patricia voelt/ziet exact wat zij voelen. De bevestiging in erkenning en herkenning heeft thuis voor veel rust gezorgd en voor heel erg leuke gesprekken en grappige momenten die we niet tijdens een verjaardag in de groep zullen gooien…\nPatricia bedankt! Veel liefs van een blije moeder."
    },
    {
      title: "Spannend maar dat is nergens voor nodig",
      subtitle: "Meisjes 14 jaar",
      text: "Mijn zusje voelde zich niet meer prettig bij ons boven. Ze had het gevoel dat er 'mensen' waren die haar aankeken, ik had dat ook.  Mijn moeder zag even later een stukje over Patricia in de krant en besloot haar te bellen, misschien kon zij ons helpen. Mijn zusje is eerst geweest en zei dat het haar echt had geholpen. Ik ben ook gegaan maar vond het in het begin echt heel spannend maar dat was nergens voor nodig. Patricia is heel aardig en ze voelt met je mee. Het heeft mij echt geholpen, ik heb zelfs nog meer duidelijkheid gekregen dan ik zelf had gedacht."
    },
    {
      title: "Niet durven te voelen",
      subtitle: "Vrouw 26 jaar",
      text: "Bij de eerste ontmoeting was me al duidelijk dat ik bij Patricia mezelf niet mooier voor hoef te doen dan ik ben. Zonder enig ongemak kwamen mijn grootste levensvragen en twijfels boven tafel. Het mooie is dat Patricia deze bijzondere vorm van contact combineert met nuchterheid, dat maakt haar heel aangenaam en uitnodigend. Ze hielp me te 'voelen' en er te 'zijn', iets wat me normaal gesproken enorm veel moeite kost omdat vele rationele gedachten dit gevoel verdrukken. Hier heb ik in het dagelijks leven last van; het maakt me onzeker en ik respecteer mijn grenzen onvoldoende. Dankzij Patricia lukt het me beter om te relativeren en om te ervaren wat belangrijk is in mijn leven. Zonder oordeel daagt ze me uit om mijn leven in te vullen zoals bij mij past."
    },
    {
      title: "Geen ervaring met healing, geen 'klachten'",
      subtitle: "Vrouw 55 jaar",
      text: "Voor het eerst in mijn leven heb ik een energetische behandeling gehad. Ik wist niet wat ik kon verwachten en ben er heel open in gegaan.\nOnder het genot van een heerlijk muziekje lag ik erg ontspannen, onder een lekkere warme deken, op de behandeltafel. Patricia is een fijne, rustige therapeut die oprecht in je geïnteresseerd is en waar je je onmiddellijk op je gemak voelt. Hierdoor kon de energie ook goed, vrij stromen. Ze heeft dingen benoemt, die zij voelt en ziet, die voor mij herkenbaar zijn waar ik op dit moment mee bezig ben en goed kan toepassen in mijn dagelijkse leven.\nAl met al was het een hele fijne ervaring, zeker voor herhaling vatbaar."
    }
  ];

  return (
    <main className="min-h-screen pt-20 pb-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 text-foreground">
          Ervaringen
        </h1>
        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Hier delen cliënten hun persoonlijke verhalen en ervaringen. Alle verhalen zijn geanonimiseerd en met toestemming gedeeld.
        </p>

        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-[var(--shadow-card)] border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold text-primary mb-1">
                      {testimonial.title}
                    </h2>
                    <p className="text-sm text-muted-foreground italic mb-3">
                      {testimonial.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line pl-9">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Ervaringen;
