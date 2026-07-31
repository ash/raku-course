---
title: 'Regulēšana ar :batch un :degree'
translations_gpt:
---

{% include menu.html %}

Gan `.hyper`, gan `.race` pieņem divus apstākļa vārdus, kas nosaka, *kā* darbs tiek sadalīts starp pavedieniem: `:degree` un `:batch`. Tie vajadzīgi reti, bet tieši pēc tiem ķeras, kad regulē ātrumu.

## `:degree` — cik daudz darbinieku

`:degree` nosaka, cik daudz darbapavedienu darbojas vienlaikus:

```raku
say (1..5).hyper(:degree(2)).map(*²); # (1 4 9 16 25)
```

Pēc noklusējuma pakāpe ir tuvu procesora kodolu skaitam — astoņu kodolu mašīnā tā ir `7`, atstājot vienu kodolu galvenajai programmai. Celt to daudz virs kodolu skaita reti palīdz, jo vairāk kodolu, kur darboties, nav, un papildu saskaņošana pat var palēnināt.

## `:batch` — cik elementu vienā piegājienā

`:batch` nosaka, cik elementu katrs darbinieks paņem vienā piegājienā, pirms nāk pēc vēl:

```raku
say (1..6).hyper(:batch(2)).map(*²); # (1 4 9 16 25 36)
```

Noklusējuma partija ir `64`, un izmērs ir kompromiss:

* **Liela** partija nozīmē mazāk skraidīšanas starp darbiniekiem un plānotāju — mazākas pieskaitāmās izmaksas, un tas ir labi, kad katrs elements maksā apmēram vienādi.
* **Maza** partija darbu sadala vienmērīgāk, kad daži elementi ir daudz dārgāki par citiem, tāpēc neviens atsevišķs darbinieks nepaliek ar visiem lēnajiem — par lielākas saskaņošanas cenu.

Abus var uzstādīt uzreiz, un `.race` tāpat kā `.hyper`:

```raku
say (1..6).race(:degree(2), :batch(3)).map(*²).sum; # 91
```

<div style="font-size: 85%; opacity: .8;">

Ja jums interesē, kādi noklusējumi ir īstenībā, tos var pašķirstīt caur Rakudo iekšām. Ievērojiet, ka tas nolasa *privātu* atribūtu — tā nav stabila saskarne, un skaitļi ir atkarīgi no jūsu mašīnas:

```raku
my $h := (1..10).hyper;
say $h.^attributes.first(*.name.contains('config')).get_value($h).raku;
# HyperConfiguration.new(batch => 64, degree => 7)
```

Šeit `batch` ir nemainīgais noklusējums `64`, kamēr `degree` ir `7` — par vienu mazāk nekā šīs mašīnas astoņi kodoli.

</div>

## Tie joprojām ir tikai mājieni

Tāpat kā `.hyper` un `.race` pašas, šie apstākļa vārdi konkrētu sadalījumu **lūdz**, nevis garantē. Kompilators var tos ievērot, pielabot vai pilnībā ignorēt — tāpēc uztveriet `:batch` un `:degree` kā pogas, ko pagriezt, regulējot, nevis kā solījumus par to, kā darbs precīzi notiks.

{% include nav.html %}
