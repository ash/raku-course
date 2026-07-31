---
title: Uzant-difinitaj operatoroj
translations_gpt:
---

{% include menu.html %}

Operatoroj en Raku efektive estas nur subrutinoj kun specialaj nomoj. Tio signifas, ke vi povas difini viajn proprajn, uzante la kategoriajn nomojn, kiujn vi renkontis sur la paĝo [Tipoj de Raku-operatoroj](/eo/advanced/operator-types): `prefix`, `infix`, `postfix` kaj tiel plu.

Por deklari operatoron, skribu `sub`, kies nomo estas la kategorio, dupunkto, kaj la simbolo de la operatoro en angulaj krampoj. Jen nova infiksa operatoro nomata `plus`:

```raku
sub infix:<plus>($a, $b) {
    $a + $b
}

say 3 plus 4; # 7
```

Post kiam ĝi estas difinita, `plus` estas uzata inter siaj du operandoj, ĝuste kiel ĉiu enkonstruita infiksa operatoro.

Postfiksa operatoro sekvas sian operandon. La faktorialo estas klasika ekzemplo — jen ĝi kiel la postfiksa operatoro `!`, konstruita sur [la redukta metaoperatoro](/eo/advanced/metaoperators/reduction), kiun vi renkontis pli frue:

```raku
sub postfix:<!>(Int $n) {
    [*] 1..$n
}

say 5!; # 120
```

Vi ne limiĝas al literoj kaj ASCII-interpunkcio; la simbolo de operatoro povas esti ajna signo. Ĉi tiu prefiksa operatoro uzas la paragrafan signon por duobligi nombron:

```raku
sub prefix:<§>($x) {
    $x * 2
}

say §5; # 10
```

Difini operatorojn estas potenca ilo, do uzu ĝin kun gusto: bone elektita operatoro povas igi kodon legiĝi kiel la problema fako, dum malklara nur konfuzas la sekvan leganton.

{% include nav.html %}
