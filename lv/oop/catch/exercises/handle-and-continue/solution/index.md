---
title: 'Risinājums: Apstrādājiet un turpiniet'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [handle-and-continue.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/handle-and-continue.raku).

## Izvade

```
processed ok
skipped (bad): boom
processed ok
```

## Komentāri

1. Fāzeris `CATCH` atrodas katra elementa blokā, tāpēc tas apstrādā `die` tikai šim vienam elementam. Tā kā izņēmums tiek apstrādāts turpat, tas nekad neizspruk, lai apturētu visu ciklu.

1. Šis ir tipiskais `CATCH` lietojums, kur `try` neder: viena apgrieziena neveiksme tiek nokārtota uz vietas, un cikls virzās uz nākamo elementu. Vidējais elements neizdodas, taču abi `ok` elementi joprojām tiek apstrādāti.

{% include nav.html %}
