---
title: Lookahead
translations_gpt:
---

{% include menu.html %}

Een _lookahead_ controleert wat er onmiddellijk **na** de huidige positie komt. Hij wordt tussen punthaken geschreven:

* `<?before …>` — slaagt als de tekst erna matcht (positieve lookahead)
* `<!before …>` — slaagt als de tekst erna **niet** matcht (negatieve lookahead)

De assertion zelf matcht geen tekens; hij test alleen de positie. Match bijvoorbeeld een getal alleen wanneer het door het woord `dollars` gevolgd wordt:

```raku
say '100 dollars' ~~ / \d+ <?before ' dollars'> /; # ｢100｣
```

De match is alleen `100` — de tekst ` dollars` werd gecontroleerd maar niet meegenomen.

Omdat de lookahead alleen beweert wat erna komt, matcht hetzelfde getal wel of niet, afhankelijk van de valuta erachter:

```raku
say so '100 euro'    ~~ / \d+ <?before ' euro'> /; # True
say so '100 dollars' ~~ / \d+ <?before ' euro'> /; # False
```

De cijfers zijn in beide strings identiek, maar de assertion aanvaardt `100` alleen wanneer er ` euro` op volgt.

De negatieve vorm is nuttig voor "… maar niet wanneer erop volgt …". Match `cat` alleen wanneer er **geen** cijfer op volgt:

```raku
say so 'cats' ~~ / cat <!before \d> /; # True
say so 'cat5' ~~ / cat <!before \d> /; # False
```

In `cat5` ziet de lookahead vlak achter `cat` een cijfer, dus mislukt de negatieve assertion en mislukt de hele match.

{% include nav.html %}
