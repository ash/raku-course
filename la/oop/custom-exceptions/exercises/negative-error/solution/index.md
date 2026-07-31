---
title: 'Solutio: Error numeri negativi'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Negative is Exception {
    has $.n;

    method message {
        "$.n is negative";
    }
}

sub check($n) {
    Negative.new(n => $n).throw if $n < 0;
    return $n;
}

{
    say check(-5);

    CATCH {
        when Negative {
            say .message;
        }
    }
}

Negative.new(n => -10).throw;
```

🦋 Inveni codicem fontem in archivo [negative-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/negative-error.raku).

## Exitus

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Commentarii

1. `Negative is Exception` classem iaciendam reddit, et methodus eius `message` attributo `n` utitur ad textum aedificandum.

1. `check` introitum suum probat et exceptionem propriam pro numero negativo iacit. Exceptio ex `check` ad `CATCH` in clausula vocante migrat, ubi `when Negative` ei genere convenit nuntiumque imprimit. Introitum probare et valores malos exceptione generis notati significare est usus verus et frequentissimus exceptionum propriarum.

1. `{ … }` circa vocationem adest quia fasis `CATCH` exceptiones tractat quae in **propria clausula ambiente** iaciuntur. Clausula periculosum `check(-5)` una cum `CATCH` quae illud custodit congregat, itaque exceptio iacta hic ipso loco capitur, et exsecutio statim post clausulam resumit. Nisi ea in clausulam involuta essent, `CATCH` totum programma custodiret — et, postquam exceptionem cepisset, programma simpliciter finiret, nullo loco naturali ubi pergeret.

1. Ultimum `Negative.new(n => -10).throw` alteram huius rei partem ostendit. **Extra** clausulam sedet, itaque nihil illud capit: exceptio usque ad summum propagatur, et programma moritur, nuntium et vestigium ad errorem vulgarem imprimens et cum statu non nullo exiens. Ea est sors praedefinita cuiuslibet exceptionis quam non capis — et exacte ratio cur primus iactus `CATCH` egeret ut superesset.

{% include nav.html %}
