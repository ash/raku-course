---
title: Amplekso de adverboj
translations_gpt:
---

{% include menu.html %}

La adverbo `:i` povas esti skribita en du lokoj, kaj la diferenco estas, **kie ĝi efikas**. Sur la operatoro, `m:i/…/` igas la **tutan** ŝablonon usklec-indiferenta. Skribita ene de la regulesprimo, `:i` estas _pozicia_ — ĝi aplikiĝas nur ekde la punkto, kie ĝi aperas, antaŭen. Tio permesas al vi malstreĉi la usklecan regulon por nur parto de ŝablono:

```raku
say 'RAKU' ~~ /R :i aku/; # ｢RAKU｣
say 'raku' ~~ /R :i aku/; # Nil
```

Ĉi tie la komenca `R` estas ankoraŭ kongruigata usklec-sentive — do minuskla `raku` malsukcesas — dum `:i` faras usklec-indiferenta nur la `aku`, kiu sekvas. Kun `m:i/Raku/`, male, ĉiu litero estas usklec-indiferenta, do kaj `RAKU` kaj `raku` kongruas.

## Limigita al grupo

La efiko de interna adverbo estas ankaŭ limigita al sia ĉirkaŭa grupo. En `/[:i abc]def/` nur `abc` ignoras usklecon; la `def` post la grupo estas kongruigata strikte:

```raku
say 'ABCdef' ~~ /[:i abc]def/; # ｢ABCdef｣
say 'ABCDEF' ~~ /[:i abc]def/; # Nil
```

## Malŝalti adverbon

Por malŝalti adverbon meze de ŝablono, neu ĝin per `!`. Do `:!i` restarigas usklecan sentemon ekde tiu punkto:

```raku
say 'ABCdef' ~~ / :i abc :!i def /; # ｢ABCdef｣
say 'ABCDEF' ~~ / :i abc :!i def /; # Nil
```

`:i` malstreĉas la usklecan regulon por `abc`, poste `:!i` remetas ĝin, do `def` devas kongrui ekzakte. Grupigo kaj `:!i` estas du manieroj atingi la saman celon: limigi adverbon al nur la parto de la ŝablono, kiu bezonas ĝin. La sama ŝaltilo funkcias ankaŭ por la aliaj en-ŝablonaj adverboj.

{% include nav.html %}
