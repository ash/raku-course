---
title: 'Oplossing: Print de waarschuwing'
---

{% include menu.html %}

## Code

Hier is de oplossing:

```raku
my $age = prompt 'Wat is je leeftijd? ';

if $age < 0 {
    note 'Je hebt een negatief getal ingevoerd!';
}
else {
    say "Je leeftijd is $age";
}
```

🦋 Vind het programma in het bestand [print-the-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/built-in-functions-for-printing/print-the-warning.raku).

## Uitvoer

Een paar mogelijke gevallen:

```console
$ raku exercises/built-in-functions-for-printing/print-the-warning.raku 
Wat is je leeftijd? 20
Je leeftijd is 20

$ raku exercises/built-in-functions-for-printing/print-the-warning.raku 
Wat is je leeftijd? -1
Je hebt een negatief getal ingevoerd!
```

Om ervoor te zorgen dat het foutbericht naar `STDERR` wordt geprint, leid je de uitvoer om. De prompt om de leeftijd in te voeren zal niet verschijnen, maar je kunt nog steeds een getal invoeren. De waarschuwing blijft zichtbaar.

```console
$ raku exercises/built-in-functions-for-printing/print-the-warning.raku > /dev/null
20

$ raku exercises/built-in-functions-for-printing/print-the-warning.raku > /dev/null 
-1
Je hebt een negatief getal ingevoerd!
```

{% include nav.html %}