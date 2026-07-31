---
title: Booleaj operacioj kun aliaj tipoj
---

{% include menu.html %}

En la sekva sekcio, ni parolos pri konvertado de datumoj de malsamaj tipoj unu al la alia. Sed antaŭ tio, estas grave reliefigi la sekvan trajton de Raku. Kiam vi aplikas Booleajn operaciojn al ĉenoj aŭ entjeroj, la valoroj ne estas konvertitaj al Booleaj, kaj la rezulto ankaŭ ne estas Boolea valoro. Konsideru la jenajn ekzemplojn:

```raku
say 'Hello' && 'World'; # World
say 'Alpha' || 'Beta';  # Alpha
say 0 ^^ 42;            # 42
```

Ni legu la regulojn 📖 [el la dokumentaro](https://docs.raku.org/language/operators#Tight_AND_precedence):

* `&&` redonas la unuan argumenton, kiu taksiĝas kiel Falsa en Boolea kunteksto, alie redonas la lastan argumenton.
* `||` redonas la unuan argumenton, kiu taksiĝas kiel Vera en Boolea kunteksto, alie redonas la lastan argumenton.
* `^^` redonas la Veran argumenton se estas unu (kaj nur unu). Redonas la lastan argumenton se ĉiuj argumentoj estas Falsaj. Redonas `Nil` kiam pli ol unu argumento estas vera.

Notu, ke ni ĵus renkontis ‘nul’ valoron `Nil`.

{% include nav.html %}