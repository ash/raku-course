---
title: Een rol aan een object toevoegen
translations_gpt:
---

{% include menu.html %}

Een rol hoeft niet in een klasse ingebakken te zijn. Je kunt er ook een geven aan een object dat al bestaat, met de operator `but`. Die mengt de rol tijdens het draaien in één enkel object en geeft een nieuw object terug dat de rol speelt:

```raku
role Loud {
    method greet {
        callsame().uc;
    }
}

class Greeter {
    method greet {
        'Hello';
    }
}

my $quiet = Greeter.new;
my $loud  = Greeter.new but Loud;

say $quiet.greet; # Hello
say $loud.greet;  # HELLO
```

Alleen `$loud` kreeg de rol erbij. De klasse `Greeter` en elk ander `Greeter`-object blijven onaangeroerd, dus `$quiet` groet nog steeds op de gewone manier. Wanneer de rol en de klasse allebei een methode met dezelfde naam definiëren, wint de versie van de rol, en `callsame` roept degene aan die overschreven werd — hier de oorspronkelijke `greet` uit `Greeter`, waarvan het resultaat vervolgens in hoofdletters wordt gezet.

Een object waarin een rol gemengd is, wordt herkend als doende die rol:

```raku
say $quiet ~~ Loud; # False
say $loud  ~~ Loud; # True
```

`but` laat het oorspronkelijke object zoals het was en geeft je een nieuw object. Als je liever een bestaand object ter plaatse wijzigt, gebruik dan de operator `does`:

```raku
my $speaker = Greeter.new;
$speaker does Loud;
say $speaker.greet; # HELLO
```

Rollen in afzonderlijke objecten mengen laat je per object beslissen welk extra gedrag het moet aannemen — zonder voor elke combinatie een aparte klasse te definiëren.

{% include nav.html %}
