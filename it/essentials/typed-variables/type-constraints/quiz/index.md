---
title: Quiz — Vincoli di tipo
---

{% include menu.html %}

Rendi le variabili nel programma sottostante con restrizioni di tipo. Scegli il tipo più ristretto necessario per mantenere il valore;

{:.quiz-code}
Int | my ␣␣␣ $a = 500;
Int | my ␣␣␣ $b = 304839573985398539853535353; | I numeri lunghi sono supportati di default.
Rat | my ␣␣␣ $c = 3.5; | Questo è un `Rat`. Nota che i valori `Num` sono scritti in notazione scientifica.
Rat | my ␣␣␣ $d = 17/19; | Anche questo è un `Rat`, e non una divisione.
Rat | my ␣␣␣ $e = <2/5>; | Questa è una delle possibili notazioni per i `Rat`.
Num | my ␣␣␣ $f = pi; | Il valore integrato di π è un valore `Num`.
Num | my ␣␣␣ $g = 3e-4;
Str | my ␣␣␣ $h = &apos;18&apos;;

{% include quiz.html %}

{% include nav.html %}