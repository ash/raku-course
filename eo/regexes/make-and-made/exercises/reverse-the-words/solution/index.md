---
title: 'Solvo: Inversigu la vortordon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Phrase {
    token TOP  { <word> [ ' ' <word> ]* { make $<word>».made.join(' ') } }
    token word { \w+ { make $/.flip } }
}

say Phrase.parse('hello world').made;
```

🦋 Vi povas trovi la fontkodon en la dosiero [reverse-the-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/reverse-the-words.raku).

## Eligo

```
olleh dlrow
```

## Komentoj

1. Ĉiu ĵetono `word` faras sian propran inversigitan tekston: ĝia enlinia bloko ruliĝas, kiam ajn vorto kongruas, kaj `make $/.flip` konservas la vorton — `$/` estas la nuna kongruo — literumita malantaŭen.

1. `TOP` kongruas kun la vortoj per `<word> [ ' ' <word> ]*` — unu vorto, poste ajna nombro da «spaco kaj vorto» — kaj kombinas ilin. `$<word>` estas la listo de ĉiu vorta kongruo; `».made` eltiras la inversigitan tekston, kiun ĉiu konservis, kaj `.join(' ')` rekonstruas la frazon per spacoj.

1. Tiu formo «ero, poste ero, poste ero…» estas sufiĉe ofta por havi mallongigon: la apartigilo `%`. Skribi `<word>+ % ' '` signifas «unu aŭ pli da `<word>`, apartigitaj per spaco», kaj kongruas ekzakte kun la samaj frazoj kiel `<word> [ ' ' <word> ]*` — nur pli kompakte.

1. Do `make` kaj `made` funkcias je du niveloj ĉi tie: la malgrandaj pecoj faras siajn valorojn, kaj la tutaĵo estas farita el ili. Legi `.made` sur la rezulto donas `olleh dlrow`.

{% include nav.html %}
