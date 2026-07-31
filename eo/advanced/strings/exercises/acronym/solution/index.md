---
title: 'Solvo: Akronimo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $phrase = 'hyper text markup language';

my $acronym = '';
for $phrase.words -> $word {
    $acronym ~= $word.substr(0, 1);
}

say $acronym.uc;
```

🦋 Vi povas trovi la fontkodon en la dosiero [acronym.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/acronym.raku).

## Eligo

```
HTML
```

## Komentoj

1. `$phrase.words` donas la liston de vortoj. La buklo prenas la unuan signon de ĉiu el ili per `substr(0, 1)` kaj aldonas ĝin al `$acronym`.

1. Post kiam ĉiuj inicialoj estas kolektitaj, `uc` faras el la rezulto majusklojn: `HTML`.

{% include nav.html %}
