---
title: Lietotāja definēti operatori
---

{% include menu.html %}

Operatori Raku patiesībā ir vienkārši apakšprogrammas ar īpašiem nosaukumiem. Tas nozīmē, ka jūs varat definēt savus, izmantojot kategoriju nosaukumus, ar kuriem iepazināties lapā [Raku operatoru tipi](/lv/advanced/operator-types): `prefix`, `infix`, `postfix` un tā tālāk.

Lai deklarētu operatoru, rakstiet `sub`, kura nosaukums ir kategorija, kols un operatora simbols leņķa iekavās. Šeit ir jauns infiksa operators ar nosaukumu `plus`:

```raku
sub infix:<plus>($a, $b) {
    $a + $b
}

say 3 plus 4; # 7
```

Pēc definēšanas `plus` tiek izmantots starp saviem diviem operandiem, tieši kā jebkurš iebūvēts infiksa operators.

Postfiksa operators seko aiz sava operanda. Faktoriāls ir klasisks piemērs — šeit tas ir kā `!` postfiksa operators, veidots uz [redukcijas metaoperatora](/lv/advanced/metaoperators/reduction), ar kuru iepazināties iepriekš:

```raku
sub postfix:<!>(Int $n) {
    [*] 1..$n
}

say 5!; # 120
```

Jūs neesat ierobežoti ar burtiem un ASCII pieturzīmēm; operatora simbols var būt jebkura rakstzīme. Šis prefiksa operators izmanto paragrāfa zīmi, lai dubultotu skaitli:

```raku
sub prefix:<§>($x) {
    $x * 2
}

say §5; # 10
```

Operatoru definēšana ir spēcīgs rīks, tāpēc izmantojiet to ar gaumi: labi izvēlēts operators var padarīt kodu lasāmu kā priekšmeta jomu, kamēr neskaidrs operators tikai mulsina nākamo lasītāju.

{% include nav.html %}
