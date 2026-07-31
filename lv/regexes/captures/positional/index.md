---
title: Pozicionālie tvērumi
translations_gpt:
---

{% include menu.html %}

Ielieciet raksturā daļu apaļajās iekavās `( )`, lai to _satvertu_. Pēc veiksmīgas sakritības katrs satvertais gabals ir pieejams kā `$0`, `$1` un tā tālāk, numurēts no nulles tādā secībā, kādā iekavas atveras:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $0; # ｢2025｣
    say $1; # ｢06｣
}
```

Pirmais iekavu pāris satvēra gadu `$0`, otrais satvēra mēnesi `$1`. Teksts starp tiem — burtiskais `-` — tiek piemeklēts, bet ne satverts.

Katrs tvērums pats ir mazs sakritības objekts, tāpēc tam var prasīt `.Str`, tā pozīciju un tā tālāk. Virknē ar dubultpēdiņām tvērums interpolējas kā tā sakritušais teksts:

```raku
if 'hello world' ~~ / (\w+) ' ' (\w+) / {
    say "$1 $0"; # world hello
}
```

Šeit abi satvertie vārdi tiek izdrukāti pretējā secībā, kas tos samaina vietām.

Tvērumi glabājas arī sakritības mainīgajā `$/`, un `$0` patiesībā ir īss veids, kā uzrakstīt `$/[0]`. Varat strādāt tieši caur `$/`:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $/[0];    # ｢2025｣
    say $/[1];    # ｢06｣
    say $/.elems; # 2
}
```

`$/` ir viss sakritības objekts, tā indeksēšana sasniedz pozicionālos tvērumus, un `.elems` pasaka, cik to ir.

{% include nav.html %}
