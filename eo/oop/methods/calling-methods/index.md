---
title: Metodoj kiuj vokas metodojn
translations_gpt:
---

{% include menu.html %}

Metodo povas voki alian metodon sur la sama objekto tra `self`:

```raku
class Circle {
    has $.radius;

    method area {
        3.14 * $.radius * $.radius;
    }

    method describe {
        'The area is ' ~ self.area;
    }
}

my $c = Circle.new(radius => 2);
say $c.describe; # The area is 12.56
```

Ene de `describe`, la voko `self.area` rulas la metodon `area` sur la sama cirklo, kaj ĝia rezulto estas uzata por konstrui la priskribon.

Vi skribas `self.area` — kun la punkto — por voki metodon, ĝuste kiel ekstera vokanto vokus ĝin sur ekzemplero, ekzemple: `$c.describe`. Tio permesas al vi konstrui pli kompleksan konduton el pli malgrandaj metodoj, ĉiu faranta unu laboron.

{% include nav.html %}
