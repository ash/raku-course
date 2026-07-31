---
title: La bloko react
translations_gpt:
---

{% include menu.html %}

Bloko `react` estas loko, kie loĝas reagoj. Ene de ĝi, `whenever` diras «kiam ajn ĉi tiu supply eligas valoron, plenumu ĉi tiun korpon». La bloko `react` poste atendas, ĝis ĉiu supply, kiun ĝi observas, estas finita:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
}

say $sum; # 6
```

La korpo `whenever` plenumiĝas unufoje por ĉiu valoro — `1`, `2`, `3` — aldonante ĝin al `$sum`. La tema valoro disponeblas kiel `$_` (vi povas ankaŭ nomi ĝin per `-> $v`).

La ŝlosila konduto estas, ke `react` **blokas**, ĝis ĝiaj supply estas finitaj. Nur post kiam la `Supply.from-list` eligis ĉiujn siajn valorojn, la bloko `react` finiĝas kaj la programo pluiras al la `say`. Tial `$sum` jam estas `6` en la momento, kiam ĝi estas presata: la bloko react atendis la tutan fluon.

Tio faras `react` natura loko por kolekti rezultojn el fluo: starigu la reagojn, lasu ĝin kuri ĝis la fino kaj uzu poste tion, kion vi kolektis.

{% include nav.html %}
