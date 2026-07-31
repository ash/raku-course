---
title: Kapti la eligon
translations_gpt:
---

{% include menu.html %}

Por legi tion, kion ekstera programo presas, anstataŭ lasi ĝin iri al la ekrano, transdonu `:out` dum lanĉo. La redonita `Proc` tiam havas tenilon `.out`, el kiu vi povas legi:

```raku
my $proc = run 'echo', 'hello', :out;
my $output = $proc.out.slurp(:close);
say $output.chomp; # hello
```

`:out` redirektas la norman eligon de la programo en la `Proc`. La tenilo `.out` funkcias kiel la dosierteniloj el la antaŭa sekcio, kaj `.slurp` legas ĉion el ĝi samtempe. La adverbo `:close` estas oportuna mallongigo: post legado, ĝi fermas la tenilon por vi — la sama ordigo, kiun vi faris eksplicite per `.close` sur dosiertenilo — do nenio restas malfermita. Fine, `.chomp` forigas la finan linifinon, kiun `echo` aldonas.

La samo funkcias kun `shell`, kio estas oportuna por kapti la rezulton de dukto:

```raku
my $proc = shell 'echo hello | tr a-z A-Z', :out;
say $proc.out.slurp(:close).chomp; # HELLO
```

Vi ankaŭ povas kapti la erarfluon, per `:err` kaj la responda tenilo `.err`. Transdoni kaj `:out` kaj `:err` tenas la du fluojn apartaj, ĉiun en sia propra tenilo, do vi povas legi ilin aparte:

```raku
my $proc = run 'sh', '-c', 'echo out-line; echo err-line >&2', :out, :err;

say 'stdout: ', $proc.out.slurp(:close).chomp; # stdout: out-line
say 'stderr: ', $proc.err.slurp(:close).chomp; # stderr: err-line
```

Ĉi tie la ŝela komando presas unu linion al norma eligo kaj unu al norma erarfluo (`>&2` redirektas al ĝi). Ĉar ni petis ambaŭ fluojn, `.out` kaj `.err` tenas ilin sendepende — la normala eligo de la programo neniam miksiĝas kun ĝiaj diagnozoj.

Kapti eligon estas la maniero uzi eksteran programon kiel konstruelementon — rulu ĝin, legu ĝian rezulton, kaj daŭrigu kun tiuj datumoj en via propra programo.

{% include nav.html %}
