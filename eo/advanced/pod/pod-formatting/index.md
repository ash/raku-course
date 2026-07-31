---
title: Formatado kaj kodo
translations_gpt:
---

{% include menu.html %}

Ene de Pod-teksto vi markas vortojn per unu-literaj _formataj kodoj_, skribataj kiel litero sekvata de angulaj krampoj ĉirkaŭ la teksto:

* `B<…>` — grasa
* `I<…>` — kursiva
* `C<…>` — kodo (egallarĝa)
* `L<…>` — ligilo

```raku
=begin pod

This is B<important>, and C<say> is a built-in.

=end pod
```

Kiam bildigita, `important` aperas grase kaj `say` en koda tiparo. La kodoj nestiĝas kaj povas esti kombinitaj, do `B<C<say>>` estas grasa kodo.

Por tuta bloko de kodo anstataŭ enteksta fragmento, uzu limigitan kodblokon — `=begin code … =end code` — kiu konservas la tekston laŭvorte:

```raku
=begin pod

Here is how to call it:

=begin code
say greet('world');
=end code

=end pod
```

La linioj ene de la kodbloko estas montrataj ekzakte kiel skribitaj, sen esti interpretataj kiel Pod. Inter la entekstaj kodoj kaj kodblokoj, Pod povas dokumenti API-on per formatita prozo kaj rulebl-aspektaj ekzemploj, ĉiuj tenataj apud la kodo, kiun ili priskribas.

{% include nav.html %}
