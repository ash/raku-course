---
title: 'Solutio: Textum formatum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius muneris.

## Codex

```raku
=begin pod

=head1 Greeting

Hello, B<world>!

=end pod
```

🦋 Fontem codicis in fasciculo [formatted-text.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/formatted-text.raku) invenire potes.

## Exitus

Cum `raku --doc` exsequere:

```
Greeting

Hello, world!
```

## Commentarii

1. `B<world>` verbum crasse notat; in redditione textuali simplici ut textus ordinarius apparet, sed formata ditiora id crasse ostendunt.

1. `raku --doc` Pod reddit sine ullo codice programmatis exsequendo.

1. Ut re vera crassum videas, in formatum quod ornamentum fert redde. Formatorem ut `Pod::To::HTML` installa cum `zef install Pod::To::HTML`, deinde `raku --doc=HTML formatted-text.raku` exsequere; verbum nunc in elemento HTML `<b>` involutum exit. Redditio textualis simplex cum `--doc`, e contra, nullum modum habet crassum ostendendi postquam in fasciculum vel tubum scriptum est.

{% include nav.html %}
