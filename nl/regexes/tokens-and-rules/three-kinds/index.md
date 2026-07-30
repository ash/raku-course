---
title: regex, token en rule
translations_gpt:
---

{% include menu.html %}

De drie sleutelwoorden bouwen op elkaar voort:

* `regex` — krabbelt terug, zoals de patronen in `/ … /`
* `token` — krabbelt **niet** terug
* `rule` — als `token`, maar spaties in het patroon zijn betekenisvol

_Terugkrabbelen_ (backtracking) betekent dat de engine, wanneer een later deel van het patroon mislukt, teruggaat en voor een eerder deel een kortere match probeert. Een `regex` doet dat:

```raku
my regex r { \w+ 'b' }
say so 'aaab' ~~ / <r> /; # True
```

`\w+` grijpt eerst heel `aaab`, en moet dan de laatste `b` teruggeven zodat de letterlijke `b` kan matchen. Een `token` weigert iets terug te geven:

```raku
my token t { \w+ 'b' }
say so 'aaab' ~~ / <t> /; # False
```

Hier neemt `\w+` heel `aaab`, vindt de letterlijke `b` niets meer, en mislukt het token eenvoudigweg in plaats van terug te krabbelen.

Dat klinkt als een beperking, maar voor grammatica's is het precies wat je wilt: elk token moet één net ding matchen en zich daaraan vastleggen. Dat maakt het ontleden sneller en het resultaat voorspelbaar. **Gebruik standaard `token`**; grijp alleen naar `regex` bij de zeldzame gelegenheden waarop je werkelijk terugkrabbelen nodig hebt.

{% include nav.html %}
