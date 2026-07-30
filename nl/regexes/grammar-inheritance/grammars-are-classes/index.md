---
title: "Grammatica's zijn klassen"
translations_gpt:
---

{% include menu.html %}

Wanneer je `grammar` schrijft, maakt Raku iets wat heel dicht bij een klasse ligt. De tokens zijn er methoden op, en de hele machinerie van [overerving](/nl/oop/inheritance) uit het deel over objecten is van toepassing. Dus de ene grammatica kan de andere met `is` uitbreiden, precies als een subklasse:

```raku
grammar Base {
    token TOP      { <greeting> }
    token greeting { 'hi' }
}

grammar Loud is Base {
    token greeting { 'HI' }
}

say Loud.parse('HI').defined; # True
say Base.parse('hi').defined; # True
```

`Loud` erft `TOP` van `Base` maar levert een eigen `greeting`. Wanneer `Loud` ontleedt, roept haar `TOP` `<greeting>` aan, en wordt het overschrijvende token in `Loud` gebruikt — precies zoals een overschreven methode op objecten werkt.

Dit maakt grammatica's samenstelbaar. Je kunt een algemene grammatica voor een formaat schrijven en daarna een gespecialiseerde versie afleiden die alleen de tokens verandert die verschillen, zonder de rest te kopiëren.

Zelfs de `.parse` die je steeds aanroept komt uit dit klassekarakter voort: elke grammatica erft automatisch van een ingebouwd basistype dat `Grammar` heet, dat `.parse` levert (en zijn neef voor gedeeltelijke matches, `.subparse`). Je schrijft die nooit zelf — je krijgt hem gratis, net zoals een gewone klasse methoden van haar ouder erft.

{% include nav.html %}
