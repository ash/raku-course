---
title: 'Risinājums: Gramatika pilniem vārdiem'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar FullName {
    token TOP   { <first> \s+ <last> }
    token first { \w+ }
    token last  { \w+ }
}

my $match = FullName.parse('Grace Hopper');

say ~$match<first>;
say ~$match<last>;
```

🦋 Atrodiet programmu failā [grammar-fullname.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-fullname.raku).

## Izvade

```
Grace
Hopper
```

## Komentāri

1. Marķieris `TOP` ir vieta, kur parsēšana sākas; tas uz pārējiem marķieriem
atsaucas pēc nosaukuma ar `<first>` un `<last>`, kas kļūst par atslēgām atbilstībā.

1. `$match<first>` ir atbilstības objekts; prefikss `~` to pārvērš vienkāršā
salāgotajā tekstā.

{% include nav.html %}
