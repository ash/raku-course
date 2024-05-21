---
title: 'Oplossing: Digitale trappen'
---

{% include menu.html %}

Het programma gebruikt twee lussen en twee reeksen.

## Code

Hier is een van de mogelijke oplossingen:

```raku
my $size = prompt 'Voer de grootte in: ';

for 1..$size -> $n {
    .print for 1..$n;
    print "\n";
}
```

🦋 Vind het programma in het bestand [digital-stairs.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/digital-stairs.raku).

## Uitvoer

Voer het programma uit en voer de grootte van de structuur in:

```console
$ raku exercises/loops/digital-stairs.raku
Voer de grootte in: 7
1
12
123
1234
12345
123456
1234567
```

## Opmerking

Let op hoe het huidige cijfer wordt afgedrukt:

```raku
.print for 1..$n;
```

Net als bij `say`, kan de `print` routine als een methode worden aangeroepen. In dit geval wordt het aangeroepen op de [topic variabele](/nl/essentials/loops/topic) `$_`.

{% include nav.html %}