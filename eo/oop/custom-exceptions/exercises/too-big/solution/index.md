---
title: 'Solvo: Tro granda'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [too-big.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/too-big.raku).

## Eligo

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Komentoj

1. `TooBig is Exception` faras la klason ĵetebla escepto. Ĝi portas du pecojn da datumoj, `value` kaj `limit`, kaj ĝia metodo `message` teksas ambaŭ en la raportitan tekston.

1. `.throw` levas la escepton, kaj `when TooBig` kongruas kun ĝi laŭ tipo. La traktilo faras pli ol presi la mesaĝon: ĝi legas la atributon `limit` rekte de la kaptita objekto por doni utilan aludon. Jen la avantaĝo de propra escepto super simpla ĉeno — la traktilo ricevas strukturitajn datumojn, laŭ kiuj ĝi povas agi.

1. La escepto estas ĵetata **nur**, kiam `$value > $limit`. Por `30`, neniu escepto estas levata kaj la buklokorpo ruliĝas ĝis sia `say`, presante, ke la valoro estas ene de la limo. Por `99` kaj `60`, la `throw` ekfunkcias, do tiu `say` estas preterlasata kaj la `CATCH` traktas ĝin anstataŭe. La korpo de `for` estas mem la bloko, kiun la `CATCH` gardas, do kaptita escepto finas nur la nunan iteracion — la buklo poste simple moviĝas al la sekva valoro.

{% include nav.html %}
