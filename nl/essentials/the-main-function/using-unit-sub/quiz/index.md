---
title: Quiz — Using the unit-scoped definition
---

{% include menu.html %}

## 1

Kies een van de declarators om het programma correct te maken.

{:.quiz-select}
unit | (: mijn, multi, unit :) `sub MAIN(Str $name);`
. | `zeg "Hallo, $name!";`

## 2

Geef aan of het programma correct is.

```raku
unit sub MAIN(Str $name) {
    zeg "Hallo, $name!";
}
```

{:.quiz-select}
valid | Dit programma is&nbsp; (: geldig, ongeldig :) | Ondanks de aanwezigheid van `unit`, kun je nog steeds accolades toevoegen, maar dat is overbodig.

## 3

Is dit programma correct?

```raku
unit multi sub MAIN() {
    zeg 'Hallo, iedereen!';
}

unit multi sub MAIN($name) {
    zeg "Hallo, $name!";
}
```

{:.quiz-select}
invalid | Dit programma is&nbsp; (: geldig, ongeldig :) | Fout: `Kan 'unit' niet gebruiken met individuele multi kandidaten.`

{% include quiz.html %}

{% include nav.html %}