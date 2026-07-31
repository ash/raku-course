---
title: 'Solvo: Inversigita vorto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Word {
    has $.text;

    method reversed {
        $.text.flip;
    }
}

say Word.new(text => 'Raku').reversed;
```

🦋 Vi povas trovi la fontkodon en la dosiero [greeter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/greeter.raku).

## Eligo

```
ukaR
```

## Komentoj

1. La metodo `reversed` atingas la propran `text` de la objekto tra ĝia atingilo `$.text` kaj vokas la enkonstruitan `flip` sur ĝi, kiu redonas la ĉenon inversigita.

1. La metodo estas vokata rekte sur la ĵus kreita objekto `Word`. Nenio estas konservata reen — `reversed` simple kalkulas kaj redonas novan valoron el la atributo.

1. Notu, ke ene de la klaso vi povas legi la variablon rekte sen uzi la atingilon:

```raku
    method reversed {
        $!text.flip;
    }
```

{% include nav.html %}
