---
title: Eksporta tagi
translations_gpt:
---

{% include menu.html %}

Atzīmējot apakšprogrammu ar `is export`, tā tiek ielikta moduļa _noklusētajā_ eksporta grupā — nosaukumos, ko ienes vienkāršs `use`. Dodot `is export` _birku_, eksportus var sašķirot nosauktās grupās un ļaut katrai programmai izvēlēties vēlamo kopu.

Birku raksta iekavās aiz `is export`:

```raku
unit module Greeting;

sub hello($name)   is export            { "Hello, $name!" }
sub goodbye($name) is export(:partings) { "Goodbye, $name!" }
```

`hello` nav birkas, tāpēc tā pieder noklusētajai grupai; `goodbye` ir apzīmēta ar `:partings`.

Vienkāršs `use` importē tikai noklusēto grupu:

```raku
use Greeting;      # hello is available; goodbye is not
```

Nosaucot birku, tiek importēta tā grupa — un, iespējams, pārsteidzoši, _ne arī_ noklusētā:

```raku
use Greeting :partings; # goodbye is available; hello is not
```

Prasot `:partings`, iegūstat tieši šo grupu. Lai ievilktu visu, ko modulis eksportē, izmantojiet iebūvēto birku `:ALL`:

```raku
use Greeting :ALL; # both hello and goodbye
```

Divas īpašas birkas ir vērts zināt. `:ALL` atbalsta katrs modulis, un tā importē visus tā eksportus. `:MANDATORY` ir tāda, ko varat uzlikt rutīnai, kurai jātiek importētai neatkarīgi no tā, kuru birku izsaucējs izvēlas.

Katra birka patiesībā ir pakotne moduļa pakotnē `EXPORT` — piemēram, `Greeting::EXPORT::partings` —, un tieši to uzskaita [moduļu introspekcija](/lv/advanced/module-introspection). Birkas ļauj lielākam modulim noturēt savu noklusēto virsmu nelielu, joprojām piedāvājot papildu iespējas pēc pieprasījuma.

{% include nav.html %}
