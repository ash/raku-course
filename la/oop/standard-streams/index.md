---
title: Fluxus normales
translations_gpt:
---

{% include menu.html %}

Omne programma tria _fluenta vulgaria_ habet quae illud cum ambitu suo coniungunt: exitum vulgarem, errorem vulgarem, et introitum vulgarem. Raku ea per tres variabiles speciales praesto facit: `$*OUT`, `$*ERR` et `$*IN`.

In exitum vulgarem semper adhuc scripsisti: `say` et `print` textum suum ad `$*OUT` mittunt.

```raku
say 'Hello'; # ad exitum vulgarem it
```

Nuntii diagnostici et errorum separati servantur, in errore vulgari, ne cum vero programmatis exitu misceantur. Procedura `note` illuc scribit:

```raku
note 'Something looks wrong'; # ad errorem vulgarem it
```

Haec separatio utilis est quia duo fluenta independenter redirigi possunt — exempli gratia, exitum programmatis in archivum servare potes dum nuntios errorum in screen adhuc vides.

In fluenta etiam directe scribere potes. Utrumque `$*OUT` et `$*ERR` est _tractabulum_ cum propriis methodis `say` et `print`:

```raku
$*OUT.say('a normal line');
$*ERR.say('a diagnostic line');
```

Tertium fluentum, `$*IN`, est introitus vulgaris. Ei indirecte per `prompt` occurristi, quod lineam ex eo legit. Ad introitum legendum redibimus cum [tractabula archivorum](/la/oop/file-handles) inspiciemus, quia `$*IN` tractabulum est sicut archivum apertum.

{% include nav.html %}
