const features = [
  {
    title: 'Git-Native',
    description: 'Language specification stored in git and developed by pull requests',
  },
  {
    title: 'TypeScript-Based',
    description: 'Specification described in TypeScript and based on functions',
  },
  {
    title: 'S-Expressions',
    description: 'Every sentence is an S-expression',
  },
  {
    title: 'Pronouncable and Executable',
    description: 'Every sentence can be spoken aloud andcan be executed on a computer',
  },
  {
    title: 'Sounds Good',
    description: 'Language is designed to sound pleasant',
  },
  {
    title: 'Compatible',
    description: 'Fully compatible with words from any natural language',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="title">LISPEAK</h1>
        <p className="subtitle">LISP you can speak</p>
      </section>

      <section className="section features">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
