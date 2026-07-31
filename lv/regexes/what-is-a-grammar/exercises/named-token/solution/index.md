---
title: 'Risinājums: Nosaukts marķieris'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my regex word { \w+ }

if 'hello world' ~~ / <word> / {
    say $<word>;
}
```

🦋 Atrodiet programmu failā [named-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/named-token.raku).

## Izvade

```
｢hello｣
```

## Komentāri

1. `my regex word { \w+ }` dod raksturam nosaukumu, lai to varētu atkārtoti izmantot.

1. Rakstot `<word>` raksturā, tas tiek piemeklēts un rezultāts satverts ar to pašu nosaukumu, sasniedzams kā `$<word>`. Pirmā vārda rakstzīmju virtene ir `hello`.

{% include nav.html %}
