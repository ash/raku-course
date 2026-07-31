---
title: La kongruarbo
translations_gpt:
---

{% include menu.html %}

Gramatika kongruo estas arbo. La supra kongruo havas nomitan eron por ĉiu ĵetono, kiun `TOP` uzis, kaj tiuj eroj mem estas kongruaj objektoj kun siaj propraj kaptoj. Vi navigas la arbon per la sama sintakso `<name>`, kiun vi uzas por nomitaj kaptoj:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \d+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

Ĉiu branĉo estas plena kongrua objekto, do vi povas peti al ĝi sian `.Str`, sian pozicion, aŭ konverti ĝin. Ĉi tie la valoro estas ciferoj, do transformi ĝin en veran nombron estas nur metodvoko:

```raku
say $m<value>.Int; # 5
```

Por pli profundaj gramatikoj la arbo havas pli da niveloj — `$m<a><b>` atingas ĵetonon `b` uzatan ene de ĵetono `a`. Trairi la arbon tiel funkcias, sed por io ajn preter kelkaj kampoj ĝi fariĝas mallerta. La sekva temo montras pli puran manieron alfiksi la valoron, kiun vi efektive volas, al ĉiu kongruo.

{% include nav.html %}
