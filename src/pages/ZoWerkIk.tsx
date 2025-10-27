import { Card, CardContent } from "@/components/ui/card";
import zoWerkIkFoto from "@/assets/zo-werk-ik-foto.jpg";

const ZoWerkIk = () => {
  return (
    <main className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Zo Werk Ik
        </h1>

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

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
            Wat kan ik betekenen voor jou, je kind of je gezin?
          </h2>
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

        <Card className="shadow-[var(--shadow-card)] border-border/50 bg-card mb-6">
          <CardContent className="pt-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Op welke manier pak ik dat aan?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Ervaring en vertrouwen op mijn gevoel. Met mijn zuivere intentie weet ik, wat wel en niet te benoemen bij een kind. Dit gaat vanzelf. Kinderen voelen zich vaak erg snel op mijn gemak als ze eenmaal bij me zijn. En ik denk dat dit komt omdat het kind ZICHZELF mag zijn bij mij. Er is geen goed of fout.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Het gaat erom dat we samen ontdekken waar uw kind zich fijn bij voelt en zodoende weer vanuit haar/zijn eigen mooie KRACHT verder gaat in het leven.
            </p>
          </CardContent>
        </Card>

        {/* Holistische Aanpak */}
        <section className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
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
        </section>

        {/* Systeemtherapie */}
        <section className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Systeemtherapie
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
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
        </section>
      </div>
    </main>
  );
};

export default ZoWerkIk;
