---
title: De `CATCH`-faser
translations_gpt:
---

{% include menu.html %}

Het `try`-blok is handig, maar het behandelt het hele blok als één geheel: of het werkt, of het werkt niet. De `CATCH`-faser geeft je fijnere controle — hij laat je een exceptie afhandelen _binnen_ het blok waar ze optrad, en beslissen wat er moet gebeuren.

`CATCH` is een faser, net als die uit de [sectie over besturingsstructuren](/nl/advanced/phasers). Je schrijft hem ergens binnen een blok; hij draait alleen als daar een exceptie geworpen wordt. De exceptie is beschikbaar als het onderwerp `$_`:

```raku
{
    die 'Boom!';

    CATCH {
        default {
            say 'Caught: ' ~ .message;
        }
    }
}

say 'after';
```

Het programma drukt af:

```
Caught: Boom!
after
```

Het `default`-blok binnen `CATCH` handelt elke exceptie af. Zodra het gedraaid heeft, geldt de exceptie als afgehandeld, dus stopt het programma niet — de uitvoering gaat verder na het omvattende blok, en daarom wordt `after` afgedrukt.

Zonder de `CATCH` zou de `die` het programma beëindigd hebben voordat `after` bereikt kon worden.

{% include nav.html %}
