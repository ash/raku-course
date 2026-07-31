---
title: Dies et tempus
---

{% include menu.html %}

Raku habet typos integratos ad operandum cum diebus calendarii et temporibus horologii. Dies calendarii repraesentatur typo `Date`. Unum creas dando annum, mensem, et diem:

```raku
my $d = Date.new(2026, 6, 27);
say $d; # 2026-06-27
```

Cum diem habes, partes eius legere potes:

```raku
my $d = Date.new(2026, 6, 27);
say $d.year;  # 2026
say $d.month; # 6
say $d.day;   # 27
```

Methodus `day-of-week` refert quem diem hebdomadis dies cadat, numeratum ab `1` pro die Lunae ad `7` pro die Solis:

```raku
say Date.new(2026, 6, 27).day-of-week; # 6
```

Dies 27 Iunii 2026 est dies Saturni, itaque eventus est `6`.

Methodus `is-leap-year` refert num dies in anno bisextili sit:

```raku
say Date.new(2024, 1, 1).is-leap-year; # True
say Date.new(2026, 1, 1).is-leap-year; # False
```

Ad diem hodiernum obtinendum, voca `Date.today`. Output eius hic non monstramus, quia pendet a die quo programma curris.

{% include nav.html %}
