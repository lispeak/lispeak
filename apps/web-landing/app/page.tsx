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
  { digit: '0', lispeak: 'an', russian: 'ан' },
  { digit: '1', lispeak: 'en', russian: 'эн' },
  { digit: '2', lispeak: 'in', russian: 'ын' },
  { digit: '3', lispeak: 'on', russian: 'он' },
  { digit: '4', lispeak: 'un', russian: 'ун' },
  { digit: '5', lispeak: 'yan', russian: 'ян' },
  { digit: '6', lispeak: 'yen', russian: 'ен' },
  { digit: '7', lispeak: 'yin', russian: 'ин' },
  { digit: '8', lispeak: 'yon', russian: 'ён' },
  { digit: '9', lispeak: 'yun', russian: 'юн' },
];

const numeralExamples = [
  { number: '12', lispeak: "en'ina", russian: 'эн-ына' },
  { number: '586', lispeak: "yan'yon'yena", russian: 'ян-ён-ена' },
  { number: '9470', lispeak: "yun'un'yin'ana", russian: 'юн-ун-ин-ана' },
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

      <section className="section architecture">
        <h2 className="section-title">Architecture</h2>
        <p className="architecture-intro">Three Lispeak dialects</p>

        <div className="architecture-diagram">
          <div className="arch-row arch-row-input">
            <div className="arch-node arch-node-primary">
              <div className="arch-node-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8M16 17H8M10 9H8" />
                </svg>
              </div>
              <span className="arch-node-label">Lispeak Code</span>
            </div>
          </div>

          <div className="arch-connector arch-connector-single" />

          <div className="arch-row">
            <div className="arch-node arch-node-process">
              <span className="arch-node-label">Parser</span>
            </div>
          </div>

          <div className="arch-connector arch-connector-single" />

          <div className="arch-row">
            <div className="arch-node arch-node-primary">
              <span className="arch-node-label">AST</span>
            </div>
          </div>

          <div className="arch-connector arch-connector-triple">
            <div className="arch-line arch-line-left" />
            <div className="arch-line arch-line-center" />
            <div className="arch-line arch-line-right" />
          </div>

          <div className="arch-row arch-row-dialects">
            <div className="arch-dialect">
              <div className="arch-node arch-node-brown">
                <span className="arch-node-label">Brown Dialect</span>
              </div>
              <div className="arch-connector arch-connector-single" />
              <div className="arch-node arch-node-output arch-node-speech">
                <div className="arch-node-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                </div>
                <span className="arch-node-label">Pronounceable Speech</span>
              </div>
              <div className="arch-stdlib">
                <span>Lispeak Vocabulary</span>
              </div>
            </div>

            <div className="arch-dialect">
              <div className="arch-node arch-node-church">
                <span className="arch-node-label">Church Dialect</span>
              </div>
              <div className="arch-connector arch-connector-single" />
              <div className="arch-node arch-node-output arch-node-lambda">
                <span className="arch-node-icon arch-node-icon-text">λ</span>
                <span className="arch-node-label">Lambda Calculus</span>
              </div>
              <div className="arch-stdlib">
                <span>Church Encoding</span>
              </div>
            </div>

            <div className="arch-dialect">
              <div className="arch-node arch-node-eich">
                <span className="arch-node-label">Eich Dialect</span>
              </div>
              <div className="arch-connector arch-connector-single" />
              <div className="arch-node arch-node-output arch-node-js">
                <div className="arch-node-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                  </svg>
                </div>
                <span className="arch-node-label">JavaScript</span>
              </div>
              <div className="arch-stdlib">
                <span>JS Standard Library</span>
              </div>
            </div>
          </div>
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

      <footer className="footer">
        <p className="footer-author">
          Lispeak is developed by{' '}
          <a
            href="https://sergeyshpadyrev.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
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
