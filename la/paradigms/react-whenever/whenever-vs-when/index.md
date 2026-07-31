---
title: whenever et when
translations_gpt:
---

{% include menu.html %}

Forma bloci `react` nota videri potest. Blocus externus plures blocos internos tenens, unoquoque in themate `$_` agente, est exacte quomodo [`given`/`when`](/la/advanced/given-when) scribitur. Si unam lectionem temperaturae pro toto fluxu earum haberes, ita in ea ramificares:

```raku
given $temperature {
    when 18 { say 'cool' }
    when 21 { say 'warm' }
}
```

Similitudo cum `react`/`whenever` vera est, sed duo munera valde diversa agunt:

* **`given`/`when` unum valorem, nunc, tractat.** `given` `$_` ad unum valorem ponit; unumquodque `when` illum probat (`$_ ~~ 18`), **primum** congruens currit, et blocus finitus est. Conditionalis ordinaria et synchrona est.
* **`react`/`whenever` multos valores, per tempus, tractat.** `whenever` `$_` contra exemplar non probat — supply *se subscribit*, et corpus eius pro **omni** valore quem illud supply emittit currit, quandocumque ille valor advenit. Omnia `whenever` simul viva sunt, et `react` morari pergit donec omne supply eorum perfectum sit.

Itaque `when` rogat «num hic unus valor congruit?», dum `whenever` dicit «pro unoquoque valore quem hic fluxus umquam producit, hoc age». Idem sceletum, vitae valde diversae: ramus semel captus, contra reactionem quae iterum atque iterum currit dum eventus adveniunt.

{% include nav.html %}
