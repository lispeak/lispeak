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

const consonants = [
  { symbol: 'b', sound: 'б' },
  { symbol: 'c', sound: 'ш' },
  { symbol: 'd', sound: 'д' },
  { symbol: 'f', sound: 'ф' },
  { symbol: 'g', sound: 'г' },
  { symbol: 'h', sound: 'х' },
  { symbol: 'j', sound: 'ж' },
  { symbol: 'k', sound: 'к' },
  { symbol: 'l', sound: 'л' },
  { symbol: 'm', sound: 'м' },
  { symbol: 'n', sound: 'н' },
  { symbol: 'p', sound: 'п' },
  { symbol: 'r', sound: 'р' },
  { symbol: 's', sound: 'с' },
  { symbol: 't', sound: 'т' },
  { symbol: 'v', sound: 'в' },
  { symbol: 'x', sound: 'ч' },
  { symbol: 'y', sound: 'й/ь' },
  { symbol: 'z', sound: 'з' },
];

const basicVowels = [
  { symbol: 'a', sound: 'а' },
  { symbol: 'o', sound: 'о' },
  { symbol: 'e', sound: 'э' },
  { symbol: 'u', sound: 'у' },
  { symbol: 'i', sound: 'ы' },
];

const derivativeVowels = [
  { symbol: 'ya', sound: 'я' },
  { symbol: 'yo', sound: 'ё' },
  { symbol: 'ye', sound: 'е' },
  { symbol: 'yu', sound: 'ю' },
  { symbol: 'yi', sound: 'и' },
];

const specialSigns = [{ symbol: "'", description: 'ъ' }];

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

      <section className="section alphabet">
        <h2 className="section-title">Alphabet</h2>
        <p className="alphabet-letters">abcdefghijklmnoprstuvxyz</p>

        <div className="alphabet-grid">
          <div className="alphabet-group">
            <h3 className="alphabet-group-title">Consonants</h3>
            <div className="letter-grid">
              {consonants.map((c) => (
                <div key={c.symbol} className="letter-card">
                  <span className="letter-symbol">{c.symbol}</span>
                  <span className="letter-sound">{c.sound}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="alphabet-group">
            <h3 className="alphabet-group-title">Basic Vowels</h3>
            <div className="letter-grid vowels">
              {basicVowels.map((v) => (
                <div key={v.symbol} className="letter-card">
                  <span className="letter-symbol">{v.symbol}</span>
                  <span className="letter-sound">{v.sound}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="alphabet-group">
            <h3 className="alphabet-group-title">Derivative Vowels</h3>
            <p className="alphabet-note">Adding y before basic vowel creates derivative vowel</p>
            <div className="letter-grid vowels">
              {derivativeVowels.map((v) => (
                <div key={v.symbol} className="letter-card">
                  <span className="letter-symbol">{v.symbol}</span>
                  <span className="letter-sound">{v.sound}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="alphabet-group">
            <h3 className="alphabet-group-title">Special Signs</h3>
            <div className="letter-grid special">
              {specialSigns.map((s) => (
                <div key={s.symbol} className="letter-card special-card">
                  <span className="letter-symbol">{s.symbol}</span>
                  <span className="letter-sound">{s.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
