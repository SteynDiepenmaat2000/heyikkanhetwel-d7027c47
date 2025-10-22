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
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              Patricia Kroeze
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Spiritueel (Kinder)coach
            </h2>
            <div className="mb-8">
              <img 
                src={patriciaFoto} 
                alt="Patricia Kroeze" 
                className="rounded-lg shadow-[var(--shadow-card)] max-w-md"
              />
            </div>
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="text-lg px-8 py-6">
                Neem Contact Op
              </Button>
            </Link>
          </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                Ik ben Patricia Kroeze en begeleid:
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">1.</span>
                  <p>Kinderen en (jong)volwassenen die zich aanpassen aan anderen en zichzelf daardoor verliezen. Ik laat ze weer trouw worden aan wie ze werkelijk zijn!</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">2.</span>
                  <p>Ouders die hun, vaak hooggevoelige kind, zien worstelen. Ik help ze bij het (terug)vinden van rust.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
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
                  <span>minder bang te zijn voor: nieuwe situaties, een raar gevoel als je een ruimte binnen komt, &quot;enge&quot; beelden die je vaak (in je hoofd) ziet (meestal vlak voordat je gaat slapen), dingen zien die er niet zijn, mensen die je ziet staan in je slaapkamer of misschien ook wel als je een ander huis binnen komt</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Voor Ouders Section */}
      <section className="py-8 px-4 bg-accent/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary">
            Zo Werk Ik
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Mijn doel is kinderen (en volwassenen) te helpen door &quot;echt&quot; te luisteren en in te voelen. Op aards, spiritueel en energetisch niveau. Kinderen vooral te laten voelen en ervaren zodat ze (intuïtief) weten en leren wat wel en niet bij hun past.
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
                    <p className="text-lg text-muted-foreground">Als je kind niet goed kan slapen, buikpijn heeft en/of evt. dingen/mensen ziet in zijn/haar slaapkamer → zich weer prettig laten voelen zonder &quot;buik&quot;pijn en in slaap vallen in je eigen bed. Het bed moet een veilig plek zijn en rust geven.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-[var(--shadow-card)] border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <span className="text-2xl font-bold text-primary">3.</span>
                    <p className="text-lg text-muted-foreground">Als je kind, jij of iemand van je gezin last heeft van een minder fijn gevoel of energie die nog in een ruimte hangt of bepaalde personen waar hij/zij regelmatig mee te maken heeft → daar kan ik contact mee maken en zorgen dat dit verdwijnt of leer je om jezelf te beschermen. Dit geeft rust en voelt fijn.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-[var(--shadow-card)] border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <span className="text-2xl font-bold text-primary">4.</span>
                    <p className="text-lg text-muted-foreground">Je kind of jij een lichamelijke klacht, spanning/onrust heeft die maar niet over lijkt te gaan. → pijn of spanning/onrust vermindert of verdwijnt na healing en/of reading of via spiegelinzicht middels de methode Kindertolk.</p>
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
              <p className="text-lg text-muted-foreground leading-relaxed">
                Met mijn zuivere intentie weet ik, wat wel en niet te benoemen bij een kind. Dit gaat vanzelf. Kinderen voelen zich vaak erg snel op mijn gemak als ze eenmaal bij me zijn. En ik denk dat dit komt omdat het kind ZICHZELF mag zijn bij mij. Er is geen goed of fout. Het gaat erom dat we samen ontdekken waar uw kind zich fijn bij voelt en zodoende weer vanuit haar/zijn eigen mooie KRACHT verder gaat in het leven.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-center text-primary">
            Diensten
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-6">
            Als je over bovenstaande graag uitgebreide informatie wilt, klik dan op onderstaande foto&apos;s!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/spiritueel-kindercoach" className="group">
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

            <Link to="/kindertolk" className="group">
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

            <Link to="/weerbaarheid" className="group">
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
