---
title: Private attributen
translations_gpt:
---

{% include menu.html %}

In de [sectie over attributen](/nl/oop/attributes) werd elk attribuut met `$.` gedeclareerd, wat een publieke accessor maakt. Een attribuut dat in plaats daarvan met `$!` gedeclareerd wordt, is _private_: het heeft geen accessor en is van buiten het object niet te zien. Het is alleen bereikbaar vanuit de eigen methoden van de klasse, waar je ernaar verwijst als `$!name`.

```raku
class Safe {
    has $!code = 4321;

    method unlocks($attempt) {
        return $attempt == $!code;
    }
}

my $safe = Safe.new;
say $safe.unlocks(4321); # True
say $safe.unlocks(1111); # False
```

De geheime `$!code` wordt binnen het object bewaard maar nooit prijsgegeven: er is geen accessor `.code`, dus de enige manier om ermee om te gaan is via de methode `unlocks` die de klasse bewust aanbiedt. Een poging om `$safe.code` of `$safe!code` te lezen mislukt eenvoudigweg.

Private attributen zijn nuttig voor interne details waar de rest van het programma niet rechtstreeks aan mag komen.

{% include nav.html %}
