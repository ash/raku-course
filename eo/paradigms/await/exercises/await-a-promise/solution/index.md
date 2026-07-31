---
title: 'Solvo: Atendu promeson'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @jobs =
    (start { sleep 0.3; 'slow'   }),
    (start { sleep 0.1; 'quick'  }),
    (start { sleep 0.2; 'medium' });

say await @jobs;
```

🦋 Vi povas trovi la fontkodon en la dosiero [await-a-promise.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-promise.raku).

## Eligo

```
(slow quick medium)
```

## Komentoj

1. Ĉiuj tri taskoj startas samtempe kaj dormas samtempe, do la tuta programo daŭras ĉirkaŭ `0.3` sekundojn — la daŭron de la plej malrapida tasko, ne la sumon de ĉiuj tri.

1. Kvankam `quick` finiĝas unue kaj `slow` laste, la eligo estas `(slow quick medium)`: `await` redonas ĉiun rezulton sur la sama pozicio kiel ĝia promeso en `@jobs`. La ordo de kompletiĝo influas nur *kiam* `await` revenas, neniam la aranĝon de la rezultoj.

{% include nav.html %}
