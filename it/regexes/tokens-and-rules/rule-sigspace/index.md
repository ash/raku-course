---
title: Spazi significativi nelle regole
translations_gpt:
---

{% include menu.html %}

Una `rule` è un `token` con una funzionalità in più accesa: `:sigspace` (spazio significativo), esattamente l'avverbio `:s`. Trasforma lo spazio bianco che scrivi nello schema in un riconoscitore automatico di spazio bianco fra le parti. È quello che vuoi ogni volta che il testo da analizzare ha spazi fra i suoi pezzi.

Confronta i due. In un `token` lo spazio bianco nello schema viene **ignorato**, quindi `<first> <second>` chiede le due parti senza nulla in mezzo. Poiché `\w+` si ferma allo spazio, un input spaziato non trova corrispondenza:

```raku
grammar WithToken {
    token TOP    { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithToken.parse('foo bar').defined; # False
```

*Puoi* accettare lo spazio in un `token`: devi solo riconoscerlo tu, per esempio con `\s+`:

```raku
token TOP { <first> \s+ <second> }      # now 'foo bar' parses
```

Una `rule` inserisce quel riconoscimento dello spazio bianco al posto tuo, quindi basta scrivere uno spazio fra le parti:

```raku
grammar WithRule {
    rule TOP     { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithRule.parse('foo bar').defined; # True
```

Uno schema comune è usare `rule` per la struttura di livello più alto — dove le parti sono separate da spazi — e `token` per i pezzi piccoli come nomi e numeri, che non contengono spazi. Così la tua grammatica resta insieme corretta e facile da leggere.

{% include nav.html %}
