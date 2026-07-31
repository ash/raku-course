---
title: Vienkāršs HTTP serveris
translations_gpt:
---

{% include menu.html %}

_Serveris_ ir savienojuma otra puse: tā vietā, lai sniegtos pie attālinātas mašīnas, tas gaida, kad klienti sniegsies **pie tā**. To pašu pamatklasi `IO::Socket::INET` var lietot arī šim — vienkārši pārslēdziet to klausīšanās režīmā.

Šī sadaļa ar rokām uzbūvē sīku tīmekļa serveri: klausies savienojumu, nolasi pieprasījumu un nosūti atpakaļ HTTP atbildi. Tāpat kā iepriekšējie ligzdu piemēri, šie jāpalaiž savā mašīnā un jāpieslēdzas tiem ar pārlūku vai citu programmu.

{% include nav.html %}
