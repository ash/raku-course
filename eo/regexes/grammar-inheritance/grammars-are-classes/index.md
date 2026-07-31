---
title: Gramatikoj estas klasoj
translations_gpt:
---

{% include menu.html %}

Kiam vi skribas `grammar`, Raku kreas ion tre proksiman al klaso. La ĵetonoj estas metodoj sur ĝi, kaj la tuta maŝinaro de [heredo](/eo/oop/inheritance) el la parto pri objektoj aplikiĝas. Do unu gramatiko povas etendi alian per `is`, ĝuste kiel subklaso:

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

`Loud` heredas `TOP` de `Base` sed provizas sian propran `greeting`. Kiam `Loud` analizas, ĝia `TOP` vokas `<greeting>`, kaj la superreganta ĵetono en `Loud` estas uzata — ekzakte kiel superregita metodo funkcias sur objektoj.

Tio faras gramatikojn kunmeteblaj. Vi povas skribi ĝeneralan gramatikon por formato kaj poste derivi specialigitan version, kiu ŝanĝas nur la ĵetonojn, kiuj diferencas, sen kopii la reston.

Eĉ la `.parse`, kiun vi daŭre vokas, venas de ĉi tiu klasa naturo: ĉiu gramatiko aŭtomate heredas de enkonstruita baza tipo nomata `Grammar`, kiu provizas `.parse` (kaj ĝian part-kongruan kuzon, `.subparse`). Vi neniam skribas ĝin mem — vi ricevas ĝin senpage, ĝuste kiel ordinara klaso heredas metodojn de sia patro.

{% include nav.html %}
