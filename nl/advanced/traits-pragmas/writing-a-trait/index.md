---
title: Een trait schrijven
translations_gpt:
---

{% include menu.html %}

Traits zijn gewone multi-subroutines met een speciale naam, dus je kunt er zelf een schrijven. Om een trait toe te voegen die je als `is something` schrijft, definieer je een `multi sub trait_mod:<is>` waarvan de parameters zeggen waarop hij van toepassing is en hoe de trait heet:

Dit is een van de meer gevorderde hoekjes van Raku, dus geen zorgen als het ingewikkeld aanvoelt. Je kunt de ingebouwde traits prima gebruiken zonder te weten hoe ze gemaakt zijn, en je zult er zelden zelf een hoeven schrijven — beschouw deze pagina als een blik onder de motorkap.

```raku
my @traced;

multi sub trait_mod:<is>(Routine:D $r, :$traced!) {
    @traced.push($r.name);
}

sub foo() is traced { }
sub bar() is traced { }

say @traced; # [foo bar]
```

Lees de signatuur: de eerste parameter, `Routine:D $r`, is datgene waaraan de trait hangt — hier een subroutine. De `:D` is een type-_smiley_ die een **gedefinieerde** waarde eist — een echt routineobject, niet het kale, ongedefinieerde type `Routine` zelf. (Zijn partners zijn `:U`, die het ongedefinieerde typeobject vereist, en `:_`, die beide accepteert.) De benoemde parameter `:$traced!` is de naam van de trait zelf; zijn aanwezigheid is wat `is traced` deze sub laat aanroepen. Omdat traits **tijdens het compileren** draaien, worden zowel `foo` als `bar` geregistreerd zodra ze gedeclareerd worden, zodat `@traced` ze al bevat tegen de tijd dat het programma draait — je zou de regel `say @traced` zelfs boven de twee `sub`-definities kunnen zetten en hij zou nog steeds `[foo bar]` afdrukken.

Deze piepkleine trait legt alleen namen vast, maar hetzelfde mechanisme kan veel meer: een routine omwikkelen om logging toe te voegen, een attribuut valideren of metadata aanhangen. Door de eerste parameter als `Attribute` of `Variable` te schrijven in plaats van als `Routine`, laat je een trait op attributen of variabelen werken. Traits zijn de manier waarop Raku zijn declaratiesyntaxis open houdt — `is rw` en je eigen `is traced` zijn op dezelfde manier gebouwd.

{% include nav.html %}
