---
title: Fines verborum
translations_gpt:
---

{% include menu.html %}

`cat` congruere intra `category` succedit, quia tres litterae revera ibi sunt. Saepe id non est quod vis — verbum plenum `cat` intellegis. Ancora _termini verbi_ hoc solvit.

* `<<` in **sinistro** margine verbi congruit (initio verbi)
* `>>` in **dextro** margine verbi congruit (fine verbi)

Involve verbum his ancoris ut illud solum ut verbum plenum congruas:

```raku
say 'the cat sat' ~~ /<< cat >>/;    # ｢cat｣
say so 'category'  ~~ /<< cat >>/;   # False
```

In `category` nullus terminus verbi statim post `cat` est, itaque exemplar ancoratum deficit — exacte agendi ratio quam volebamus.

Terminus verbi inter characterem verbi (`\w`) et characterem non verbi sedet, itaque nihil ipse consumit; sicut `^` et `$`, solum locum asserit.

Duae ancorae etiam characteribus angularibus `«` et `»` scribi possunt si eos mavis. Exacte sicut `<<` et `>>` se gerunt:

```raku
say 'the cat sat' ~~ /« cat »/;  # ｢cat｣
say so 'category'  ~~ /« cat »/;  # False
```

{% include nav.html %}
