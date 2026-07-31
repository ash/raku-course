---
title: De Test-module
translations_gpt:
---

{% include menu.html %}

Laad de testtools met `use Test`. De meest basale controle is `ok`, die slaagt wanneer de voorwaarde waar is. Elke controle accepteert een optionele beschrijving:

```raku
use Test;

ok 1 == 1, 'one equals one';
ok 2 > 1,  'two is greater';

done-testing;
```

Dit geeft de volgende uitvoer, in het standaard testformaat bekend als _TAP_:

```
ok 1 - one equals one
ok 2 - two is greater
1..2
```

Elke geslaagde controle wordt gerapporteerd als `ok` met het nummer en de beschrijving; een falende controle zou `not ok` zijn. De laatste regel `1..2` is het _plan_, dat aangeeft hoeveel tests er zijn uitgevoerd. De `done-testing`-aanroep aan het einde genereert dat plan automatisch.

Wanneer je een specifieke waarde verwacht, is `is` duidelijker dan `ok`, omdat het bij een fout zowel de verwachte als de werkelijke waarde toont:

```raku
use Test;

is 2 + 2, 4, 'addition works';

done-testing;
```

Dit geeft `ok 1 - addition works`. Om die rapportage in actie te zien, geef je `is` een verkeerde verwachting:

```raku
use Test;

is 2 + 2, 5, 'addition works';

done-testing;
```

Nu faalt de controle, en de uitvoer legt precies uit hoe:

```
not ok 1 - addition works
# Failed test 'addition works'
# at test.raku line 3
# expected: '5'
#      got: '4'
1..1
# You failed 1 test of 1
```

De `not ok`-regel markeert de fout, en de diagnostische regels eronder tonen wat verwacht werd tegenover wat er daadwerkelijk uitkwam — daarom is `is` nuttiger dan een kale `ok` wanneer een specifieke waarde van belang is.

`ok`, `is` en `done-testing` zijn al voldoende om een bruikbaar testbestand te schrijven; het volgende onderwerp voegt [de andere vergelijkingen](/nl/advanced/testing/comparisons) toe.

{% include nav.html %}
