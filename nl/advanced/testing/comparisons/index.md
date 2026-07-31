---
title: Vergelijkingen en plannen
translations_gpt:
---

{% include menu.html %}

Naast `ok` en `is` heeft de `Test`-module vergelijkingen voor verschillende soorten waarden. De meest bruikbare zijn:

* `is` — vergelijkt twee waarden op gelijkheid (als strings/getallen)
* `is-deeply` — vergelijkt twee datastructuren op exacte, typebewuste gelijkheid
* `like` — controleert of een string overeenkomt met een regex
* `isnt` — slaagt wanneer twee waarden **niet** gelijk zijn

`is-deeply` is de juiste keuze voor arrays, hashes en geneste data, omdat het structuur en type nauwkeurig vergelijkt:

```raku
use Test;

my @reversed = (1, 2, 3).reverse;
is-deeply @reversed, [3, 2, 1], 'reversed';

done-testing;
```

Dit geeft:

```
ok 1 - reversed
1..1
```

Waar `is` zou omzetten naar strings en losjes zou vergelijken, eist `is-deeply` dat de structuren werkelijk overeenkomen. Merk op dat `done-testing` het plan `1..1` aan het einde plaatst, na de controle.

In plaats van `done-testing` de tests voor je te laten tellen, kun je het aantal vooraf opgeven met `plan`. Dit beschermt tegen een testbestand dat vroegtijdig afsluit en stilletjes controles overslaat:

```raku
use Test;

plan 2;
ok True,  'first';
ok 1 < 2, 'second';
```

Dit keer komt het plan **eerst**, voor de resultaten:

```
1..2
ok 1 - first
ok 2 - second
```

Dat is het zichtbare verschil met `done-testing`: `plan` toont het aantal `1..2` bovenaan, voordat er controles worden uitgevoerd, terwijl `done-testing` het helemaal aan het einde toont. Hoe dan ook, met `plan 2` verwacht de uitvoering precies twee tests; als er minder (of meer) daadwerkelijk worden uitgevoerd, wordt de suite als mislukt gerapporteerd. Gebruik `plan` wanneer het aantal vaststaat en bekend is, en `done-testing` wanneer het makkelijker is om het framework te laten tellen.

{% include nav.html %}
