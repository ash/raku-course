---
title: Introspezione dei contenitori
---

{% include menu.html %}

L'_introspezione_ consiste nel chiedere a un valore o a un contenitore informazioni su se stesso: il suo tipo, il contenitore sottostante e il meccanismo che lo supporta. Hai gia utilizzato uno strumento di introspezione, `.^name`, per stampare il tipo di un valore.

Raku offre una piccola famiglia di tali strumenti, scritti in lettere maiuscole: `WHAT`, `VAR`, `WHO` e `HOW`. Vengono talvolta chiamati _pseudo-metodi_, perche il compilatore attribuisce loro un significato speciale invece di trattarli come metodi ordinari. Questa sezione esamina ciascuno di essi.

Come promemoria, ecco `.^name` che mostra come il tipo di un contenitore non tipizzato cambia quando vi si memorizzano valori diversi:

```raku
my $value;
say $value.^name; # Any

$value = 42;
say $value.^name; # Int

$value = 'forty-two';
say $value.^name; # Str
```

Il contenitore inizia come `Any` e poi riporta il tipo del valore che contiene in quel momento.

{% include nav.html %}
