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

const digits = [
  { digit: '0', lispeak: 'ana', russian: 'ана' },
  { digit: '1', lispeak: 'yana', russian: 'яна' },
  { digit: '2', lispeak: 'ena', russian: 'эна' },
  { digit: '3', lispeak: 'yena', russian: 'ена' },
  { digit: '4', lispeak: 'ina', russian: 'ына' },
  { digit: '5', lispeak: 'yina', russian: 'ина' },
  { digit: '6', lispeak: 'ona', russian: 'она' },
  { digit: '7', lispeak: 'yona', russian: 'ёна' },
  { digit: '8', lispeak: 'una', russian: 'уна' },
  { digit: '9', lispeak: 'yuna', russian: 'юна' },
];

const numeralExamples = [
  { number: '12', lispeak: "yan'ena", russian: 'ян-эна' },
  { number: '586', lispeak: "yin'un'ona", russian: 'ин-ун-она' },
  { number: '9470', lispeak: "yun'in'yon'ana", russian: 'юн-ын-ён-ана' },
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

async function getGitHubStars() {
  try {
    const res = await fetch('https://api.github.com/repos/lispeak/lispeak', {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data.stargazers_count ?? 0;
  } catch {
    return 0;
  }
}

export default async function Home() {
  const stars = await getGitHubStars();
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

      <section className="section numerals">
        <h2 className="section-title">Digits & Numerals</h2>
        <p className="numerals-intro">Digits are based on vowels in alphabetic order</p>

        <div className="digits-grid">
          {digits.map((d) => (
            <div key={d.digit} className="digit-card">
              <span className="digit-number">{d.digit}</span>
              <span className="digit-lispeak">{d.lispeak}</span>
              <span className="digit-russian">{d.russian}</span>
            </div>
          ))}
        </div>

        <div className="numerals-examples">
          <h3 className="numerals-subtitle">Building Numerals</h3>
          <p className="numerals-note">Combine first sounds of digits with ' separator</p>
          <div className="numerals-table">
            {numeralExamples.map((ex) => (
              <div key={ex.number} className="numeral-row">
                <span className="numeral-number">{ex.number}</span>
                <span className="numeral-lispeak">{ex.lispeak}</span>
                <span className="numeral-russian">{ex.russian}</span>
              </div>
            ))}
          </div>
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

      <footer className="footer">
        <p className="footer-author">
          Lispeak is developed by{' '}
          <a href="https://sergeyshpadyrev.github.io/" target="_blank" rel="noopener noreferrer" className="footer-link">
            Sergey Shpadyrev
          </a>
        </p>
        <a
          href="https://github.com/lispeak/lispeak"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="github-text">GitHub</span>
          <span className="github-stars">{stars}</span>
        </a>
      </footer>
    </>
  );
}
