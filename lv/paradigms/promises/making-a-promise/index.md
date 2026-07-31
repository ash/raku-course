---
title: Paša veidots solījums 🆕
translations_gpt:
---

{% include menu.html %}

Visi līdzšinējie solījumi nāca no `start`. Bet tādu var izveidot arī tieši ar
`Promise.new` — solījumu, kas vēl nav beidzies, — un nokārtot to pašam, kad
rezultāts (vai ziņa) ir gatavs. `.keep` to izpilda ar vērtību:

```raku
my $p = Promise.new;   # svaigs, nenokārtots solījums

$p.keep(42);           # izpildām to ar vērtību
say await $p;          # 42
```

`.break` ir kļūmes gadījums. Lauzta solījuma gaidīšana pārmet kļūdu tāpat, kā
tas notiek ar `start` bloku, kas [nomiris](/lv/paradigms/await/awaiting-promises), — un,
ja neviens to nenoķer, šis izņēmums aptur programmu:

```raku
my $p = Promise.new;
$p.break('disk full');

say await $p;             # šeit nomirst ar 'disk full'
say 'never reached';      # šī rinda neizpildās
```

Lai turpinātu, noķeriet kļūmi ar `try` — tieši tāpat, kā to darītu ap jebkuru kodu,
kas varētu nomirt:

```raku
my $p = Promise.new;
$p.break('disk full');

my $result = try await $p;
say $result // "the job failed: $!"; # the job failed: disk full
```

Ja iznākums jau ir zināms, divi saīsinājumi rada solījumu, kas jau no sākuma ir
nokārtots: `Promise.kept($value)` un `Promise.broken($error)`.

```raku
say await Promise.kept(7); # 7
```

Kāpēc gan taisīt solījumu ar rokām? Tāpēc, ka ne katrs rezultāts nāk no `start` bloka.
Notikums, kas nostrādā vēlāk, ziņa, kas pienāk, atsaukuma izsaukums no citas bibliotēkas
— `Promise.new` ļauj jebkuru no tiem pārvērst par solījumu, ko pārējā programma var
gaidīt ar `await` un apvienot tāpat kā jebkuru citu.

{% include nav.html %}
