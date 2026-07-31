---
title: Native typen
---

{% include menu.html %}

De typen die je tot nu toe hebt gebruikt — `Int`, `Num`, `Str` — zijn volwaardige Raku-objecten: flexibel, introspecteerbaar en willekeurig groot. Raku biedt ook een parallelle familie van _native_ typen die direct overeenkomen met de representatie van de machine: `int`, `num`, `str`, en een reeks gehele getallen met vaste grootte.

Native typen worden met kleine letters geschreven. Ze ruilen flexibiliteit in voor snelheid en een vaste grootte, en ze gedragen zich een beetje anders dan hun boxed tegenhangers. Dit deel laat zien wat ze zijn en hoe hun vaste grootte tot overflow leidt.

{% include nav.html %}
