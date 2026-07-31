---
title: 'Solvo: http aŭ https'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say 'https://example' ~~ / http | https /;
```

🦋 Vi povas trovi la fontkodon en la dosiero [http-or-https.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/http-or-https.raku).

## Eligo

```
｢https｣
```

## Komentoj

1. Kaj `http` kaj `https` povus kongrui ĉe la komenco, sed `|` uzas kongruigon laŭ plej longa ĵetono.

1. Do la pli longa `https` venkas, kvankam `http` estas skribita unue.

## Alternativa solvo

La du vortoj diferencas nur per fina `s`, do anstataŭ alternativo vi povas fari tiun `s` nedeviga per la kvantoro `?`:

```raku
say 'https://example' ~~ / https? /; # ｢https｣
```

La `?` ligiĝas nur al la atomo tuj antaŭ ĝi — la `s` — ne al la tuta vorto, do `https?` legiĝas kiel `http` sekvata de nedeviga `s`. Tiu unu sola ŝablono kongruas kun kaj `http` kaj `https`, kaj estante avida ĝi prenas la `s`, kiam ajn ĝi ĉeestas.

{% include nav.html %}
