---
title: Pod renderēšana
translations_gpt:
---

{% include menu.html %}

Kad fails nes Pod, kompilators to var pārvērst formatētā tekstā, programmu neizpildot, ar opciju `--doc`:

```
raku --doc mymodule.raku
```

Iepriekšējam virsraksta un rindkopas piemēram tas izdrukā apmēram šo:

```
My Module

This module does something useful.
```

Atveidojas arī saraksti un koda bloki. Ņemiet šo Pod:

```raku
=begin pod

=head1 Shopping list

Things to buy:

=item Apples
=item Bread
=item Cheese

Run it like this:

=begin code
say 'hello';
=end code

=end pod
```

Atveidots ar `raku --doc`, tas izdrukā:

```
Shopping list

Things to buy:

  * Apples

  * Bread

  * Cheese

Run it like this:

    say 'hello';
```

Katrs `=item` kļūst par aizzīmi, un bloks `=begin code … =end code` tiek parādīts burtiski un ar atkāpi, tieši tā, kā uzrakstīts.

## Atveidošana HTML formātā

Tas pats mehānisms var radīt arī citus formātus. HTML gadījumā vienreiz instalējat atveidotāja moduli un pēc tam nosaucat to aiz `--doc`:

```
zef install Pod::To::HTML
raku --doc=HTML mymodule.raku > mymodule.html
```

Tagad tas pats dokuments iznāk kā HTML — virsraksts kļūst par `<h1>`, saraksts par `<ul>` ar `<li>`, bet koda bloks par `<pre>`:

```html
<h1>Shopping list</h1>
<p>Things to buy:</p>
<ul>
  <li>Apples</li>
  <li>Bread</li>
  <li>Cheese</li>
</ul>
<p>Run it like this:</p>
<pre class="pod-block-code">say 'hello';</pre>
```

(Rīks to ietin pilnā HTML lappusē.) Tieši tā oficiālā Raku dokumentācija vietnē [docs.raku.org](https://docs.raku.org) tiek radīta no Pod paša Rakudo pirmkodā.

{% include nav.html %}
