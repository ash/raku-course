---
title: 'Risinājums: Akronīms'
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $phrase = 'hyper text markup language';

my $acronym = '';
for $phrase.words -> $word {
    $acronym ~= $word.substr(0, 1);
}

say $acronym.uc;
```

🦋 Programmas pirmkodu var atrast failā [acronym.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/acronym.raku).

## Izvade

```
HTML
```

## Komentāri

1. `$phrase.words` atgriež vārdu sarakstu. Cilpa paņem katra vārda pirmo rakstzīmi ar `substr(0, 1)` un pievieno to pie `$acronym`.

1. Kad visi iniciāļi ir savākti, `uc` pārvērš rezultātu lielajos burtos: `HTML`.

{% include nav.html %}
