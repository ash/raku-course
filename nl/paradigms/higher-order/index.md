---
title: Hogere-ordefuncties
translations_gpt:
---

{% include menu.html %}

In Raku is een subroutine een gewone waarde: je kunt haar in een variabele bewaren, haar aan een andere subroutine meegeven, en haar als resultaat teruggeven. Een subroutine die een andere subroutine **aanneemt** of **teruggeeft** heet een _hogere-ordefunctie_, en dat is het hart van functioneel programmeren.

Je hebt al hogere-ordefuncties gebruikt zonder ze zo te noemen — `map`, `grep` en `sort` nemen allemaal een codeblok als argument. Deze sectie laat zien hoe je die zelf schrijft.

Deze methoden die een blok aannemen zijn ook een natuurlijke plek voor de vorm met _dubbele punt_, waarmee je de haakjes kunt weglaten — `(1..10).grep: * %% 2` in plaats van `(1..10).grep(* %% 2)`. Die wordt geïntroduceerd in [Aanroepen met een dubbele punt](/nl/advanced/colon-calls), en de afkorting `*` die hij gebruikt is de [Whatever-ster](/nl/advanced/whatever).

{% include nav.html %}
