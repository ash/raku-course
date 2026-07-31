---
title: 'Solvo: Formatita teksto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
=begin pod

=head1 Greeting

Hello, B<world>!

=end pod
```

🦋 Vi povas trovi la fontkodon en la dosiero [formatted-text.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/formatted-text.raku).

## Eligo

Rulita per `raku --doc`:

```
Greeting

Hello, world!
```

## Komentoj

1. `B<world>` markas la vorton grasa; en platteksta bildigo ĝi aperas kiel ordinara teksto, sed pli riĉaj formatoj montras ĝin grase.

1. `raku --doc` bildigas la Pod sen ruli iun ajn programan kodon.

1. Por efektive *vidi* la grasan tekston, bildigu al formato, kiu portas stiligon. Instalu formatilon kiel `Pod::To::HTML` per `zef install Pod::To::HTML`, poste rulu `raku --doc=HTML formatted-text.raku`; la vorto nun eliras envolvita en HTML-elemento `<b>`. Simpla teksta eligo de `--doc`, male, havas neniun manieron montri grasan tekston, kiam ĝi estas skribita al dosiero aŭ dukto.

{% include nav.html %}
