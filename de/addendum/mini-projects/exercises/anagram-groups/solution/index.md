---
title: 'Lösung: Die Anagramme gruppieren'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @words = <listen silent enlist cat act dog>;
my %groups;

for @words -> $word {
    %groups{ $word.comb.sort.join }.push($word);
}

for %groups.sort(*.key) -> $pair {
    say $pair.value.sort.join(' ');
}
```

🦋 Du findest den Quellcode in der Datei [anagram-groups.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/anagram-groups.raku).

## Ausgabe

```
act cat
dog
enlist listen silent
```

## Kommentare

1. Die Buchstaben eines Wortes zu sortieren gibt einen *kanonischen Schlüssel*: Alle
Anagramme teilen dieselben sortierten Buchstaben, sie auf `%groups{ ... }` zu pushen sammelt
sie also unter einem Schlüssel. Nach der ersten Schleife zeigt `say %groups` die ganze
Struktur — jeden kanonischen Schlüssel mit seiner Liste von Wörtern:

    ```raku
    say %groups; # {act => [cat act], dgo => [dog], eilnst => [listen silent enlist]}
    ```

1. Jeder Hashwert ist die Liste der Wörter dieser Gruppe, mit `.sort.join` alphabetisch
ausgegeben.

{% include nav.html %}
