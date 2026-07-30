---
title: 'Oplossing: Palindroomcontrole'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
for <level hello racecar> -> $word {
    say "$word: { $word eq $word.flip ?? 'yes' !! 'no' }";
}
```

🦋 Je kunt de broncode vinden in het bestand [palindrome.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/palindrome.raku).

## Uitvoer

```
level: yes
hello: no
racecar: yes
```

## Opmerkingen

1. `.flip` keert de tekens van een string om. Een woord is precies dan een palindroom wanneer
het gelijk is aan zijn eigen omkering, wat de ternaire uitdrukking in `yes` of `no` verandert.

{% include nav.html %}
