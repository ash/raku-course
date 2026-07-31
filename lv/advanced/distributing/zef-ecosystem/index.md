---
title: zef un ekosistēma
translations_gpt:
---

{% include menu.html %}

`zef` ir Raku moduļu instalētājs. Jūs to jau esat izmantojuši, lai instalētu moduļus pēc nosaukuma; tas darbojas arī ar vietēju distribūcijas direktoriju. No distribūcijas iekšpuses to var tieši notestēt un instalēt:

```
zef test .
zef install .
```

`zef test .` izpilda failus zem `t/`, un `zef install .` instalē distribūciju jūsu Raku vidē, lai citas programmas to varētu `use`. Instalēšana pēc nosaukuma — `zef install Cro` — dara to pašu, vispirms lejupielādējot distribūciju no ekosistēmas.

Lai savu distribūciju **publicētu** un citi to varētu instalēt pēc nosaukuma, tā jāaugšupielādē ekosistēmā. Izplatītais rīks šim nolūkam ir `fez`:

```
fez upload
```

Tas iepako pašreizējo distribūciju un iesniedz to Raku ekosistēmā, pēc kā `zef install Maths::Simple` darbosies ikvienam.

> Šīm komandām nepieciešams instalēts `zef`/`fez` un tīkla piekļuve, bet augšupielādei — ekosistēmas konts.

Tātad koplietota moduļa dzīves cikls ir šāds: izkārtojiet to ar `META6.json`, notestējiet ar `zef test` un publicējiet ar `fez upload`. No tā brīža tas ir tikai vēl viens nosaukums, ko ikviens var `zef install`.

{% include nav.html %}
