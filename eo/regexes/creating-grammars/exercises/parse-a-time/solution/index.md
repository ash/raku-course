---
title: 'Solvo: Analizu horon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Time {
    token TOP    { <hour> ':' <minute> ':' <second> }
    token hour   { \d ** 2 }
    token minute { \d ** 2 }
    token second { \d ** 2 }
}

say Time.parse('09:30:45')<second>;
```

🦋 Vi povas trovi la fontkodon en la dosiero [parse-a-time.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-time.raku).

## Eligo

```
｢45｣
```

## Komentoj

1. `TOP` priskribas la tutan horon kiel tri ĵetonojn apartigitajn per dupunktoj. Ĉiu parto estas `\d ** 2` — ekzakte du ciferoj — anstataŭ senlima `\d+`, do misformita valoro kiel `09:30:456` estas malakceptata. (Se parto povas esti sen antaŭa nulo, kiel la horo en `9:30:45`, skribu `\d ** 1..2` por permesi unu aŭ du ciferojn.)

1. Post la analizo, ĉiu ĵetono estas nomita kapto, do la sekundo estas legata kiel `<second>` sur la kongruo. Aldoni trian parton estas nur unu plia ĵetono kaj unu plia dupunkto — la gramatiko skaliĝas nature.

{% include nav.html %}
