---
title: q, qq un Q
---

{% include menu.html %}

Ir trīs bāzes citēšanas operatori, kas atšķiras pēc tā, cik daudz tie apstrādā tekstu iekšpusē:

* `q` — kā vienpēdiņas: gandrīz viss ir burtiski
* `qq` — kā dubultpēdiņas: mainīgie un aizbēgšanas secības tiek interpolēti
* `Q` — visburtiskākais no visiem: **nekas** netiek apstrādāts

Katrs ņem tekstu starp norobežotāju pāri. Pazīstamais `'…'` ir saīsinājums `q`, bet `"…"` ir saīsinājums `qq`:

```raku
my $name = 'Anna';

say q{Hello $name};  # Hello $name
say qq{Hello $name}; # Hello Anna
```

`q` atstāj `$name` neskartu; `qq` to interpolē. Atpakaļsvītras aizbēgšanas secības, piemēram, `\n`, darbojas tāpat: tikai `qq` (un `"…"`) pārvērš `\n` par īstu jaunrindu, bet gan `q`, gan `Q` to atstāj kā divas rakstzīmes `\` un `n`:

```raku
say qq{line\nbreak}; # line<newline>break
say q{line\nbreak};  # line\nbreak
say Q{line\nbreak};  # line\nbreak
```

Tad ar ko atšķiras `q` un `Q`? `q`, tāpat kā vienpēdiņas, tomēr apstrādā *nelielu* aizbēgšanas secību kopu — dubultota atpakaļsvītra `\\` kļūst par vienu, un var aizbēgt no aizverošā norobežotāja — turpretī vienkāršā `Q` forma neapstrādā **pilnīgi neko**:

```raku
say q{a\\b}; # a\b   — q saspiež aizēto atpakaļsvītru
say Q{a\\b}; # a\\b  — Q saglabā abas rakstzīmes
```

Var izvēlēties jebkurus norobežotājus — `q{…}`, `q[…]`, `q/…/`, `q!…!` — tas ir ērti, kad teksts pats satur pēdiņas. Šie trīs operatori ir pamats; nākamā tēma parāda, kā [_adverbi_](/lv/advanced/quoting/adverbs) ļauj precīzi regulēt, kuras funkcijas ir aktīvas.

{% include nav.html %}
