---
title: Attālinātu savienojumu veidošana
translations_gpt:
---

{% include menu.html %}

Kursa pēdējā apakšdaļa pievēršas _tīmekļa_ programmēšanai — sarunai ar citām mašīnām tīklā. Mēs būvējam no apakšas: vispirms neapstrādāts tīkla savienojums, tad vienkāršs HTTP klients, vienkāršs HTTP serveris un beigās ieskats Cro ietvarā.

Atšķirībā no pārējā kursa šiem piemēriem darbam vajadzīgs **tīkla savienojums**, bet vēlākajiem — moduļi, kas jāuzstāda pašam. Kods ir uzrakstīts tā, lai kompilētos un strādātu, palaižot to pret īstu serveri, bet tā izvadi nevar parādīt tā, kā to var bezsaistes piemēriem. Katrā lappusē ir norādīts, kas tai vajadzīgs.

Sākam ar visa tīkla koda pamatu: ar _ligzdu_ (_socket_), divvirzienu cauruli starp divām programmām tīklā.

{% include nav.html %}
