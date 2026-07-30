---
title: Eigen excepties
translations_gpt:
---

{% include menu.html %}

Naast de ingebouwde `X::`-excepties kun je je eigen excepties definiëren. Een eigen exceptie is een klasse die van de ingebouwde klasse `Exception` erft en een methode `message` levert:

```raku
class TooBig is Exception {
    has $.value;

    method message {
        "Value $.value is too big";
    }
}
```

`TooBig` is een gewone klasse — hij kan attributen als `value` hebben — maar omdat hij `is Exception`, kan hij geworpen worden. Je werpt hem door een object te maken en er `.throw` op aan te roepen:

```raku
my $value = 20 * 30;

TooBig.new(value => $value).throw if $value > 50;

CATCH {
    when TooBig {
        say .message;
    }
}
```

Het programma drukt af:

```
Value 600 is too big
```

Binnen de `CATCH` matcht `when TooBig` omdat het geworpen object van dat type is. Een eigen exceptie draagt alle gegevens mee die je haar meegeeft (hier de `value`), zodat de afhandelaar een nauwkeurige melding kan opbouwen of op een specifieke manier kan reageren — veel nuttiger dan een kale string die aan `die` wordt meegegeven.

Dit brengt alles uit dit deel samen: een eigen exceptie is een _klasse_ (met attributen en een methode) die meedoet in het exceptiemechanisme, klaar om precies te melden wat er misging.

{% include nav.html %}
