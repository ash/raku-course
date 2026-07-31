---
title: Viktorīna — Saņemšana pēc beigām
translations_gpt:
---

{% include menu.html %}

Kanālā ir saņemtas visas nosūtītās vērtības. Kas notiek pie **nākamā** `.receive`, ja kanāls joprojām ir **atvērts** (nekad nav aizvērts)?

{:.quiz}
0 | Tas met `X::Channel::ReceiveOnClosed`
1 | Tas bloķē, gaidot vērtību, kas varbūt nekad nepienāks
0 | Tas atgriež `Nil`
0 | Tas atgriež tukšu sarakstu `()`

{% include quiz.html %}

<div class="extended-explanation">

**Atvērtā** kanālā `.receive` nevar pateikt, vai ceļā ir vēl kāda vērtība, tāpēc tas gaida — iespējams, mūžīgi, ja ražotājs ir apstājies, neaizverot kanālu. Izņēmums `X::Channel::ReceiveOnClosed` ir **aizvērtā** kanāla gadījums: tikai aizvērts un tukšs kanāls uzreiz kļūdās, nevis bloķē.

</div>

{% include nav.html %}
