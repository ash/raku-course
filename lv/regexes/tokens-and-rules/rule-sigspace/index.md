---
title: Nozīmīgas atstarpes likumos
translations_gpt:
---

{% include menu.html %}

`rule` ir `token` ar vienu papildu iespēju ieslēgtu: `:sigspace` (nozīmīga atstarpe) — tieši apstākļvārdu `:s`. Tas pārvērš atstarpes, ko rakstāt raksturā, par automātisku atstarpju piemeklētāju starp daļām. Tas ir tas, ko vēlaties ikreiz, kad parsējamajā tekstā starp gabaliem ir atstarpes.

Salīdziniet abus. `token` iekšienē atstarpes raksturā tiek **ignorētas**, tāpēc `<first> <second>` prasa abas daļas bez nekā starp tām. Tā kā `\w+` apstājas pie atstarpes, ievadei ar atstarpi sakritības nav:

```raku
grammar WithToken {
    token TOP    { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithToken.parse('foo bar').defined; # False
```

Atstarpi `token` iekšienē *var* pieņemt — tikai jāpiemeklē pašam, piemēram, ar `\s+`:

```raku
token TOP { <first> \s+ <second> }      # now 'foo bar' parses
```

`rule` šo atstarpju piemeklēšanu ieliek jūsu vietā, tāpēc pietiek vienkārši uzrakstīt atstarpi starp daļām:

```raku
grammar WithRule {
    rule TOP     { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithRule.parse('foo bar').defined; # True
```

Izplatīts paņēmiens ir izmantot `rule` augstāka līmeņa struktūrai, kur daļas atdalītas ar atstarpēm, un `token` maziem gabaliem, piemēram, nosaukumiem un skaitļiem, kuros atstarpju nav. Tas patur jūsu gramatiku gan pareizu, gan viegli lasāmu.

{% include nav.html %}
