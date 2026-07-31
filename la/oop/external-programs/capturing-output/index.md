---
title: Exitum capere
translations_gpt:
---

{% include menu.html %}

Ut legas quid programma externum imprimat potius quam illud in screen ire sinas, trade `:out` cum illud lancias. `Proc` redditum tunc tractabulum `.out` habet ex quo legere potes:

```raku
my $proc = run 'echo', 'hello', :out;
my $output = $proc.out.slurp(:close);
say $output.chomp; # hello
```

`:out` exitum vulgarem programmatis in `Proc` redirigit. Tractabulum `.out` sicut tractabula archivorum sectionis superioris operatur, et `.slurp` omnia ex eo simul legit. Apostrophus `:close` compendium utile est: post lectionem tractabulum pro te claudit — eadem cura quam expresse per `.close` in tractabulo archivi egisti — itaque nihil apertum relinquitur. Denique `.chomp` novam lineam sequentem quam `echo` addit removet.

Idem cum `shell` operatur, quod utile est ad effectum fistulae capiendum:

```raku
my $proc = shell 'echo hello | tr a-z A-Z', :out;
say $proc.out.slurp(:close).chomp; # HELLO
```

Fluentum errorum quoque capere potes, per `:err` et tractabulum conveniens `.err`. Utrumque `:out` et `:err` tradens duo fluenta separata servas, utrumque in proprio tractabulo, itaque ea seorsum legere potes:

```raku
my $proc = run 'sh', '-c', 'echo out-line; echo err-line >&2', :out, :err;

say 'stdout: ', $proc.out.slurp(:close).chomp; # stdout: out-line
say 'stderr: ', $proc.err.slurp(:close).chomp; # stderr: err-line
```

Hic imperatum interpretis unam lineam ad exitum vulgarem et unam ad errorem vulgarem imprimit (`>&2` illuc redirigit). Quia utrumque fluentum petivimus, `.out` et `.err` ea independenter tenent — exitus normalis programmatis cum diagnosticis eius numquam miscetur.

Exitum capere est modus quo programmate externo ut lapide aedificandi uteris — illud curre, effectum eius lege, et cum illis datis in tuo ipsius programmate perge.

{% include nav.html %}
