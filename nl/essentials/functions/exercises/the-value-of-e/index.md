---
title: 'Oefening: De waarde van e'
---

{% include menu.html %}

## Probleem

Maak een functie die een benaderde waarde van de wiskundige constante _e_ berekent met behulp van de volgende formule:

<img src="e-formula.png" style="height: 4.5em; width: auto">

Deze functie moet op een van de volgende manieren kunnen worden aangeroepen:

1. Het argument bepaalt het aantal termen in de formule: `e-approx(10)`.
2. Als er geen argument wordt doorgegeven, bevat de som 100 elementen: `e-approx()`.

Print de resultaten voor beide gevallen.

## Voorbeeld

```console
$ raku the-value-of-e.raku
2.7182818
2.718281828459045
```

## Oplossing

✅ [Zie de oplossing](solution)

{% include nav.html %}