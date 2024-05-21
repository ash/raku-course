---
title: 'Oplossing: Print de som'
---

{% include menu.html %}

Dit programma bestaat uit een enkele `MAIN` functie die twee getypte argumenten aanneemt, beide zijn opgebouwd uit de argumenten van de opdrachtregel.

## Code

Hier is de oplossing:

```raku
sub MAIN(Int $a, Int $b) {
    say $a + $b;
}
```

🦋 Vind het programma in het bestand [print-the-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/print-the-sum.raku).

## Uitvoer

Probeer verschillende invoernummers:

```console
$ raku exercises/the-main-function/print-the-sum.raku 500 700
1200
```

Je kunt ook proberen het programma zonder de argumenten of met argumenten van verschillende types uit te voeren en zien wat er gebeurt. We zullen het hebben over het omgaan met die gevallen in het tweede deel van de cursus.

{% include nav.html %}