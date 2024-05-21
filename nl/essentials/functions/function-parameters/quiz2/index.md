---
title: Quiz — Argumenten doorgeven
---

{% include menu.html %}

## 1

Er is een functie met de volgende definitie:

```raku
sub f {
    say 'Functie aangeroepen';
}
```

Kies de juiste aanroepen van deze functie.

{:.quiz}
1 | f;
0 | f(&apos;&apos;); | Functie accepteert geen argumenten, maar er wordt er hier één ontvangen.
0 | f &apos;&apos;; | Hetzelfde als hierboven.
1 | f(); | Dit is goed, geen argumenten doorgegeven.
0 | f (); | Hier wordt één argument (een lege lijst) doorgegeven.
0 | f(10);

## 2

Er is een andere functie.

```raku
sub g($x, $y) {
    say "Aangeroepen g($x, $y)";
}
```

Selecteer de juiste aanroepen van deze functie.

{:.quiz}
1 | g(10, 20);
0 | g 10 20; | Geen komma tussen argumenten.
0 | g(10); | Te weinig argumenten: twee vereist, één doorgegeven.
1 | g 10, 20; | Haakjes zijn niet vereist wanneer het niet dubbelzinnig is.
0 | g(10,); | Geen geldige syntax.
0 | g(,20); | Ook geen geldige syntax.
0 | g(&apos;10, 20&apos;); | Een enkel stringargument doorgegeven.
1 | g(&apos;woord&apos;, 20); | Argumenten kunnen van verschillende typen zijn.
0 | g(10, 20, 30); | Te veel argumenten.
0 | g 10, 20, 30; | Ook hier: drie argumenten doorgegeven.


{% include quiz.html %}

{% include nav.html %}