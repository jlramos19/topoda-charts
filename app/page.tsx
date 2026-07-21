export default function Home() {
  return (
    <main>
      <nav><a className="brand" href="#top">TÓPODA <span>CHARTS</span></a><div className="nav-links"><a href="#studio">Studio</a><a href="#work">Work</a><a href="#contact">Contact</a></div></nav>
      <section id="top" className="hero">
        <p className="eyebrow">Tópoda Charts Studios</p>
        <h1>Make the world<br/><em>feel something.</em></h1>
        <p className="lede">A culture studio creating worlds, records, stories, and experiences with a pulse.</p>
        <a className="button" href="#studio">Enter the studio <span>→</span></a>
        <div className="hero-mark"><span>TC</span><i>01</i></div>
      </section>
      <section id="studio" className="statement"><p className="eyebrow">What we build</p><h2>Ideas with their own gravity.</h2><p>We develop original music, narrative worlds, visual identities, and digital experiences that stay with people long after the first encounter.</p></section>
      <section id="work" className="work"><p className="eyebrow">In the studio</p><div className="cards"><article><b>01</b><h3>Records</h3><p>Artists, eras, rollout worlds, and music that makes a life feel cinematic.</p></article><article><b>02</b><h3>Worlds</h3><p>Games and stories with lived-in systems, emotional stakes, and room to grow.</p></article><article><b>03</b><h3>Experiences</h3><p>Digital spaces that turn an audience into a community with somewhere to belong.</p></article></div></section>
      <section className="manifesto"><p>“The work is the invitation.”</p></section>
      <footer id="contact"><a className="brand" href="#top">TÓPODA <span>CHARTS</span></a><p>Built for feeling. Made in public.</p><a className="email" href="mailto:hello@topodacharts.com">hello@topodacharts.com ↗</a></footer>
    </main>
  );
}
