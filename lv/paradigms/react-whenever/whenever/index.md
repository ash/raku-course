---
title: whenever
translations_gpt:
---

{% include menu.html %}

Viens `react` bloks var saturēt **vairākus** `whenever` blokus, katru vērojot citu supply. Bloks reaģē uz to supply, kura izstaro nākamā, izpildot atbilstošo ķermeni:

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

Abas supply tiek vērotas vienlaikus. To vērtības — `1, 2, 3` un `10, 20` — visas ietek `$sum`, kas beigās ir `36`. `react` bloks beidzas tikai tad, kad pabeigtas ir **abas** supply.

Katrs `whenever` reaģē neatkarīgi, tāpēc tieši šādi straumes apvieno: viens `whenever` katram avotam, visi viena un tā paša `react` iekšienē. Īsta programma vienā `whenever` varētu vērot tīkla savienojumu un otrā — taimeri, atsaucoties uz katru notikumu, kad tas pienāk.

`whenever` ķermenī jums ir izstarotā vērtība (kā `$_` vai nosaukts parametrs), un ar to var darīt jebko — atjaunināt stāvokli, izstarot citā supply vai pat priekšlaicīgi aizvērt `react` bloku ar `done`.

{% include nav.html %}
