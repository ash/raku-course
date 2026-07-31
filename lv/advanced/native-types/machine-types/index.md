---
title: Mašīnas līmeņa tipi
---

{% include menu.html %}

Natīvajiem tipiem ir nosaukumi ar mazajiem burtiem: `int`, `num` un `str`. Mainīgo ar kādu no tiem deklarē tāpat kā ar `Int` vai `Str`:

```raku
my int $i = 42;
my num $n = 3.14e0;
say $i; # 42
say $n; # 3.14
```

Natīvā vērtība tieši atbilst mašīnas reģistram vai vārdam bez iesaiņojuma objekta, kāds ir parastajai Raku vērtībai. Tas padara natīvos tipus ātrākus un kompaktākus, kas ir svarīgi intensīvās skaitliskās cilpās un lielos masīvos.

Ir viena uzvedība, kas jāzina uzreiz: natīvais mainīgais nekad nevar būt nedefinēts. Kamēr parasts `Int` konteiners sākas kā nedefinēts `Any`, natīvais `int` sākas ar **nulli**:

```raku
say (my Int $a); # (Int)
say (my int $b); # 0
```

Tas pats attiecas uz natīvajiem masīviem, kurus deklarē, liekot natīvo tipu pirms `@` mainīgā:

```raku
my int @numbers = 10, 20, 30;
say @numbers.sum; # 60
```

Šāds masīvs glabā savus elementus kā neapstrādātus mašīnas veselos skaitļus, nevis kā iesaiņotus `Int` objektus, tāpēc tas izmanto mazāk atmiņas. Introspektējot natīvo vērtību, tā automātiski tiek _iesaiņota_ atbilstošajā pilnajā tipā, tāpēc `(my int $b).WHAT` ziņo `(Int)`.

{% include nav.html %}
