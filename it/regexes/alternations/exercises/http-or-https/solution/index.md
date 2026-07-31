---
title: 'Soluzione: http o https'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say 'https://example' ~~ / http | https /;
```

🦋 Trova il programma nel file [http-or-https.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/http-or-https.raku).

## Output

```
｢https｣
```

## Commenti

1. Sia `http` sia `https` potrebbero corrispondere all'inizio, ma `|` usa il riconoscimento del token più lungo.

1. Quindi vince il più lungo `https`, anche se `http` è scritto per primo.

## Una soluzione alternativa

Le due parole differiscono solo per una `s` finale, quindi invece di un'alternativa puoi rendere facoltativa quella `s` con il quantificatore `?`:

```raku
say 'https://example' ~~ / https? /; # ｢https｣
```

Il `?` si lega solo all'atomo che lo precede immediatamente — la `s` — non all'intera parola, quindi `https?` si legge come `http` seguito da una `s` facoltativa. Quell'unico schema riconosce sia `http` sia `https`, ed essendo goloso prende la `s` ogni volta che c'è.

{% include nav.html %}
