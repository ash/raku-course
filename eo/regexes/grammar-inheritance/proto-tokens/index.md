---
title: Proto-ĵetonoj kaj alternativoj
translations_gpt:
---

{% include menu.html %}

Foje unu koncepto havas plurajn formojn — nombro povus esti entjero aŭ dekumo. Vi povus skribi alternativon per `|`, sed gramatikoj ofertas pli bonordan manieron: _proto-ĵetonon_ kun nomitaj variantoj.

Deklaru la ombrelan ĵetonon kiel `proto token`, poste skribu ĉiun varianton kiel `token name:sym<label>`:

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<int>   { \d+ }
    token number:sym<float> { \d+ '.' \d+ }
}

say Number.parse('42').defined;   # True
say Number.parse('3.14').defined; # True
```

La linio `proto token number {*}` diras «`number` estas unu el la subaj variantoj». Ĉiu varianto portas etikedon `:sym<…>`, kiu nomas ĝin. Kiam la gramatiko bezonas `<number>`, ĝi provas la variantojn kaj, per kongruigo laŭ plej longa ĵetono, elektas tiun, kiu konvenas — `int` por `42`, `float` por `3.14`.

Proto-ĵetonoj legiĝas pli bone ol longa ĉeno de alternativoj `|`, kaj la etikedoj `:sym<…>` donas al ĉiu kazo nomon, laŭ kiu vi povas agi poste, kiam vi alfiksas signifon al la analizo. Ili estas la idioma maniero esprimi «unu el ĉi tiuj specoj» en gramatiko.

{% include nav.html %}
