---
title: Litterales et classes litterarum
translations_gpt:
---

{% include menu.html %}

_Regex_ (breviter pro _expressione regulari_) est exemplar quod partem textus describit. Per regex quaestiones petere potes quales «continetne haec catena numerum?» vel «incipitne hoc verbum littera maiuscula?», et partes ex catena extrahere vel eas mutare potes.

Raku expressiones regulares praesertim potentes et legibiles habet, et in ipsam linguam insertae sunt. Simplicissimus modus unam scribendi est inter duas lineolas obliquas:

```raku
/cat/
```

Hoc exemplar tres litteras `c`, `a`, `t` deinceps congruit. Ut catenam contra exemplar probes, utere operatore congruentiae sagacis `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Cum exemplar invenitur, Raku partem catenae quae congruit nuntiat, inter uncos angulares `｢ ｣` ostensam. Hunc effectum propius in sectione sequenti inspicies.

In hac prima sectione disces quomodo textum exactum (_litteralem_) congruas, et quomodo characterem congruas qui unus ex pluribus esse possit — _classem characterum_. Sectiones sequentes deinde [quantificatores](/la/regexes/quantifiers), [capturas](/la/regexes/captures), et cetera omnia addunt quae expressiones regulares tam utiles reddunt.

{% include nav.html %}
