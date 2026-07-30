---
title: Recursie met multi-subs
translations_gpt:
---

{% include menu.html %}

Tot nu toe was het basisgeval een regel _binnen_ de subroutine — een ternaire uitdrukking of een vroege `return` die het argument controleert. Raku biedt een expressievere manier om hetzelfde te schrijven. Omdat een subroutine meerdere `multi`-kandidaten kan hebben, kun je het basisgeval en de recursieve stap **elk hun eigen subroutine** geven en meervoudige dispatch voor elke aanroep de juiste laten kiezen.

Denk terug aan de faculteit. Met `multi` worden haar twee gevallen twee subroutines:

```raku
multi fact(0)  { 1 }
multi fact($n) { $n * fact($n - 1) }

say fact(5); # 120
```

De eerste kandidaat matcht alleen wanneer het argument precies `0` is — die literal in de signatuur *is* het basisgeval. Elke andere aanroep gaat naar de tweede kandidaat, die vermenigvuldigt en recursief aanroept. Wanneer `fact($n - 1)` eindelijk `0` bereikt, schakelt de dispatch naar de eerste kandidaat en wikkelt de keten van aanroepen zich af. Het basisgeval is niet langer een tak die diep in de body verstopt zit; het is een subroutine die voor één enkele waarde bestaat.

Waarom `0` en niet `1`? Omdat elke stap er één aftrekt, komt elk beginnend getal uiteindelijk precies op `0` uit, en `0!` is gedefinieerd als `1` — dus `0` is waar de afdaling werkelijk eindigt. Een literalkandidaat matcht één *exacte* waarde, dus een basis `multi fact(1)` zou `fact(1)` correct berekenen maar `fact(0)` naar `multi fact($n)` laten doorvallen en eeuwig voorbij nul recursief blijven aanroepen. Bij `0` stoppen houdt de subroutine correct voor elk niet-negatief geheel getal, `fact(0)` inbegrepen.

Dit leest bijzonder goed wanneer er meer dan één basisgeval is. Fibonacci heeft er twee nodig:

```raku
multi fib(0) { 0 }
multi fib(1) { 1 }
multi fib($n) { fib($n - 1) + fib($n - 2) }

say fib(10); # 55
```

Elk basisgeval is een eigen kandidaat van één regel, en de recursieve kandidaat handelt al het overige af — geen geneste voorwaarden.

Een literal als `0` matcht alleen die exacte waarde. Wanneer het basisgeval een _bereik_ omvat — "`$n` is `1` of minder" — gebruik je in plaats daarvan een `where`-beperking:

```raku
multi fact($n where * <= 1) { 1 }
multi fact($n)              { $n * fact($n - 1) }

say fact(6); # 720
```

De beperkte kandidaat is specifieker, dus Raku probeert hem eerst; de kale `$n`-kandidaat vangt al het andere op.

Dezelfde discipline als eerder geldt nog steeds: elk recursief pad moet een basisgevalkandidaat bereiken. De faculteit met de literal `0` is bijvoorbeeld alleen veilig voor niet-negatieve gehele getallen — `fact(-1)` zou voorbij `0` stappen en eeuwig recursief blijven aanroepen, omdat er nooit een kandidaat matcht. De gevallen over `multi`-subs verdelen neemt de noodzaak van een basisgeval niet weg; het geeft dat basisgeval alleen een eigen naam en een eigen plek.

{% include nav.html %}
