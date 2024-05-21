---
title: Functieparameters
---

{% include menu.html %}

Het is tijd om wat gegevens door te geven aan een functie. Deze kan parameters aannemen die tussen haakjes direct na de naam van de functie worden vermeld.

```raku
sub greet($name) {
    say "Hallo, $name!";
}
```

Je kunt nu de functie gebruiken en er verschillende argumenten aan doorgeven:

```raku
greet('Alla');
greet('Karl');
```

De twee aanroepen van dezelfde functie zullen nu verschillende resultaten opleveren:

```console
$ raku t.raku
Hallo, Alla!
Hallo, Karl!
```

%%tipblock

## Parameter of argument

Deze termen worden vaak door elkaar gebruikt. Ze verwijzen beide naar 'hetzelfde ding', maar bekijken het vanuit verschillende perspectieven.

* Een parameter is wat de functie verwacht.
* Een argument is wat je eraan doorgeeft.

In het bovenstaande voorbeeld is `$name` de parameter van de functie, terwijl `'Alla'` en `'Karl'` de argumenten zijn.

%%/tipblock

## Meer parameters

Een functie kan meer dan één parameter aannemen. In dit geval, som je ze allemaal op, gescheiden door komma's:

```raku
sub add($x, $y) {
    say $x + $y;
}

add(10, 20); # 30
```

## Geen parameters

Het is een geldig geval wanneer de functie helemaal geen parameters aanneemt. In dit geval kun je ofwel een leeg paar haakjes toevoegen of ze helemaal weglaten, zoals we aan [het begin van deze sectie](../) deden.

```raku
sub greet() {
    say 'Hallo, Wereld!';
}

greet();
```

## Handtekening

De lijst van parameters van een functie wordt een _handtekening_ genoemd.

{% include nav.html %}