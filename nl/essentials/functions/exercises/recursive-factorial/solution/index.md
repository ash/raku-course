---
title: 'Oplossing: Recursieve faculteit'
---

{% include menu.html %}

Faculteit is een zeer productieve oefening, omdat het op een aantal verschillende manieren kan worden opgelost. Deze keer gebruiken we recursie, wat betekent dat de functie vanuit zichzelf wordt aangeroepen.

## Code 1

Hier is de code van de oplossing. Let op dat je de voorwaarde moet controleren om de recursie te stoppen, anders zal deze oneindig doorgaan.

```raku
sub factorial($n) {
    if $n < 2 {
        return 1;
    }
    else {
        return $n * factorial($n - 1);
    }
}

say factorial(10);
```

🦋 Vind het programma in het bestand [recursive-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/recursive-factorial.raku).

## Code 2

In de gevallen, zoals getoond in deze code, is het vaak beter om postfix vormen van `if` te gebruiken om onmiddellijk uit de functie te retourneren. Deze aanpak maakt de code duidelijker en verwijdert veel inspringing en interpunctie.

```raku
sub factorial($n) {
    return 1 if $n < 2;
    return $n * factorial($n - 1);
}

say factorial(10);
```

🦋 Vind het bijgewerkte programma in het bestand [recursive-factorial-2.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/recursive-factorial-2.raku).

## Voorbeeld

Voer het programma uit en controleer het resultaat. Trouwens, wist je dat _10!_ exact het aantal seconden in zes weken is?

```console
$ raku exercises/functions/recursive-factorial.raku
3628800
```

{% include nav.html %}