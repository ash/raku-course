---
title: Kanāla aizvēršana
translations_gpt:
---

{% include menu.html %}

Kad ražotājam vairs nav ko sūtīt, tas kanālam izsauc `.close`. Aizvēršana pavēsta patērētājam, ka straume ir beigusies.

Ērtākais veids, kā patērēt aizvērtu kanālu, ir `.list`, kas dod jums katru atlikušo vērtību un beidzas, tiklīdz kanāls ir aizvērts:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.send(3);
$c.close;

say $c.list; # (1 2 3)
```

Tā kā `.list` gaida kanāla aizvēršanu, tā lieliski der uzdevumam «savāc visu, ko ražotājs sūta». Rezultātu var apstrādāt kā jebkuru citu sarakstu — saskaitīt, saskaitīt elementus un tā tālāk:

```raku
my $c = Channel.new;
$c.send($_) for 1..5;
$c.close;

say [+] $c.list; # 15
```

Aizvēršana ir tas, pēc kā patērētājs zina, kad apstāties. Bez tās `.list` (vai `.receive` cikls) mūžīgi gaidītu vērtību, kas nekad nepienāk. Vienmēr aizveriet kanālu, kad sūtīšana ir pabeigta.

{% include nav.html %}
