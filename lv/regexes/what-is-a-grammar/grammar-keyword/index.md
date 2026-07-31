---
title: Atslēgvārds grammar
translations_gpt:
---

{% include menu.html %}

_Gramatika_ sagrupē nosauktas regulārās izteiksmes zem viena nosaukuma, gluži kā klase sagrupē metodes. To deklarējat ar atslēgvārdu `grammar`:

```raku
grammar Greeting {
    token TOP  { 'Hello, ' <name> '!' }
    token name { \w+ }
}
```

Gramatikas iekšienē katrs nosauktais raksturs tiek rakstīts ar `token` (regulāro izteiksmju paveidu, ko drīz aplūkosiet sīkāk). Viens marķieris, ko pēc vienošanās sauc par `TOP`, ir sākumpunkts — tas apraksta visu kopumu. Šeit `TOP` saka «teksts ir `Hello, `, tad vārds, tad `!`», bet `name` saka, kā izskatās vārds.

Marķieri var atsaukties cits uz citu pēc nosaukuma, tieši tāpat kā [nosauktās regulārās izteiksmes](/lv/regexes/what-is-a-grammar/named-regexes) iepriekšējā tematā. `TOP` izmanto `<name>`, kas patur gramatiku lasāmu: katram likumam ir viens skaidrs uzdevums.

Lai gramatiku palaistu pret virkni, izsauciet tās metodi `.parse`:

```raku
my $m = Greeting.parse('Hello, Anna!');
say $m<name>; # ｢Anna｣
```

Nākamā sadaļa tuvāk aplūko `TOP` un `.parse`. Pagaidām ideja, ko paņemt līdzi, ir vienkārša: **gramatika ir nosaukta nosauktu regulāro izteiksmju kolekcija, kas kopā apraksta veselu strukturēta teksta gabalu.**

{% include nav.html %}
