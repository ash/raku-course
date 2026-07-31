---
title: Moduļu izveide
translations_gpt:
---

{% include menu.html %}

Programmām augot, noder tās sadalīt atkārtoti izmantojamos gabalos. _Modulis_ ir koda vienība, kas glabājas savā failā un ko citas programmas var ielādēt un izmantot.

Moduļa failam ir paplašinājums `.rakumod`, un tas sākas ar moduļa nosaukšanu ar `unit module`. Apakšprogrammas, ko rakstāt iekšpusē, pēc noklusējuma ir privātas; lai kādu no tām padarītu pieejamu kodam, kas moduli izmanto, atzīmējiet to ar iezīmi `is export`.

Lūk, modulis, kas glabājas failā ar nosaukumu `Greeting.rakumod`:

```raku
unit module Greeting;

sub hello($name) is export {
    return "Hello, $name!";
}
```

Apakšprogramma `hello` nes `is export`, tāpēc tā būs redzama ikvienai programmai, kas moduli izmanto. Apakšprogramma bez `is export` paliktu modulim privāta.

Modulis var koplietot arī datus caur `our` mainīgajiem, kas kļūst sasniedzami caur moduļa nosaukumu. Versijas numura pievienošana `Greeting` ir tikpat vienkārša kā vēl viena rinda failā:

```raku
our $version = '1.0';
```

Ar šo rindu failā `Greeting.rakumod` vērtība ir pieejama kā `$Greeting::version` visur, kur modulis ielādēts.

Nākamie temati parāda, [kā programma šādu moduli ielādē](/lv/advanced/modules-basics/using-modules) un ko tieši tā no tā iegūst.

{% include nav.html %}
