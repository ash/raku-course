---
title: Promissum proprium 🆕
translations_gpt:
---

{% include menu.html %}

Omne promissum hactenus ex `start` venit. Sed unum etiam directe creare potes per
`Promise.new` — promissum quod nondum finivit — idque ipse componere cum
effectus (vel nuntius) paratus est. `.keep` illud valore implet:

```raku
my $p = Promise.new;   # promissum novum, nondum compositum

$p.keep(42);           # imple illud valore
say await $p;          # 42
```

`.break` casus defectus est. Promissum fractum exspectare errorem rursus iacit, sicut
pro bloco `start` qui [mortuus est](/la/paradigms/await/awaiting-promises) — et
si nihil illud capit, exceptio programma sistit:

```raku
my $p = Promise.new;
$p.break('disk full');

say await $p;             # hic moritur cum 'disk full'
say 'never reached';      # haec linea non curritur
```

Ut pergas, cape defectum per `try`, prorsus ut circa quemlibet codicem
qui mori potest facias:

```raku
my $p = Promise.new;
$p.break('disk full');

my $result = try await $p;
say $result // "the job failed: $!"; # the job failed: disk full
```

Si exitus iam notus est, duo compendia promissum faciunt quod iam
compositum incipit: `Promise.kept($value)` et `Promise.broken($error)`.

```raku
say await Promise.kept(7); # 7
```

Cur promissum manu facere? Quia non omnis effectus ex bloco `start` venit.
Eventus qui postea accidit, nuntius qui advenit, revocatio ex alia bibliotheca
— `Promise.new` sinit te quidlibet horum in promissum vertere quod reliquum
programmatis `await` et componere potest sicut quodlibet aliud.

{% include nav.html %}
