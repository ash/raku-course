---
title: 'Solvo: Klasifiki la grandecon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
multi sub size(Int $n where $n.abs < 10)  { 'small' }
multi sub size(Int $n where $n.abs < 100) { 'medium' }
multi sub size(Int $n)                    { 'large' }

say size(7);
say size(30);
say size(-250);
```

🦋 Vi povas trovi la fontkodon en la dosiero [classify-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/classify-sign.raku).

## Eligo

```
small
medium
large
```

## Komentoj

1. Ĉiuj tri kandidatoj prenas unuopan `Int`, do sen la `where`-frazoj ili kolizius. La kondiĉoj ĉe la unuaj du igas ilin distinktaj, kaj la tria estas la ĝenerala kazo.

1. La `where`-frazoj testas `$n.abs`, do nur la amplekso decidas la rezulton kaj la signo estas ignorata. `size(7)` kongruas kun la unua kandidato (`small`), dum `size(-250)` havas absolutan valoron de `250`, kiu malsukcesas ĉe ambaŭ kondiĉoj kaj transiras al la ĝenerala kazo (`large`).

1. La kandidatoj estas testataj de la plej specifa al la plej ĝenerala — ĝuste en la ordo, en kiu ili estas skribitaj ĉi tie.

{% include nav.html %}
