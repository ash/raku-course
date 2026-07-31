---
title: 'Risinājums: Numurējiet rindas'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
spurt 'words.txt', "apple\nbanana\ncherry\n";

my $n = 0;
for 'words.txt'.IO.lines -> $line {
    $n++;
    say "$n: $line";
}
```

🦋 Atrodiet programmu failā [shout-the-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/shout-the-lines.raku).

## Izvade

```
1: apple
2: banana
3: cherry
```

## Komentāri

1. `spurt` ieraksta failā trīs vārdus, atdalītus ar jaunas rindas rakstzīmēm.

1. `.IO.lines` dod rindas pa vienai, bez to beigu jaunās rindas rakstzīmēm. Mēs uzturam skaitītāju `$n`, ko katrā piegājienā palielinām, tāpēc katra rinda tiek izdrukāta kopā ar savu vietu failā.

{% include nav.html %}
