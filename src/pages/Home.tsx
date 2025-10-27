import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import patriciaFoto from "@/assets/patricia-foto.jpg";
import servicesSpiritual from "@/assets/services-spiritual-real.jpg";
import servicesKindertolk from "@/assets/services-kindertolk-real.jpg";
import servicesWeerbaarheid from "@/assets/services-weerbaarheid-real.jpg";
import zoWerkIkFoto from "@/assets/zo-werk-ik-foto.jpg";

const Home = () => {
  // Scroll to top when clicking service cards
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-12 px-4 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Patricia Kroeze
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Spiritueel (Kinder)coach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Het toepassen van mijn invoelende gave op kinderen en volwassenen zorgt voor het openen van nieuwe deuren naar je ware zelf!
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-8 px-4 bg-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <img 
                src={patriciaFoto} 
                alt="Patricia Kroeze" 
                className="rounded-lg shadow-[var(--shadow-card)] w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                Ik ben Patricia Kroeze en begeleid:
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">1.</span>
                  <p>Kinderen en (jong)volwassenen die zich aanpassen aan anderen en zichzelf daardoor verliezen. Ik laat ze weer trouw worden aan wie ze werkelijk zijn!</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">2.</span>
                  <p>Ouders die hun, vaak hoog gevoelige kind (HSP= High Sensitive Person), zien worstelen. Ik help ze bij het (terug)vinden van rust.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">3.</span>
                  <p>Kinderen en heb de gave in- en mee te voelen wat bij hun past. Ik werk met humor en vanuit rust naar hun eigen kracht.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Situaties Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-primary">
            De volgende situaties vallen o.a. hieronder:
          </h2>
          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardContent className="pt-6">
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>niet voor jezelf op durven te komen: durven te doen of zeggen wat je eigenlijk wilt, rustiger te leren reageren, hoe je dat kan doen als je bijvoorbeeld heel boos bent etc.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>je niet meer bang hoeft te zijn om: iets fout te doen of erbij te willen horen</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>minder bang te zijn voor: nieuwe situaties, een raar gevoel als je een ruimte binnen komt, "enge" beelden die je vaak ziet (kan je ook in je hoofd zien) en vaak voordat je gaat slapen, dingen zien die er niet zijn, mensen die je ziet staan in je slaapkamer of misschien ook wel als je een ander huis binnen komt</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Voor Ouders Section */}
      <section className="py-8 px-4 bg-accent/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-primary">
            Voor jullie als ouder(s)/verzorger(s):
          </h2>
          <Card className="shadow-[var(--shadow-card)] border-border/50 bg-card">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Als jij je zorgen maakt om het gedrag van jouw kind of als je je ergert aan het gedrag kun je via de methode (Kindertolk/Presentchild) naar je eigen proces kijken.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mijn Doel Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
            Mijn doel
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-4">
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Ik wil jou als kind en indirect jullie als ouder(s)/verzorger(s) graag helpen, zodat jij weer een fijn gevoel krijgt. Je voelt/leert dat je niet meer bang, onzeker etc. hoeft te zijn of buikpijn hoeft te hebben. We gaan er samen achter komen waar jouw gevoel of probleem vandaan komt. Ik leer je allerlei manieren om hiermee om te gaan en jij bepaalt wat je uiteindelijk wel en niet wilt.
            </p>
            <p className="text-2xl font-bold text-primary">
              HEY……… en OOK JIJ KUNT HET samen met een beetje hulp van mij.
            </p>
          </div>
        </div>
      </section>

      {/* Zo Werk Ik Section */}
      <section className="py-8 px-4 bg-accent/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
            Zo Werk Ik
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Mijn doel is kinderen en volwassenen te helpen door "echt" te luisteren en in te voelen. Op aards, spiritueel en energetisch niveau. Kinderen vooral te laten voelen en ervaren zodat ze (intuïtief) weten en leren wat wel en niet bij hun past.
              </p>
            </div>
            <div>
              <img 
                src={zoWerkIkFoto} 
                alt="Zo werk ik" 
                className="rounded-lg shadow-[var(--shadow-card)] w-full"
              />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
              Wat kan ik betekenen voor jou, je kind of je gezin?
            </h3>
            <div className="grid gap-4">
              <Card className="shadow-[var(--shadow-card)] border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <span className="text-2xl font-bold text-primary">1.</span>
                    <p className="text-lg text-muted-foreground">Als je kind niet zichzelf is, weer in zijn/haar KRACHT zetten. Dat kan zich uiten in onzekerheid, weinig zelfbeheersing (boosheid, thuis afreageren, slaan, ergens tegenaan schoppen), faalangst, bang om het fout te doen.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-[var(--shadow-card)] border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <span className="text-2xl font-bold text-primary">2.</span>
                    <p className="text-lg text-muted-foreground">Als je kind niet goed kan slapen, buikpijn heeft en/of evt. dingen/mensen ziet in zijn/haar slaapkamer → zich weer prettig laten voelen zonder "buik"pijn en in slaap vallen in je eigen bed. Het bed moet een veilig plek zijn en rust geven.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-[var(--shadow-card)] border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <span className="text-2xl font-bold text-primary">3.</span>
                    <p className="text-lg text-muted-foreground">Als je kind, jij of iemand van je gezin last heeft van een minder fijn gevoel of energie die nog in een ruimte hangt of bepaalde personen waar hij/zij regelmatig mee te maken heeft → daar kan ik contact mee maken en zorgen dat dit verdwijnt of leer je om jezelf te beschermen. Dit geeft rust.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-[var(--shadow-card)] border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <span className="text-2xl font-bold text-primary">4.</span>
                    <p className="text-lg text-muted-foreground">Je kind of jij een lichamelijke klacht, spanning/onrust heeft die maar niet over lijkt te gaan. → pijn of spanning/onrust vermindert of verdwijnt na healing en/of reading (link) of via spiegelinzicht middels de methode Kindertolk (link)</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-[var(--shadow-card)] border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <span className="text-2xl font-bold text-primary">5.</span>
                    <p className="text-lg text-muted-foreground">Als je kind of jij een overleden opa, oma, tante etc. erg mist en/of nog iets tegen hen wilt zeggen of vragen hebt kan ik samen contact met ze maken.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="shadow-[var(--shadow-card)] border-border/50 bg-card">
            <CardContent className="pt-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                Op welke manier pak ik dat aan?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Ervaring en vertrouwen op mijn gevoel. Met mijn zuivere intentie weet ik, wat wel en niet te benoemen bij een kind. Dit gaat vanzelf. Kinderen voelen zich vaak erg snel op mijn gemak als ze eenmaal bij me zijn. En ik denk dat dit komt omdat het kind ZICHZELF mag zijn bij mij. Er is geen goed of fout.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Het gaat erom dat we samen ontdekken waar uw kind zich fijn bij voelt en zodoende weer vanuit haar/zijn eigen mooie KRACHT verder gaat in het leven.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Holistische Aanpak */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
            Holistische aanpak
          </h2>
          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Ieder kind is prachtig en uniek en hebben verschillende lagen: fysiek, emotioneel, mentaal en energetisch niveau. Als alle lagen in balans zijn, kan het kind stralen. Net als de lagen van een regenboog.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Voorbeeld:</span> als een kind buikpijn heeft (fysieke laag), reageert het misschien verdrietig of boos als het iets gevraagd wordt (emotionele laag). De gedachte "Ik kan het niet" kan spelen t.a.v. schooldruk (piekeren, mentale laag) en het kind ervaart daardoor een verminderde energie (energetische laag). We kijken dus naar de complete regenboog.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Systeemtherapie */}
      <section className="py-8 px-4 bg-accent/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
            Systeemtherapie
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="shadow-[var(--shadow-card)] border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Met poppetjes bij kinderen</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Poppetjessysteemtherapie is een manier van werken in de systeemtherapie waarbij ik poppetjes gebruik om de 'probleemsituatie' visueel te maken vanuit een veiliger, meer afstandelijk perspectief. Het poppetje voelt voor het kind niet direct verbonden waardoor het kind vrijer praat over zichzelf in die situatie. De methode is nuttig om emoties te doorvoelen en ook jonge kinderen inzicht te geven.
                </p>
                <h4 className="font-semibold text-foreground mb-2">Hoe het werkt</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><span className="font-semibold text-foreground">Visualisatie:</span> Het kind en ik als begeleider zetten poppetjes neer om een gezin, relaties of gebeurtenissen uit te beelden.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><span className="font-semibold text-foreground">Symbolische taal:</span> De poppetjes vertegenwoordigen familieleden, emoties of systeemdynamieken. De posities, afstanden en interacties tussen de poppetjes worden vervolgens geïnterpreteerd.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><span className="font-semibold text-foreground">Veiligheid en afstand:</span> De symbolische aard van de poppetjes zorgt voor een veilige afstand, waardoor het makkelijker wordt om over pijnlijke of complexe zaken te praten en emoties te doorleven.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><span className="font-semibold text-foreground">Inzicht en perspectief:</span> Door van een afstand naar de opstelling te kijken, kan men nieuwe inzichten krijgen in het systeem en verstoorde patronen herkennen.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--shadow-card)] border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Met matjes bij volwassenen</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Familieopstellingen gebruik ik als we in een gesprek of healing niet bij de essentie komen en/of als er 'een probleem' speelt in je relatie, gezin of familie. Onbewuste patronen en verstrikkingen binnen een familiesysteem worden zichtbaar in het veld. Verschillende matjes staan voor de personen die jij in wil brengen bij dit probleem. Ik neem de positie in van deze personen en ervaar dan gevoelens en dynamieken die bij deze personen horen, waardoor verborgen verbanden en emoties aan het licht komen. Dit kan leiden tot nieuw inzicht, heling en verandering.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-primary">
            Diensten
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-6">
            Als je over bovenstaande graag uitgebreide informatie wilt, klik dan op onderstaande foto's!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/spiritueel-kindercoach" onClick={scrollToTop} className="group">
              <Card className="overflow-hidden shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={servicesSpiritual} 
                    alt="Spiritueel Kindercoach" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold text-center text-primary group-hover:text-accent transition-colors">
                    Spiritueel (Kinder)coach
                  </h3>
                </CardContent>
              </Card>
            </Link>

            <Link to="/kindertolk" onClick={scrollToTop} className="group">
              <Card className="overflow-hidden shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={servicesKindertolk} 
                    alt="Kindertolk" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold text-center text-primary group-hover:text-accent transition-colors">
                    Kindertolk
                  </h3>
                </CardContent>
              </Card>
            </Link>

            <Link to="/weerbaarheid" onClick={scrollToTop} className="group">
              <Card className="overflow-hidden shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={servicesWeerbaarheid} 
                    alt="Weerbaarheid" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold text-center text-primary group-hover:text-accent transition-colors">
                    Weerbaarheid
                  </h3>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
