---
title: Eksportaj etikedoj
---

{% include menu.html %}

Markado de subprogramo per `is export` metas ĝin en la _defaŭltan_ eksportgrupon de modulo — la nomojn, kiujn simpla `use` alportas. Donante al `is export` _etikedon_, vi povas ordigi eksportojn en nomitajn grupojn kaj lasi ĉiun programon elekti la aron, kiun ĝi volas.

Etikedo estas skribita en krampoj post `is export`:

```raku
unit module Greeting;

sub hello($name)   is export            { "Hello, $name!" }
sub goodbye($name) is export(:partings) { "Goodbye, $name!" }
```

`hello` ne havas etikedon, do ĝi apartenas al la defaŭlta grupo; `goodbye` estas etikedita per `:partings`.

Simpla `use` importas nur la defaŭltan grupon:

```raku
use Greeting;      # hello estas disponebla; goodbye ne estas
```

Nomante etikedon importas tiun grupon anstataŭe — kaj, eble surprize, _ne_ la defaŭltan kune:

```raku
use Greeting :partings; # goodbye estas disponebla; hello ne estas
```

Petante `:partings` donas al vi ĝuste tiun grupon. Por enporti ĉion, kion modulo eksportas, uzu la enkonstruitan etikedon `:ALL`:

```raku
use Greeting :ALL; # ambaŭ hello kaj goodbye
```

Du specialaj etikedoj indas scii. `:ALL` estas subtenata de ĉiu modulo kaj importas ĉiujn ĝiajn eksportojn. `:MANDATORY` estas tia, kiun vi povas meti sur rutinon, kiu estu importita sendepende de tio, kiun etikedon la vokanto elektas.

Ĉiu etikedo estas fakte pako ene de la `EXPORT`-pako de la modulo — `Greeting::EXPORT::partings`, ekzemple — kio estas precize tio, kion [modula introspekto](/eo/advanced/module-introspection) listigas. Etikedoj permesas al pli granda modulo teni sian defaŭltan surfacon malgranda, samtempe daŭre ofertante pliajn funkciojn laŭpete.

{% include nav.html %}
