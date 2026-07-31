---
title: Propra promeso 🆕
translations_gpt:
---

{% include menu.html %}

Ĉiu ĝisnuna promeso venis de `start`. Sed vi povas ankaŭ krei unu rekte per
`Promise.new` — promeson, kiu ankoraŭ ne finiĝis — kaj decidi ĝin mem, kiam
la rezulto (aŭ la novaĵo) estas preta. `.keep` plenumas ĝin per valoro:

```raku
my $p = Promise.new;   # freŝa, ankoraŭ nedecidita promeso

$p.keep(42);           # plenumu ĝin per valoro
say await $p;          # 42
```

`.break` estas la malsukcesa kazo. Atendi rompitan promeson reĵetas la eraron, ĝuste
kiel ĉe bloko `start`, kiu [mortis](/eo/paradigms/await/awaiting-promises) — kaj
se nenio kaptas ĝin, tiu escepto haltigas la programon:

```raku
my $p = Promise.new;
$p.break('disk full');

say await $p;             # mortas ĉi tie kun 'disk full'
say 'never reached';      # ĉi tiu linio ne plenumiĝas
```

Por daŭrigi, kaptu la malsukceson per `try`, precize kiel vi farus ĉirkaŭ ajna kodo,
kiu povus morti:

```raku
my $p = Promise.new;
$p.break('disk full');

my $result = try await $p;
say $result // "the job failed: $!"; # the job failed: disk full
```

Se la rezulto jam estas konata, du mallongigoj faras promeson, kiu ekestas jam
decidita: `Promise.kept($value)` kaj `Promise.broken($error)`.

```raku
say await Promise.kept(7); # 7
```

Kial fari promeson mane? Ĉar ne ĉiu rezulto venas de bloko `start`.
Evento, kiu okazas poste, mesaĝo, kiu alvenas, revoko el alia biblioteko
— `Promise.new` ebligas al vi transformi ĉiun el ĉi tiuj en promeson, kiun la cetero de la
programo povas `await`-i kaj kombini kiel ajnan alian.

{% include nav.html %}
