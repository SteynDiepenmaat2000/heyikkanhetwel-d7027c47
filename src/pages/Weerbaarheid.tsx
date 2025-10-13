import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Shield, ArrowRight } from "lucide-react";
import weerbaarheidFoto1 from "@/assets/weerbaarheid-foto-1.jpg";
import weerbaarheidFoto2 from "@/assets/weerbaarheid-foto-2.jpg";

const Weerbaarheid = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Kindercoach Weerbaarheid
        </h1>

        <Card className="mb-8 shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
          <CardContent className="pt-8">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold text-primary">Voor</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-center">
              <p className="text-muted-foreground">
                Kinderen/jongeren individueel<br />
                <span className="font-semibold">8-18 jaar</span>
              </p>
              <p className="text-muted-foreground">
                In groepen op school<br />
                <span className="font-semibold">4-14 jaar</span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Kindercoach Weerbaarheid</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Het allerbelangrijkste vind ik dat je het bij mij niet 'goed' of 'fout' kunt doen. Je gaat oefenen en ervaren hoe krachtig, slim en sterk je eigenlijk bent. Met allerlei leuke en speelse oefeningen zet ik jou terug in je (eigen) natuurlijke kracht.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Je leert dat er andere keuzes mogelijk zijn en je dus ook andere keuzes kunt gaan maken. En uiteindelijk valt het achteraf altijd mee!
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-primary">Signalen</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Weinig zelfbeheersing, snel of fel reageren op een ander (fysiek of met woorden)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>(Faal)angst of buikpijn (thuis, bij een ander of op school)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Bang zijn om er niet bij te horen (vaak geen nee durven te zeggen/geen grenzen durven te stellen of niet hun eigen mening te geven)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Bang zijn om fouten te maken en/of het niet goed te doen</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-primary">Doel</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Naar jezelf durven te luisteren</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Voor jezelf op durven te komen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Grenzen durven aangeven</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Niet altijd gelijk op een prikkel reageren</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Het fijn hebben in je eigen lijf!</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 shadow-[var(--shadow-card)] border-border/50 bg-gradient-to-br from-accent/30 to-accent/10">
          <CardContent className="pt-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary text-center">Wat Ga Je Leren?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">Niet voor jezelf op durven te komen:</span> durven te doen of zeggen wat je eigenlijk wilt, rustiger te leren reageren, hoe je dat kan doen als je bijvoorbeeld heel boos bent etc.
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">Je niet meer bang hoeft te zijn om:</span> iets fout te doen of erbij te willen horen
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">Minder bang te zijn voor:</span> nieuwe situaties, een raar gevoel als je een ruimte binnen komt, "enge" beelden die je vaak (in je hoofd) ziet (meestal vlak voordat je gaat slapen), dingen zien die er niet zijn, mensen die je ziet staan in je slaapkamer of misschien ook wel als je een ander huis binnen komt
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-[var(--shadow-card)] border-border/50">
          <CardContent className="pt-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Voor Ouders/Verzorgers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Als jij je zorgen maakt om het gedrag van jouw kind of als je je ergert aan het gedrag kun je via de methode (Kindertolk/Presentchild) naar je eigen proces kijken.
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-2xl font-semibold text-primary mb-8">
            HEY……… en OOK JIJ KUNT HET samen met een beetje hulp van mij.
          </p>
          <Button asChild size="lg" variant="gradient">
            <Link to="/contact">
              Begin Je Reis Naar Weerbaarheid <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Weerbaarheid;
