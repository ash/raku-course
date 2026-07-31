---
title: Saņemšana pēc beigām
translations_gpt:
---

{% include menu.html %}

Kas notiek, ja `.receive` izsaucat vairāk reižu, nekā ir ņemamu vērtību? Atbilde ir atkarīga no tā, vai kanāls ir **aizvērts**.

Ņemsim iepriekšējo ražotāja–patērētāja piemēru: fona uzdevums nosūta trīs vērtības un aizver kanālu. Ko darīt, ja patērētājs prasa ceturto?

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}

say $c.receive; # 1
say $c.receive; # 2
say $c.receive; # 3
say $c.receive; # par vienu saņemšanu par daudz
```

## Aizvērtā kanālā lieka saņemšana met izņēmumu

Aizvēršana neizmet jau sarindotās vērtības — trīs augstāk redzamie `.receive` izsaukumi joprojām atgriež `1`, `2` un `3`. Bet, tiklīdz kanāls ir aizvērts **un** tukšs, vairāk vērtību nekad nevar pienākt, tāpēc Raku, tā vietā lai ļautu jums gaidīt mūžīgi, ceļ izņēmumu:

```
Cannot receive a message on a closed channel
```

Izņēmums ir `X::Channel::ReceiveOnClosed`. Tas drīzāk palīdz nekā kaitina: tas patērētājam nepārprotami pasaka, ka kanāls ir iztukšots. Praksē jūs to nekad neuzskriet, patērējot ar `.list` (kas pie aizvēršanas apstājas glīti) vai ciklojot tikai tik ilgi, kamēr vērtības vēl ir, — abi paņēmieni parādīti iepriekšējā lappusē.

## Atvērtā kanālā lieka saņemšana bloķē

Ja ražotājs kanālu nekad neaizver, `.receive` nekādi nevar zināt, vai vēl kāda vērtība nāk, tāpēc tā vienkārši **gaida**:

```raku
my $c = Channel.new;
$c.send(1);
say $c.receive; # 1
say $c.receive; # gaida šeit — kanāls ir atvērts, bet tukšs
```

Programma pie otrā `.receive` iestrēgst, jo vērtība *varētu* vēl tikt nosūtīta. Tieši par šīm briesmām brīdināja iepriekšējā lappuse: aizmirstiet `.close`, un parasta «pagaidi nākamo vērtību» pārvēršas gaidīšanā, kas nekad nebeidzas.

Tātad abi iznākumi ir pretēji, un tas ir noderīgi. **Aizvērts** kanāls, kad tas ir tukšs, uzreiz kļūdojas — jūs saņemat izņēmumu, ko var ieraudzīt un noķert. **Atvērts** kanāls turpina gaidīt — tieši pareizi, kamēr ražotājs vēl strādā, bet kluss iestrēgums, ja ražotājs klusi apstājies, neaizverot kanālu. Kanāla aizvēršana ir tieši tas, kas šo kluso iestrēgumu pārvērš skaidrā ziņā, ka straume ir beigusies.

{% include nav.html %}
