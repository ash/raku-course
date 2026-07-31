---
title: Blocus react
translations_gpt:
---

{% include menu.html %}

Blocus `react` locus est ubi reactiones habitant. Intus, `whenever` dicit «quandocumque hoc supply valorem emittit, curre hoc corpus». Blocus `react` deinde exspectat donec omne supply quod spectat perfectum sit:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
}

say $sum; # 6
```

Corpus `whenever` semel pro unoquoque valore currit — `1`, `2`, `3` — illum ad `$sum` addens. Valor thematis ut `$_` praesto est (illum etiam per `-> $v` nominare potes).

Mores praecipui sunt quod `react` **moratur** donec supply eius perfecta sint. Solum postquam `Supply.from-list` omnes valores suos emisit blocus `react` finit et programma ad `say` procedit. Quapropter `$sum` iam `6` est cum imprimitur: blocus react totum fluxum exspectavit.

Hoc `react` locum naturalem facit effectus ex fluxu colligendi: institue reactiones, sine illum ad finem currere, et eo quod collegisti postea utere.

{% include nav.html %}
