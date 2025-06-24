---
title: Let op de spatie
---

{% include menu.html %}

Het gebruik van functies in Raku is meestal intuïtief en veroorzaakt geen problemen, maar je moet gewaarschuwd worden voor het volgende aspect.

## TL;DR

Voeg geen spatie toe tussen de naam van de functie en de haakjes met de argumenten. Maar gebruik een spatie na `for` en `if`.

## Lang verhaal

Laten we een eenvoudige functie nemen:

```raku
sub f($x, $y) {
    return $x + $y;
}
```

Let allereerst op de afwezigheid van spaties tussen de naam van de functie en de openingshaakjes die de parameters bevatten. Sommige codestijlen in andere talen kunnen daar een spatie vereisen. Raku vindt dat prima, maar dit is geen praktijk om te volgen:

```raku
sub f ($x, $y) {
    return $x + $y;
}
```

Aan de aanroepzijde is de afwezigheid van spatie belangrijk. Als je de functie aanroept en de haakjes weglaat, dan is de spatie na de naam van de functie onvermijdelijk:

```raku
f 5, 6;
```

Maar als je haakjes toevoegt, kun je geen spatie ervoor hebben. Dit is een correcte aanroep:

```raku
f(5, 6);
```

En deze aanroep is fout:

```raku
f (5, 6);
```

Dergelijke code veroorzaakt een uitzondering:

    Too few positionals passed; expected 2 arguments but got 1
      sub f at t.raku line 1
      in block <unit> at t.raku line 5

Raku ziet de aanroep met een spatie `f (5, 6)` als een poging om een enkel argument `(5, 6)` aan de functie door te geven. Je kunt het type van dit argument gemakkelijk controleren als je de functie herschrijft om slechts één argument te accepteren:

```raku
sub f($param) {
    say $param.WHAT;
}

f (5, 6); # (List)
```

Dus, het aanroepen van `f (5, 6)` betekent dat we een [lijst](/nl/essentials/positionals/lists) aan de functie doorgeven. De lijst als een enkele entiteit. 

## Wanneer spatie nodig is

In sommige gevallen is het spatiekarakter nodig. Dat gebeurt wanneer je haakjes gebruikt met een van de sleutelwoorden, zoals `if` of `for` of `loop`. De volgende code is fout:

```raku
if(True != False) {
    say 'OK';
}
```

Het foutbericht legt uit wat er mis is:

    ===SORRY!===
    The word 'if' is interpreted as a 'if()' function call.  Please use
    whitespace instead of parentheses.
    at /Users/ash/raku-course/t.raku:1
    ------> if⏏(True != False) {
    Unexpected block in infix position (two terms in a row)
    at /Users/ash/raku-course/t.raku:1
    ------> if(True != False)⏏ {

In het geval van `if` zijn haakjes helemaal niet nodig, dus het probleem heeft geen kans om te verschijnen als je ze niet gebruikt. Maar in sommige gevallen, zoals bijvoorbeeld met `loop`, moet je ze hebben, en wordt de spatie verplicht:

```raku
loop(my $c = 0; $c != 10; $c++) { say $c }
```

In deze code gebeurt hetzelfde: `loop(...)` wordt door de compiler begrepen als een functieaanroep. Voeg een spatie toe om het probleem op te lossen. Of herschrijf het fragment beter met `for`.

## Conclusie

Kortom: om dergelijke problemen te vermijden, voeg geen spatie toe tussen de naam van de functie en de haakjes met de argumenten van de functie en probeer haakjes te vermijden als dat mogelijk is met andere taalconstructies zoals controleflow.

{% include nav.html %}