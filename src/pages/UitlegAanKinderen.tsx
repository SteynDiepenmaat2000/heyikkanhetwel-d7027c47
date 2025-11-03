import { Card, CardContent } from "@/components/ui/card";

const UitlegAanKinderen = () => {
  return (
    <main className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Uitleg aan kinderen
        </h1>

        <Card className="mb-6 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-6">
            <h2 className="text-3xl font-bold mb-4 text-primary">Wat is weerbaarheid?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Je leert als een <span className="font-semibold text-foreground">Rots</span>: sterk te staan, op te komen voor jezelf, niet te reageren als het niet nodig is en wel te reageren als het nodig is vanuit je eigen natuurlijke kracht. Ik leer je om deze kracht weer te voelen en daarop te vertrouwen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je leert als <span className="font-semibold text-foreground">Water</span> mee te bewegen. Water is sterk en slim. Water gaat het gevecht niet aan, je beschermt jezelf door af te weren. Water stroomt mee en zoekt nieuwe, eigen weggetjes zonder de ander uit de weg te gaan en zonder je eigen grens te verliezen. Je bent geen watje!
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Opkomen voor jezelf zonder je eigen grens te verliezen. Dit kan:
            </h2>
            <div className="space-y-3 text-lg text-muted-foreground">
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-primary">1.</span>
                <p>met je lichaam m.b.v. afweren, allerlei sterke houdingen, overnames etc. of</p>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-primary">2.</span>
                <p>verbaal. Verbaal betekent dat jij met woorden krachtig zegt wat je wilt of wat jij ervan vindt.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Rollenspelen</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dit oefenen we door situaties, die jezelf hebt meegemaakt, na te spelen. Dit noemen we rollenspelen. Hier zijn allerlei oefeningen voor om je dit te laten voelen en ervaren. Je zult merken dat het je meer zelfvertrouwen geeft.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Jezelf uiten</h3>
              <p className="text-muted-foreground leading-relaxed">
                Je leert je gemakkelijker te uiten d.m.v. allerlei leuke spelletjes. Dit doen we stap(je) voor stap(je) in jouw tempo. Jij kiest het tempo en de grootte van de stap.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6 shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Wat doen we als je soms dingen voelt of ziet, die iemand anders (ouders of vrienden) niet ziet of voelt?
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Ik kan dit ook voelen en/of zien en kan je daarbij helpen. Voorbeeld: Een meisje wat ik al geholpen heb zei tegen haar moeder: "Ik wil weer naar Patricia, want Patricia begrijpt mij". Dat vind ik het mooiste compliment wat ik kan krijgen. Ik weet zelf hoe belangrijk het is als je geloofd, en begrepen wordt door iemand.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Je leert te voelen welke gevoelens en/of energie van jou is en welke van de ander. Wat je daarmee kan doen zodat je er geen last meer van hebt.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Als jij dat wilt gaan we samen contact maken met wie of wat je ziet zodat je leert en weet wat je wel kan doen.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Natuurlijk zal ik dit eerst met u als ouder(s)/verzorger(s) en met uw kind overleggen wat fijn en goed voelt. Ik kan ook helpen zonder dat jullie erbij zijn. Dit noemen we ook wel een afstemming op afstand.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Als je vaak (buik)pijn hebt en niet goed weet waar dat vandaan komt, kan ik of kunnen we samen voelen waar dat vandaan komt en waar het mee te maken heeft.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Als je dat liever niet wilt kan ik je ook helpen door mijn handen op de plek te leggen en de (buik)pijn af laten nemen of helemaal doen stoppen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Als je je overleden opa, oma, tante etc. erg mist en/of nog iets tegen hen wilt zeggen, kan ik samen met jou contact met ze maken. Ik gebruik dan vaak (lego)poppetjes die voor jou en je overleden dierbare staan.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Afstemming en energie</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Al deze dingen hebben te maken dat ik afstem op jouw energie. Via mij stroomt de lichtere energie weer naar jou. Dit kun je voelen als warmte of tintelingen. We noemen dit ook wel healing. Zie verder spiritueel kindercoach.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ook kan jouw mama of papa je helpen door een kindertolksessie bij mij te volgen? Ze helpen jou daarbij en helpen dan ook zichzelf. Hoe mooi zou dat zijn!!
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Als jij nl. ergens mee zit of moeilijk vindt en mama en/of papa vinden dat vervelend voor jou, kan ik door mama en/of papa vragen te stellen erachter komen, hoe dat nou precies komt.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lijkt het je goed om een keer met me te komen praten dan kan dat. Dan gaan we samen praten over wat jij lastig of vervelend vindt, verdrietig van wordt en graag anders wil. Dit noemen we een intakegesprek. Dan kun je samen met je ouders beslissen of het goed voelt om bij mij te komen. Je kunt me bellen of mailen of online een afspraak maken.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default UitlegAanKinderen;
