---
title: 'Solvo: Ĉiuj faktorialoj samtempe'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say [\*] 1..6;
```

🦋 Vi povas trovi la fontkodon en la dosiero [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/factorial.raku).

## Eligo

```
(1 2 6 24 120 720)
```

## Komentoj

1. La retrokliniĝo ene de la krampoj igas `[*]` triangula redukto. Anstataŭ kunfandi la liston al ununura valoro, ĝi konservas ĉiun partan produkton: `1`, poste `1*2`, poste `1*2*3`, kaj tiel plu.

1. Ĉiu parta produkto `1*2*...*k` estas ĝuste _k!_, do la rezulto estas la listo de faktorialoj de `1` ĝis `6`. Simpla `[*] 1..6` estus doninta nur la lastan el tiuj, `720`.

{% include nav.html %}
