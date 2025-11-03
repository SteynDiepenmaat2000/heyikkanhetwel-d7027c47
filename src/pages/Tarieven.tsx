import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Tarieven = () => {
  return (
    <main className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="max-w-4xl mx-auto text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Tarieven</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Investeer in jezelf of je kind voor een mooiere toekomst
          </p>
        </section>

        {/* Tarieven Cards */}
        <section className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Spiritueel Kindercoach */}
            <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Spiritueel (Kinder)coach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">€ 80,-</p>
                  <p className="text-muted-foreground">per sessie (60-90 min)</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Persoonlijke coaching</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Energetische healing</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Reading & inzichten</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Kindertolk */}
            <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Kindertolk</CardTitle>
                <p className="text-sm text-muted-foreground">Voor ouders/verzorgers/leerkrachten</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">€ 80,-</p>
                  <p className="text-muted-foreground">per uur (sessie 60-90 min.)</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Spiegelinzichten</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Praktische tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Weerbaarheid */}
            <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Weerbaarheid</CardTitle>
                <p className="text-sm text-muted-foreground">Voor kinderen 4-16 jaar</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">€ 60,-</p>
                  <p className="text-muted-foreground">per uur (sessie 60 min)</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Zelfvertrouwen opbouwen</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Gedrag is communicatie</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Grenzen stellen</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Belang preventief</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sociale Vaardigheden op school */}
            <Card className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Sociale vaardigheden op school</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">€ 75,-</p>
                  <p className="text-muted-foreground">per uur (idem voorbereidingsuren)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Extra Info */}
        <section className="max-w-4xl mx-auto mt-6">
          <Card className="shadow-[var(--shadow-card)] border-border/50 bg-accent/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">Belangrijke informatie</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Eerste kennismaking is gratis (15-20 minuten)</span>
                </li>
                <li className="flex gap-2">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Betaling kan via tikkie of contant na afloop van de sessie</span>
                </li>
                <li className="flex gap-2">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Afzeggen minimaal 24 uur van tevoren, anders worden kosten in rekening gebracht</span>
                </li>
                <li className="flex gap-2">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Sessies vinden plaats bij mij thuis in praktijkruimte indien nodig via online videobellen</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Tarieven;
