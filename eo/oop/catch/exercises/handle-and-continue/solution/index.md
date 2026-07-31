---
title: 'Solvo: Traktu kaj daŭrigu'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
for <ok bad ok> -> $item {
    {
        die 'boom' if $item eq 'bad';
        say "processed $item";

        CATCH {
            default {
                say "skipped ($item): {.message}";
            }
        }
    }
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [handle-and-continue.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/handle-and-continue.raku).

## Eligo

```
processed ok
skipped (bad): boom
processed ok
```

## Komentoj

1. La fazero `CATCH` estas ene de la po-era bloko, do ĝi traktas `die` por nur tiu unu ero. Ĉar la escepto estas traktata tie, ĝi neniam eskapas por haltigi la tutan buklon.

1. Jen la tipa uzo de `CATCH` super `try`: misfunkcio en unu iteracio estas traktata loke, kaj la buklo moviĝas al la sekva ero. La meza ero malsukcesas, sed la du eroj `ok` ankoraŭ estas prilaborataj.

{% include nav.html %}
