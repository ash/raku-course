---
title: 'Risinājums: Apgrieziet vārdu secību'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $sentence = 'Raku is really nice';

say $sentence.words.reverse.join(' ');
```

🦋 Atrodiet programmu failā [reverse-words.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/reverse-words.raku).

## Izvade

```
nice really is Raku
```

## Komentāri

1. `.words` sadala teikumu sarakstā, `.reverse` apgriež saraksta secību, un
`.join(' ')` vārdus salīmē atpakaļ ar atsevišķām atstarpēm.

{% include nav.html %}
