---
title: Dump della struttura dati
translations_gpt:
---

{% include menu.html %}

## Problema

Ti viene data la seguente struttura dati annidata:

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');
```

Fai due cose con essa:

1. Stampa un dump adatto allo sviluppatore di `@data` usando `dd`.
2. Stampa la stessa rappresentazione come stringa, preceduta dal testo `Structure: `.

## Esempio

Il programma stampa due righe simili:

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
