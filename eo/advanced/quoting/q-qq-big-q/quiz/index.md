---
title: Kvizo — Citado
translations_gpt:
---

{% include menu.html %}

Kion presas la sekva programo?

```raku
say q{a\nb};
```

{:.quiz}
1 | a\nb
0 | a<newline>b
0 | ab
0 | anb

{% include quiz.html %}

<div class="extended-explanation">

La operatoro `q` funkcias kiel unuopaj citiloj: ĝi ne prilaboras maldekstre-streketajn eskapojn kiel `\n`. Do la ĉeno konservas ĉiujn kvar signojn `a`, `\`, `n`, `b`. Nur interpolanta formo kiel `qq` (aŭ duoblaj citiloj) transformus `\n` en veran novlinion.

</div>

{% include nav.html %}
