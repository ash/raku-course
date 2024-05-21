---
title: 'Oplossing: Functie om xʸ te berekenen'
---

{% include menu.html %}

Gebruik in dit programma de `**` operator om de macht te berekenen.

## Code

Hier is de oplossing:

```raku
sub f($x, $y) { $x ** $y }

say f(5, 3);
say f(2, 10);
say f(-4, 5);
```

🦋 Vind het programma in het bestand [function-x-to-the-power-of-y.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/function-x-to-the-power-of-y.raku).

## Output

Voer het programma uit om te bevestigen dat het de juiste antwoorden geeft:

```console
$ raku exercises/functions/function-x-to-the-power-of-y.raku
125
1024
-1024
```

## Opmerking

Deze functie werkt ook met negatieve machten, bijvoorbeeld:

```raku
say f(5, -1);  # 0.2
say f(10, -2); # 0.01
```

{% include nav.html %}