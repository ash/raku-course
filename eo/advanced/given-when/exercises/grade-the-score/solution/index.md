---
title: 'Solvo: Vivperiodo laŭ aĝo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $age = 30;

given $age {
    when $_ < 0 { say 'invalid' }
    when 0..12  { say 'child' }
    when 13..19 { say 'teenager' }
    when 20..64 { say 'adult' }
    default     { say 'senior' }
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [grade-the-score.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/grade-the-score.raku).

## Eligo

```
adult
```

## Komentoj

1. Ĉi tiu solvo miksas du specojn de `when`. La unua estas *kondiĉo*, `$_ < 0` (kie `$_` estas la temo starigita de `given`), kiu forigas nevalidajn aĝojn; la ceteraj estas *intervaloj*, kiuj grupigas la validajn aĝojn en periodojn.

1. La ordo gravas. La gardo kontraŭ negativa aĝo venas unue, do ĝi ruliĝas antaŭ ol iu intervalo estas provata. La valoro `30` falas en `20..64`, do la programo presas `adult`.

1. La bloko `default` kovras ĉiun aĝon de 65 kaj pli, kiu ne estas kaptita de iu el la listigitaj intervaloj.

Vi povus inversigi tion kaj lasi `default` kapti la *nevalidan* enigon anstataŭe. Listigu ĉiun rekonatan periodon — inkluzive de `senior` kiel la kondiĉon `$_ >= 65` — kaj traktu ĉion restantan (ekzemple negativan aĝon) kiel nevalidan:

```raku
given $age {
    when 0..12    { say 'child' }
    when 13..19   { say 'teenager' }
    when 20..64   { say 'adult' }
    when $_ >= 65 { say 'senior' }
    default       { say 'invalid' }
}
```

Ĉi tie `default` estas vera branĉo «neniu el la supraj». Kiu versio legiĝas pli bone estas afero de gusto: metu la gardon unue, kiam la nevalida kazo estas la escepto, aŭ faru ĝin la retiriĝo, kiam la validaj periodoj estas ĉiuj klare enumeritaj.

{% include nav.html %}
