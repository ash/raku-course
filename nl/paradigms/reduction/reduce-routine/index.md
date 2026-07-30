---
title: De routine reduce
translations_gpt:
---

{% include menu.html %}

Wanneer je met een eigen bewerking wilt reduceren in plaats van met één benoemde operator, gebruik je de routine `reduce`. Zij neemt een blok met twee argumenten aan en past het over de lijst toe, waarbij ze het lopende resultaat meedraagt:

```raku
say (1..5).reduce(* + *); # 15
```

Het blok `* + *` heeft twee [Whatever](/nl/advanced/whatever)-sterren: de eerste is het resultaat tot nu toe, de tweede is het volgende element. Dus `reduce` berekent `((((1 + 2) + 3) + 4) + 5)`, dat wil zeggen `15` — hetzelfde als `[+]`, maar als blok geschreven.

Om die twee argumenten aan het werk te zien, geef je ze namen en druk je elke stap af. Een pointy block geeft zijn laatste uitdrukking terug, dus `$x + $y` is zowel waar het blok over afdrukt als de waarde die het aan `reduce` teruggeeft:

```raku
say (1..5).reduce(
    -> $x, $y {
        say "$x + $y";
        $x + $y;
    }
);
```

Dit drukt af:

```
1 + 2
3 + 3
6 + 4
10 + 5
15
```

Elk van de eerste vier regels is één aanroep van het blok. `$x` is het tot dan toe opgebouwde resultaat en `$y` is het volgende element uit de lijst. De allereerste aanroep krijgt de eerste twee waarden van de lijst, `1` en `2`; elke latere aanroep krijgt de som van de vorige stap als `$x` terug — `3`, dan `6`, dan `10` — gekoppeld aan het volgende getal als `$y`. De waarde van het blok wordt de `$x` van de volgende aanroep, en de eindsom, `15`, is wat `reduce` teruggeeft en `say` op de laatste regel afdrukt.

Omdat het blok van alles kan zijn, is `reduce` algemener. Bouw bijvoorbeeld stap voor stap een waarde op:

```raku
say (1..4).reduce(-> $acc, $x { $acc * 10 + $x }); # 1234
```

Elke stap vermenigvuldigt de accumulator met tien en telt het volgende cijfer erbij op, waarmee de losse cijfers `1, 2, 3, 4` het getal `1234` worden.

Net als de andere methoden die een blok aannemen leest `reduce` goed met de vorm met [dubbele punt](/nl/advanced/colon-calls), die de haakjes om het blok weglaat:

```raku
say (1..5).reduce: * + *; # 15
```

Kort gezegd: `[op]` is de snelle vorm voor een benoemde operator, en `reduce` is de flexibele vorm voor een willekeurig combinerend blok. Beide vouwen een lijst tot één enkele waarde samen.

{% include nav.html %}
