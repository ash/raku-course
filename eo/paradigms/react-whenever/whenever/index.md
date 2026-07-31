---
title: whenever
translations_gpt:
---

{% include menu.html %}

Unu sola bloko `react` povas enhavi **plurajn** blokojn `whenever`, ĉiu observanta malsaman supply. La bloko reagas al tiu supply, kiu eligas sekve, plenumante la respondan korpon:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
    whenever Supply.from-list(10, 20) {
        $sum += $_;
    }
}

say $sum; # 36
```

Ambaŭ supply estas observataj samtempe. Iliaj valoroj — `1, 2, 3` kaj `10, 20` — ĉiuj fluas en `$sum`, kiu finas ĉe `36`. La bloko `react` finiĝas nur kiam **ambaŭ** supply estas finitaj.

Ĉiu `whenever` reagas sendepende, kaj tiel vi kombinas fluojn: unu `whenever` por ĉiu fonto, ĉiuj ene de la sama `react`. Vera programo povus observi retan konekton en unu `whenever` kaj tempigilon en alia, respondante al ĉiu laŭ la alveno de ĝiaj eventoj.

Ene de korpo `whenever` vi havas la eligitan valoron (kiel `$_` aŭ nomitan parametron) kaj povas fari ion ajn per ĝi — ĝisdatigi staton, eligi al alia supply aŭ eĉ fermi la blokon react frue per `done`.

{% include nav.html %}
