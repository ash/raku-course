---
title: La else bloko
---

{% include menu.html %}

`if` bloko povas esti sekvata de `else` bloko, kiu estas plenumita kiam la kondiĉo ne estas kontentigita.

```raku
my $t = 36.6;
if 35.5 < $t < 37.5 {
    say 'Vi fartas bone.';
}
else {
    say 'Voku kuraciston, eble?';
}
```

La `else` bloko ne povas esti uzata sola (estas pli bona alternativo nomata [`unless`](../unless), kiu estos enkondukita post momento).

{% include nav.html %}