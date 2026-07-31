---
title: Kruca, hiper kaj neita
translations_gpt:
---

{% include menu.html %}

Krom redukto kaj zipado, Raku havas plurajn aliajn meta-operatorojn. Tri el ili meritas mencion ĉi tie.

## Kruca — `X`

La kruca meta-operatoro `X` parigas **ĉiun** elementon de unu listo kun **ĉiu** elemento de alia — la kartezia produto:

```raku
say <a b> X <1 2>; # ((a 1) (a 2) (b 1) (b 2))
```

Kiel zipado, ĝi povas ĉirkaŭi operatoron por agi sur ĉiun paron. `X~` kunigas ĉiun paron en ĉenon, kaj `X*` multobligas:

```raku
say <a b> X~ <1 2>;         # (a1 a2 b1 b2)
say (1, 2, 3) X* (10, 100); # (10 100 20 200 30 300)
```

Dum zipado marŝas laŭ du listoj paŝe, krucado kombinas ilin en ĉiu ebla maniero.

## Hipera — `»…«`

Hipera meta-operatoro aplikas operatoron al **ĉiu elemento** de listo. La operatoro estas ĉirkaŭita per la pintaj `»…«` (aŭ la askia `>>…<<`). Kun du listoj ĝi funkcias elemento post elemento, kiel zipado; kun ununura valoro ĉe unu flanko, ĝi etendas tiun valoron tra la tuta listo:

```raku
say (1, 2, 3) »+» (10, 20, 30); # (11 22 33)
say (1, 2, 3) »*» 2;            # (2 4 6)
```

La du sagoj ne devas montri al la sama direkto, kaj ilia direkto decidas kio okazas kiam la listoj malsamas en longeco — pinto montranta **al** listo permesas, ke tiu listo estu ripetata por egali la alian. En la askia `<<`/`>>` skribo, la kvar kombinoj estas:

* `>>op<<` — nek unu flanko etendiĝas; la listoj devas jam havi saman longon, alie estas eraro;
* `>>op>>` — la **dekstra** listo estas ripetata por egali la maldekstran;
* `<<op<<` — la **maldekstra** listo estas ripetata por egali la dekstran;
* `<<op>>` — la **pli mallonga** listo estas ripetata por egali la pli longan.

```raku
say (1, 2, 3, 4) <<+>> (10, 20); # (11 22 13 24)  — 10, 20 repeats to 10, 20, 10, 20
```

Ekzistas ankaŭ unuargumenta formo, kiu vokas metodon sur ĉiu elemento. `>>.uc` majuskligas ĉiun ĉenon:

```raku
say <raku perl>>>.uc; # (RAKU PERL)
```

Hiperaj operacioj ankaŭ signalas, ke la laboro *povas* esti farata paralele — vi renkontos la rilatan metodon `.hyper` poste, en [la sekcio pri samtempa programado](/eo/paradigms/hyper-race).

## Neiga — `!`

Metante `!` antaŭ komparan operatoron vi neas ĝian rezulton. La konata `!=` (ne-egala) estas ĝuste ĉi tiu meta-operatoro aplikata al `==`, kaj la samo funkcias por aliaj buleaj operatoroj kiel `eq` kaj `%%`:

```raku
say 3 != 4;      # True
say 'a' !eq 'b'; # True  — ne-egalaj kiel ĉenoj
say 5 !%% 2;     # True  — 5 ne estas dividebla per 2
```

Resume, `$a !op $b` estas nur pli pura maniero skribi `!($a op $b)`.

Tio estas intenca. Male al intence minimuma lingvo kiel Esperanto, kiu celas unu regulan manieron esprimi ĉiun aĵon, Raku volonte donas al vi plurajn — do la neiga `!eq` vivas tuj apud la dediĉita operatoro `ne`, kaj ambaŭ signifas ĝuste la samon:

```raku
say 'a' ne 'b'; # True — la sama testo kiel 'a' !eq 'b'
```

{% include nav.html %}
