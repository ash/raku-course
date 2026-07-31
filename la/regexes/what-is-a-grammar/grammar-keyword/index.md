---
title: Verbum clavis grammar
translations_gpt:
---

{% include menu.html %}

_Grammatica_ expressiones regulares nominatas sub uno nomine congregat, fere ut classis methodos congregat. Eam per verbum clavis `grammar` declaras:

```raku
grammar Greeting {
    token TOP  { 'Hello, ' <name> '!' }
    token name { \w+ }
}
```

Intra grammaticam unumquodque exemplar nominatum per `token` scribitur (genus expressionis regularis quod mox accurate studebis). Una tessera, ex more `TOP` appellata, initium est — totam rem describit. Hic `TOP` dicit «textus est `Hello, `, deinde nomen, deinde `!`», et `name` dicit qualis nomen sit.

Tesserae inter se nomine spectare possunt, exacte sicut [expressiones regulares nominatae](/la/regexes/what-is-a-grammar/named-regexes) argumenti superioris. `TOP` `<name>` adhibet, quod grammaticam legibilem servat: unaquaeque regula unum clarum munus habet.

Ut grammaticam contra catenam curras, methodum eius `.parse` voca:

```raku
my $m = Greeting.parse('Hello, Anna!');
say $m<name>; # ｢Anna｣
```

Sectio sequens `TOP` et `.parse` propius inspicit. Nunc idea paucis capienda simplex est: **grammatica est collectio nominata expressionum regularium nominatarum quae simul totam partem textus structurati describunt.**

{% include nav.html %}
