---
title: 'Oplossing: Vervangen met antoniemen'
---

{% include menu.html %}

Om de taak op te lossen, wordt de inhoud van het bestand [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku) gekopieerd naar het oplossingsbestand [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku). Daarna probeert een lus over de invoerargumenten het woord in het woordenboek te vinden, en als dat lukt, neemt het het antoniem. Als er geen dergelijk woord in het woordenboek staat, wordt het oorspronkelijke woord gebruikt.

## Code

De oplossing wordt hieronder weergegeven. Het woordenboek wordt hier slechts gedeeltelijk getoond.

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    'achieve' => 'fail',
    # . . .
    'wrong' => 'right',
    'young' => 'old'    
;

for @*ARGS -> $word {
    say %dictionary{$word} // $word;
}
```

🦋 Vind het programma in het bestand [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku).

## Uitvoer

```console
$ raku exercises/associatives/replace-with-antonyms.raku early morning
late
evening

$ raku exercises/associatives/replace-with-antonyms.raku big soft drive
small
hard
drive
```

## Opmerkingen

1. De `//` operator is de [defined-or operator](/nl/essentials/scalar-variables/defined-or-operator), die de eerste gedefinieerde operand retourneert.
1. In de hash zijn alle sleutels woorden (d.w.z. ze zien eruit als identificatoren), dus je hoeft ze niet te citeren in de hash. Het is dus mogelijk om een hash te maken, zoals hieronder weergegeven:

```raku
my %dictionary =
    above => 'below',
    absent => 'present',
    achieve => 'fail',
    # . . .
    wrong => 'right',
    young => 'old'    
;
```

{% include nav.html %}