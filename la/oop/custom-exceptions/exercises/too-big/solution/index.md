---
title: 'Solutio: Nimis magnum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class TooBig is Exception {
    has $.value;
    has $.limit;

    method message {
        "Value $.value exceeds the limit of $.limit";
    }
}

my $limit = 50;

for 30, 99, 60 -> $value {
    TooBig.new(value => $value, limit => $limit).throw if $value > $limit;
    say "Value $value is within the limit";

    CATCH {
        when TooBig {
            say .message;
            say "Try a value up to {.limit}.";
        }
    }
}
```

🦋 Inveni codicem fontem in archivo [too-big.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/too-big.raku).

## Exitus

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Commentarii

1. `TooBig is Exception` classem exceptionem iaciendam reddit. Duo data fert, `value` et `limit`, et methodus eius `message` utrumque in textum nuntiatum texit.

1. `.throw` exceptionem excitat, et `when TooBig` ei genere convenit. Tractator plus agit quam nuntium imprimere: attributum `limit` recta ex obiecto capto legit ut consilium utile det. Haec est utilitas exceptionis propriae prae mera chorda — tractator data structurata accipit in quibus agere potest.

1. Exceptio **solum** tunc iacitur cum `$value > $limit`. Pro `30` nulla exceptio excitatur et corpus anuli usque ad suum `say` currit, imprimens valorem intra limitem esse. Pro `99` et `60` `throw` accenditur, itaque illud `say` praeteritur et `CATCH` loco eius tractat. Corpus `for` ipsum est clausula quam `CATCH` custodit, itaque exceptio capta solum iterationem currentem finit — anulus deinde simpliciter ad valorem sequentem movetur.

{% include nav.html %}
