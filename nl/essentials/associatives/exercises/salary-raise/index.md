---
title: 'Oefening: Salarisverhoging'
---

{% include menu.html %}

## Probleem

Gegeven een hash met de gegevens van een werknemer:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;
```

Verhoog het salaris met 5&thinsp;% en print het samen met de naam van de werknemer. Zorg ervoor dat de `%employee` hash de juiste waarden behoudt na de verhoging.

## Voorbeeld

Hier is de verwachte output van het programma:

```console
$ raku salary-raise.raku
Nieuw salaris van Eliza Vents: 3150
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}