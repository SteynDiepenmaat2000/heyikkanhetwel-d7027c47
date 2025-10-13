import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Patricia Kroeze</h3>
            <p className="text-sm text-muted-foreground">
              Spiritueel Kindercoach
              <br />
              "Heyikkanhetwel"
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+31651317365" className="hover:text-primary transition-colors">
                  +31 (0)6 51317365
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@heyikkanhetwel.nl" className="hover:text-primary transition-colors">
                  info@heyikkanhetwel.nl
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Kastanjestraat 58, 7572TC Oldenzaal</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">KvK Nummer</h3>
            <p className="text-sm text-muted-foreground">
              KvK: 72639377
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Patricia Kroeze - Heyikkanhetwel. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
