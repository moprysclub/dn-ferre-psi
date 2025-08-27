import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const Index = () => {
  useEffect(() => {
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        clearInterval(checkCalendly);
      }
    }, 100);

    return () => {
      clearInterval(checkCalendly);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/kevins-club/30min'
      });
    }
    return false;
  };

  return (
    <>
      {/* Barra de urgência */}
      <div className="urgency-bar">🔐 Esta prévia ficará disponível por 72h.</div>

      {/* Cabeçalho fixo */}
      <header className="sticky-header">
        <div className="font-semibold text-foreground">Dra. Danielle Ferreira</div>
        <a
          href="https://wa.me/5521976145467"
          className="btn-activate"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>
      </header>

      {/* Seção Hero */}
      <section className="hero-section py-8 md:py-12">
        <div className="centered px-4">
          <img
            src="https://i.imgur.com/xqJaM0h.jpeg"
            alt="Dra. Danielle Ferreira"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              margin: '0 auto 1rem',
            }}
          />
          <h1 className="text-2xl leading-tight font-bold text-foreground md:text-4xl md:leading-tight text-balance mb-3 text-center">
            Danielle Ferreira
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-5 text-center">
            <strong>Psicóloga e Psicanalista • CRP 05/81485</strong>
          </p>

          <div className="proof-bar mb-6">
            <div className="proof-item">
              <div className="text-2xl mb-1" aria-hidden>📍</div>
              <div className="text"><strong>Atendimento Online</strong></div>
            </div>
            <div className="proof-item">
              <div className="text-2xl mb-1" aria-hidden>🎓</div>
              <div className="text"><strong>Abordagem Psicanalítica</strong></div>
            </div>
            <div className="proof-item">
              <div className="text-2xl mb-1" aria-hidden>💬</div>
              <div className="text"><strong>Escuta ética e acolhedora</strong></div>
            </div>
          </div>

          <div className="text-sm md:text-base text-muted-foreground space-y-1 text-center">
            <div>
              <a href="tel:21976145467" className="underline underline-offset-2">
                +55 (21) 97614-5467
              </a>
            </div>
            <div>
              <a href="https://instagram.com/danie_psi" target="_blank" className="underline underline-offset-2" rel="noopener noreferrer">
                Instagram: @danie_psi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo da página */}
      <main className="centered" style={{ marginTop: '1.5rem', paddingBottom: '4rem' }}>
        <h1 className="text-xl font-bold text-foreground mb-1.5">
          Sobre a profissional
        </h1>

        <h2 className="text-base font-semibold text-muted-foreground mb-3">
          Psicoterapia para adultos, com escuta humanizada e ética
        </h2>

        <div className="space-y-3 mb-6 text-sm">
          <p>Ofereço atendimento psicológico online com base na psicanálise, proporcionando um espaço seguro e confidencial para acolher suas demandas.</p>
          <p>A psicoterapia é um processo de autoconhecimento, elaboração de conflitos e desenvolvimento de novas formas de lidar com questões emocionais.</p>
          <p>Com experiência e compromisso ético, minha prática prioriza a singularidade de cada paciente.</p>
        </div>

        {/* Como funciona */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">
          Como funciona
        </h2>

        <div className="space-y-2 text-sm mb-6">
          <div>1️⃣ Agende uma conversa inicial gratuita</div>
          <div>2️⃣ Entenda como funciona o processo terapêutico</div>
          <div>3️⃣ Iniciamos os encontros online no seu ritmo</div>
        </div>

        {/* Por que escolher */}
        <h2 className="text-lg font-bold text-foreground mb-3">
          Por que iniciar a terapia?
        </h2>

        <div className="space-y-2 text-sm mb-6">
          <div>💭 Sofrimentos emocionais e ansiedades recorrentes</div>
          <div>🧩 Desejo de compreender padrões repetitivos</div>
          <div>🧠 Desenvolvimento pessoal e autoconhecimento</div>
        </div>

        {/* Chamada final */}
        <section className="mt-10 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-2">
            Vamos conversar?
          </h2>
          <p className="text-sm text-muted-foreground">
            Entre em contato pelo WhatsApp e marque uma escuta inicial gratuita.
          </p>
        </section>

        {/* Rodapé */}
        <footer className="centered" style={{ paddingBottom: '2rem' }}>
          <div className="space-y-2 text-sm text-muted-foreground text-center">
            <div className="font-semibold">Dra. Danielle Ferreira</div>
            <div>CRP 05/81485</div>
            <div>+55 (21) 97614-5467</div>
            <div>Atendimento Online</div>
            <div className="mt-4">© 2025 Dra. Danielle Ferreira. Todos os direitos reservados.</div>
          </div>
        </footer>
      </main>

      {/* Rodapé fixo */}
      <div className="sticky-footer">
        <a href="tel:21976145467" className="btn btn-call">📞 Ligar</a>
        <a href="https://wa.me/5521976145467" className="btn btn-book" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
      </div>
    </>
  );
};

export default Index;

