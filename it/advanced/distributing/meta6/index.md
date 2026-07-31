---
title: Il file META6
translations_gpt: Il file META6
---

{% include menu.html %}

Una distribuzione è descritta da un singolo file nella sua directory principale, `META6.json`. Si tratta di un file JSON che indica agli strumenti il nome della distribuzione, la versione, cosa fornisce e da cosa dipende:

```json
{
    "name": "Maths::Simple",
    "version": "0.0.1",
    "description": "Simple maths helpers",
    "authors": [ "Your Name" ],
    "license": "Artistic-2.0",
    "depends": [],
    "provides": {
        "Maths::Simple": "lib/Maths/Simple.rakumod"
    }
}
```

Le due chiavi più importanti sono `provides`, che associa ogni nome di modulo al file che lo implementa, e `depends`, che elenca le altre distribuzioni di cui questa ha bisogno.

Il file si trova alla radice di una struttura di directory standard:

```
Maths-Simple/
├── META6.json
├── README.md
├── lib/
│   └── Maths/
│       └── Simple.rakumod
└── t/
    └── 01-basic.rakutest
```

Il codice del modulo si trova sotto `lib/`, con il percorso delle directory che corrisponde alle parti separate da `::` nel nome (`Maths::Simple` → `lib/Maths/Simple.rakumod`). I test si trovano sotto `t/`. Con questa struttura e un `META6.json` corretto, gli strumenti possono compilare, testare e installare la distribuzione.

{% include nav.html %}
