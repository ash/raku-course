---
title: 'Solvo: Kaptu la eligon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $proc = run 'echo', 'hello world raku', :out;
my $output = $proc.out.slurp(:close).trim;
say $output.words.elems;
```

🦋 Vi povas trovi la fontkodon en la dosiero [capture-output.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/capture-output.raku).

## Eligo

```
3
```

## Komentoj

1. `:out` redirektas la eligon de la programo en la `Proc` anstataŭ al la ekrano, kaj `.out.slurp(:close)` relegas ĝin tutan; `.trim` forigas la finan linifinon, kiun `echo` aldonas.

1. Post kiam la eligo estas ordinara ĉeno en nia programo, ni traktas ĝin kiel ĉiun alian datumon: `.words.elems` dividas ĝin ĉe blankspaco kaj kalkulas la pecojn, donante `3`. Jen la celo de kaptado — la ekstera programo fariĝas konstruelemento, kies rezulton ni plu prilaboras.

{% include nav.html %}
