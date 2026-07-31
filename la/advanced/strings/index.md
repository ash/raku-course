---
title: Catenae
---

{% include menu.html %}

In parte Essentialium didicisti [quomodo chordas construas](/la/essentials/strings) — concatenationem, interpolationem, et longitudinem chordae. Chordae etiam divitem seriem methodorum portant. Haec sectio utilissimas colligit. (Quaerere cum [expressionibus regularibus](/la/regexes) thema separatum et maius est, quod in sua parte postea tractatur.)

Tres methodi casum litterarum chordae mutant:

```raku
say 'raku'.uc; # RAKU  — upper case
say 'RAKU'.lc; # raku  — lower case
say 'raku'.tc; # Raku  — title case (first letter capitalised)
```

Methodus `flip` characteres chordae invertit:

```raku
say 'Raku'.flip; # ukaR
```

Et operator `x` chordam datum numerum vicium repetit:

```raku
say 'ab' x 3; # ababab
```

Sequentia themata ostendunt quomodo intra chordas quaeras et quomodo eas in partes dividas et retro coniungas.

{% include nav.html %}
