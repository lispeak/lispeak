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

type LetterType = 'consonant' | 'vowel' | 'derivative' | 'special';

const letters: { symbol: string; sound: string; type: LetterType }[] = [
  { symbol: 'a', sound: 'а', type: 'vowel' },
  { symbol: 'b', sound: 'б', type: 'consonant' },
  { symbol: 'c', sound: 'ш', type: 'consonant' },
  { symbol: 'd', sound: 'д', type: 'consonant' },
  { symbol: 'e', sound: 'э', type: 'vowel' },
  { symbol: 'f', sound: 'ф', type: 'consonant' },
  { symbol: 'g', sound: 'г', type: 'consonant' },
  { symbol: 'h', sound: 'х', type: 'consonant' },
  { symbol: 'i', sound: 'ы', type: 'vowel' },
  { symbol: 'j', sound: 'ж', type: 'consonant' },
  { symbol: 'k', sound: 'к', type: 'consonant' },
  { symbol: 'l', sound: 'л', type: 'consonant' },
  { symbol: 'm', sound: 'м', type: 'consonant' },
  { symbol: 'n', sound: 'н', type: 'consonant' },
  { symbol: 'o', sound: 'о', type: 'vowel' },
  { symbol: 'p', sound: 'п', type: 'consonant' },
  { symbol: 'r', sound: 'р', type: 'consonant' },
  { symbol: 's', sound: 'с', type: 'consonant' },
  { symbol: 't', sound: 'т', type: 'consonant' },
  { symbol: 'u', sound: 'у', type: 'vowel' },
  { symbol: 'v', sound: 'в', type: 'consonant' },
  { symbol: 'x', sound: 'ч', type: 'consonant' },
  { symbol: 'y', sound: 'й/ь', type: 'consonant' },
  { symbol: 'ya', sound: 'я', type: 'derivative' },
  { symbol: 'ye', sound: 'е', type: 'derivative' },
  { symbol: 'yi', sound: 'и', type: 'derivative' },
  { symbol: 'yo', sound: 'ё', type: 'derivative' },
  { symbol: 'yu', sound: 'ю', type: 'derivative' },
  { symbol: 'z', sound: 'з', type: 'consonant' },
  { symbol: "'", sound: 'ъ', type: 'special' },
];

const legend = [
  { type: 'consonant', label: 'Consonants' },
  { type: 'vowel', label: 'Vowels' },
  { type: 'derivative', label: 'Derivative Vowels' },
  { type: 'special', label: 'Special Signs' },
];

const syntaxKeywords = [
  { word: 'o', symbol: '(', description: 'Opening parenthesis' },
  { word: 'yo', symbol: ')', description: 'Closing parenthesis' },
  { word: 'a', symbol: '<-', description: 'Naming expression' },
  { word: 'ya', symbol: '->', description: 'Lambda' },
];

const syntaxExamples = [
  { lispeak: 'X', symbolic: 'X', lambda: 'X' },
  { lispeak: 'o X Y yo', symbolic: '(X Y)', lambda: '(X Y)' },
  { lispeak: 'o a X o Y Z yo yo', symbolic: '(<- X (Y Z))', lambda: 'X = (Y Z)' },
  { lispeak: 'o ya X ya Y X yo', symbolic: '(-> X -> Y X)', lambda: '(λ.X λ.Y X)' },
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

      <section className="section alphabet">
        <h2 className="section-title">Alphabet</h2>

        <div className="legend">
          {legend.map((item) => (
            <div key={item.type} className="legend-item">
              <span className={`legend-color ${item.type}`} />
              <span className="legend-label">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="letters-row">
          {letters.map((letter) => (
            <div key={letter.symbol} className={`letter-card ${letter.type}`}>
              <span className="letter-symbol">{letter.symbol}</span>
              <span className="letter-sound">{letter.sound}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section syntax">
        <h2 className="section-title">Syntax</h2>
        <p className="syntax-intro">Based on lambda calculus with prefix notation</p>

        <div className="syntax-keywords">
          <h3 className="syntax-subtitle">Keywords</h3>
          <div className="keywords-grid">
            {syntaxKeywords.map((kw) => (
              <div key={kw.word} className="keyword-card">
                <span className="keyword-word">{kw.word}</span>
                <span className="keyword-symbol">{kw.symbol}</span>
                <span className="keyword-description">{kw.description}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="syntax-examples">
          <h3 className="syntax-subtitle">Examples</h3>
          <div className="examples-table">
            <div className="examples-header">
              <span>Lispeak</span>
              <span>Symbolic</span>
              <span>Lambda Calculus</span>
            </div>
            {syntaxExamples.map((ex) => (
              <div key={ex.lispeak} className="examples-row">
                <code>{ex.lispeak}</code>
                <code>{ex.symbolic}</code>
                <code>{ex.lambda}</code>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
