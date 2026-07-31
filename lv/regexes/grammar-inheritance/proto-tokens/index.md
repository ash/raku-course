---
title: Proto marķieri un alternatīvas
translations_gpt:
---

{% include menu.html %}

Dažreiz vienam jēdzienam ir vairākas formas — skaitlis var būt vesels vai decimāls. Varētu uzrakstīt alternatīvu ar `|`, taču gramatikas piedāvā kārtīgāku veidu: _proto marķieri_ ar nosauktiem variantiem.

Deklarējiet jumta marķieri kā `proto token` un pēc tam uzrakstiet katru variantu kā `token nosaukums:sym<etiķete>`:

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<int>   { \d+ }
    token number:sym<float> { \d+ '.' \d+ }
}

say Number.parse('42').defined;   # True
say Number.parse('3.14').defined; # True
```

Rinda `proto token number {*}` saka: «`number` ir viens no zemāk esošajiem variantiem». Katrs variants nes `:sym<…>` etiķeti, kas to nosauc. Kad gramatikai vajag `<number>`, tā izmēģina variantus un pēc garākā marķiera principa izvēlas to, kurš der, — `int` priekš `42`, `float` priekš `3.14`.

Proto marķieri lasās labāk nekā gara `|` alternatīvu virkne, un `:sym<…>` etiķetes dod katram gadījumam nosaukumu, ar ko vēlāk var rīkoties, kad parsējumam piesaistāt nozīmi. Tie ir raksturīgais veids, kā gramatikā izteikt «viens no šiem veidiem».

{% include nav.html %}
