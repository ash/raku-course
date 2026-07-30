---
title: Export-tags
translations_gpt: Exporttags
---

{% include menu.html %}

Het markeren van een subroutine met `is export` plaatst deze in de _standaard_ exportgroep van een module — de namen die een gewone `use` binnenhaalt. Door `is export` een _tag_ mee te geven, kun je exports in benoemde groepen sorteren en elk programma de gewenste set laten kiezen.

Een tag wordt tussen haakjes geschreven na `is export`:

```raku
unit module Greeting;

sub hello($name)   is export            { "Hello, $name!" }
sub goodbye($name) is export(:partings) { "Goodbye, $name!" }
```

`hello` heeft geen tag, dus het hoort bij de standaardgroep; `goodbye` is getagd met `:partings`.

Een gewone `use` importeert alleen de standaardgroep:

```raku
use Greeting;      # hello is beschikbaar; goodbye niet
```

Het noemen van een tag importeert die groep in plaats daarvan — en, misschien verrassend, _niet_ ook de standaardgroep:

```raku
use Greeting :partings; # goodbye is beschikbaar; hello niet
```

Vragen om `:partings` geeft je precies die groep. Om alles te importeren wat een module exporteert, gebruik je de ingebouwde `:ALL`-tag:

```raku
use Greeting :ALL; # zowel hello als goodbye
```

Twee speciale tags zijn het vermelden waard. `:ALL` wordt door elke module ondersteund en importeert al diens exports. `:MANDATORY` is een tag die je op een routine kunt plaatsen die altijd geïmporteerd moet worden, ongeacht welke tag de aanroeper kiest.

Elke tag is in feite een pakket binnen het `EXPORT`-pakket van de module — bijvoorbeeld `Greeting::EXPORT::partings` — wat precies is wat [module-introspectie](/nl/advanced/module-introspection) toont. Tags laten een grotere module zijn standaardoppervlak klein houden terwijl het toch extra functies op verzoek aanbiedt.

{% include nav.html %}
