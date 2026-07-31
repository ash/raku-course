---
title: q, qq, et Q
---

{% include menu.html %}

Tres operatores citandi fundamentales sunt, qui differunt quantum textum intus processent:

* `q` — sicut apostrophi simplices: fere omnia ad litteram sunt
* `qq` — sicut apostrophi duplices: variabiles et effugia interpolantur
* `Q` — maxime ad litteram omnium: **nihil** processatur

Quisque textum inter par delimitatorum accipit. Nota forma `'…'` est abbreviatio pro `q`, et `"…"` est abbreviatio pro `qq`:

```raku
my $name = 'Anna';

say q{Hello $name};  # Hello $name
say qq{Hello $name}; # Hello Anna
```

`q` relinquit `$name` intactum; `qq` eam interpolat. Effugia per obliquum reversum ut `\n` eodem modo se gerunt: solum `qq` (et `"…"`) convertit `\n` in verum lineae finem, dum tam `q` quam `Q` eam relinquunt ut duos characteres `\` et `n`:

```raku
say qq{line\nbreak}; # line<newline>break
say q{line\nbreak};  # line\nbreak
say Q{line\nbreak};  # line\nbreak
```

Ubi ergo `q` et `Q` differunt? `q`, sicut apostrophi simplices, adhuc *parvum* numerum effugiorum tractat — obliquus reversus duplicatus `\\` fit unus, et delimitatorem claudentem effugere potes — dum forma simplex `Q` **nihil** omnino processat:

```raku
say q{a\\b}; # a\b   — q collapses the escaped backslash
say Q{a\\b}; # a\\b  — Q keeps both characters
```

Quoslibet delimitatores eligere potes — `q{…}`, `q[…]`, `q/…/`, `q!…!` — quod commodum est cum textus ipse apostrophos continet. Hi tres operatores fundamentum sunt; thema proximum ostendit quomodo [_adverbia_](/la/advanced/quoting/adverbs) tibi permittant accurate miscere et aptare quae proprietates activae sint.

{% include nav.html %}
