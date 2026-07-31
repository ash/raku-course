---
title: Grammaticae sunt classes
translations_gpt:
---

{% include menu.html %}

Cum `grammar` scribis, Raku aliquid classi simillimum creat. Tesserae methodi in ea sunt, et tota machina [hereditatis](/la/oop/inheritance) ex parte de obiectis valet. Itaque una grammatica alteram per `is` extendere potest, sicut classis filia:

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

`Loud` `TOP` ex `Base` heredat sed propriam `greeting` praebet. Cum `Loud` analysat, eius `TOP` `<greeting>` vocat, et tessera superscribens in `Loud` adhibetur — exacte quomodo methodus superscripta in obiectis operatur.

Hoc grammaticas componibiles reddit. Grammaticam generalem pro formato scribere potes et deinde versionem specialem derivare quae solas tesseras differentes mutat, sine ceteris exscriptis.

Etiam `.parse` quod vocare soles ex hac natura classis venit: omnis grammatica sponte ab inbuilto genere basi nomine `Grammar` heredat, quod `.parse` praebet (et consobrinam eius congruentiae partialis, `.subparse`). Illud numquam ipse scribis — gratis illud accipis, sicut classis ordinaria methodos a parente heredat.

{% include nav.html %}
