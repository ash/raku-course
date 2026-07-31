---
title: Labori kun dosieroj
translations_gpt:
---

{% include menu.html %}

La plej simpla maniero labori kun dosiero estas legi aŭ skribi ĝin tutan samtempe.

La rutino `spurt` skribas ĉenon en dosieron, kreante la dosieron (aŭ anstataŭigante ĝian enhavon, se ĝi jam ekzistas):

```raku
spurt 'greeting.txt', "Hello, file!\n";
```

La rutino `slurp` relegas la tutan enhavon de dosiero en ĉenon:

```raku
my $text = slurp 'greeting.txt';
print $text; # Hello, file!
```

Kune, `spurt` kaj `slurp` permesas al vi konservi datumojn kaj reŝargi ilin per du mallongaj vokoj. (`print` estas uzata ĉi tie anstataŭ `say`, ĉar la teksto jam finiĝas per linifino.)

Ĉi tiuj tut-dosieraj operacioj estas idealaj, kiam dosiero estas sufiĉe malgranda por teni komforte en memoro. Por pli grandaj dosieroj, aŭ kiam vi volas prilabori dosieron linio post linio, vi uzas [dosiertenilon](/eo/oop/file-handles), traktatan ĉe la fino de ĉi tiu sekcio. La sekva temo montras, kiel aldoni al dosiero anstataŭ anstataŭigi ĝin.

{% include nav.html %}
