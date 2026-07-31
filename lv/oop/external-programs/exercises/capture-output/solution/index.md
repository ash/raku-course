---
title: 'Risinājums: Pārtveriet izvadi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $proc = run 'echo', 'hello world raku', :out;
my $output = $proc.out.slurp(:close).trim;
say $output.words.elems;
```

🦋 Atrodiet programmu failā [capture-output.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/capture-output.raku).

## Izvade

```
3
```

## Komentāri

1. `:out` novirza programmas izvadi `Proc` iekšienē, nevis uz ekrānu, un `.out.slurp(:close)` to visu nolasa atpakaļ; `.trim` noņem beigu jauno rindu, ko `echo` pievieno.

1. Tiklīdz izvade mūsu programmā ir parasta virkne, mēs pret to izturamies kā pret jebkuriem citiem datiem: `.words.elems` sadala to pa atstarpēm un saskaita gabalus, dodot `3`. Tāda arī ir noķeršanas jēga — ārējā programma kļūst par būvbloku, kura rezultātu apstrādājam tālāk.

{% include nav.html %}
