---
title: 'Solution: Costruire un URL'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my @parts = <http :// example .com>;

my $url = [~] @parts;
say $url;
say $url.chars;
```

🦋 Puoi trovare il codice sorgente nel file [concatenate-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/concatenate-a-list.raku).

## Output

```
http://example.com
18
```

## Commenti

1. L'array è scritto con la forma di quotazione ad angoli `<...>`, che equivale a `'http', '://', 'example', '.com'`.

1. Il meta-operatore di riduzione `[~]` inserisce l'operatore di concatenazione di stringhe `~` tra tutti gli elementi, quindi `[~] @parts` unisce i quattro pezzi nella singola stringa `http://example.com`.

1. Memorizzare il risultato in `$url` permette di riutilizzarlo: `$url.chars` indica poi che l'URL assemblato è lungo `18` caratteri.

{% include nav.html %}
