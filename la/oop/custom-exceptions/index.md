---
title: Exceptiones propriae
translations_gpt:
---

{% include menu.html %}

Praeter exceptiones inbuiltas `X::`, tuas ipsius definire potes. Exceptio propria est classis quae ab inbuilta classe `Exception` heredat et methodum `message` praebet:

```raku
class TooBig is Exception {
    has $.value;

    method message {
        "Value $.value is too big";
    }
}
```

`TooBig` classis ordinaria est — attributa qualia `value` habere potest — sed quia `is Exception`, iaci potest. Eam iacis obiectum creans et `.throw` in eo vocans:

```raku
my $value = 20 * 30;

TooBig.new(value => $value).throw if $value > 50;

CATCH {
    when TooBig {
        say .message;
    }
}
```

Programma imprimit:

```
Value 600 is too big
```

Intra `CATCH`, `when TooBig` convenit quia obiectum iactum illius generis est. Exceptio propria quaecumque data ei das secum fert (hic `value`), itaque tractator nuntium accuratum aedificare vel certo modo reagere potest — multo utilius quam mera chorda ad `die` tradita.

Hoc omnia huius partis coniungit: exceptio propria est _classis_ (cum attributis et methodo) quae machinamento exceptionum interest, parata significare quid exacte male ceciderit.

{% include nav.html %}
