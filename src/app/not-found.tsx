import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="section">
      <Container narrow>
        <div className="center">
          <p className="display" style={{ fontSize: 88, color: "var(--red)" }}>404</p>
          <h1 className="h2 mt-4">Seite nicht gefunden</h1>
          <p className="lead center mt-4">Diese Seite gibt es nicht (mehr). Vielleicht helfen Ihnen die Startseite oder unsere Leistungen weiter.</p>
          <div className="mt-8" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Button href="/">Zur Startseite</Button>
            <Button href="/leistungen/" variant="ghost">Leistungen</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
