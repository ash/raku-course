---
title: 'Oefening: Vervang met antoniemen'
---

{% include menu.html %}

## Probleem

Maak een programma dat alle woorden van de opdrachtregel vervangt door hun antoniemen. Als het woord ontbreekt in het woordenboek, wijzig het dan niet en print het zoals het is.

Gebruik een hard-coded hash om het woordenboek van antoniemen bij te houden. Voor uw gemak is hier een voorbereide lijst van ongeveer 200 paren die u direct in uw programma kunt kopiëren en plakken: [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku). Alle paren worden in beide richtingen bewaard, bijvoorbeeld:

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    # . . .
    'below' => 'above',
    # . . .
    'present' => 'absent',
    # . . .
;
```

Maak het programma zo eenvoudig mogelijk en print de woorden regel voor regel.

## Voorbeeld

Voer het programma uit en geef een paar woorden door. Zorg ervoor dat ten minste enkele van de woorden in het woordenboek kunnen worden gevonden.

```console
$ raku replace-with-antonyms.raku a quiet teacher wants to buy some salt
a
noisy
student
wants
to
sell
some
sugar
```

## Oplossing

✅ [Zie de oplossing](solution)

{% include nav.html %}