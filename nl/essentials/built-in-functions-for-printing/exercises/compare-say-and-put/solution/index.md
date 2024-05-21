---
title: 'Oplossing: Vergelijk `say` en `put`'
---

{% include menu.html %}

## Code

Hier is een van de mogelijke oplossingen:

```raku
my Int $i = 42;
say $i;
put $i;

my Rat $r = 3/4;
say $r;
put $r;

my Num $n = 3e4;
say $n;
put $n;

my Str $s = 'Raku';
say $s;
put $s;

my @a = <this is an array>;
# say @a.WHAT;
say @a;
put @a;

my List $l = <this is a list>;
# say $l.WHAT;
say $l;
put $l;

my %h = A => 'alpha', B => 'beta';
say %h;
put %h;
```

Voor meer zekerheid kun je ook het type van de variabele afdrukken, bijvoorbeeld zoals getoond voor arrays en lijsten, om er zeker van te zijn dat je een variabele van het gewenste type hebt gemaakt.

🦋 Vind het programma in het bestand [compare-say-and-put.raku](https://github.com/ash/raku-course/blob/master/exercises/built-in-functions-for-printing/compare-say-and-put.raku).

## Output

De uitvoer van het hierboven getoonde programma wordt hieronder getoond.

```console
$ raku exercises/built-in-functions-for-printing/compare-say-and-put.raku
42
42
0.75
0.75
30000
30000
Raku
Raku
[this is an array]
this is an array
(this is a list)
this is a list
{A => alpha, B => beta}
A	alpha
B	beta
```

## Opmerkingen

Door de uitvoer van het programma te onderzoeken, kun je duidelijk zien dat er geen verschil is bij het afdrukken van eenvoudige datatypes zoals nummers en strings. Voor samengestelde datatypes produceert `say` een iets meer 'rumoerige' uitvoer in vergelijking met `put`. Aan de andere kant, voor hashes, drukt `put` het af als een tabel in vergelijking met een enkele regel van `say`.

Het verschil tussen het uitvoerformaat wordt bepaald door hoe de `Str` en `gist` methoden zijn geïmplementeerd voor het betreffende type. We zullen hier later in de cursus meer over praten.

{% include nav.html %}