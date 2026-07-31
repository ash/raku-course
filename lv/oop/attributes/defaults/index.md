---
title: Noklusētās vērtības
translations_gpt:
---

{% include menu.html %}

Atribūtam var dot _noklusēto vērtību_, ko izmanto, kad objekts tiek radīts bez vērtības tam. Rakstiet noklusējumu aiz atribūta ar `=`:

```raku
class Dog {
    has Str $.name;
    has Rat $.weight = 4.0;
}
```

Ievērojiet, ka līdzīgi kā mainīgajiem, arī atribūtiem var uzspiest tipu.

Ja `weight` `new` nepadodat, atribūts pieņem noklusējumu:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.weight; # 4
```

Noklusējumu joprojām var pārrakstīt, padodot vērtību:

```raku
my $lighty = Dog.new(name => 'Lighty', weight => 3.2);
say $lighty.weight; # 3.2
```

Bez noklusējuma un bez `new` padotas vērtības atribūts vienkārši ir nedefinēts, gluži tāpat kā svaigs skalārs mainīgais.

{% include nav.html %}
