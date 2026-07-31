---
title: Laborando cum tempore
---

{% include menu.html %}

Cum tempus diei necnon diem requiris, utere typo `DateTime`. Creatur similiter ac `Date`, sed etiam horam, minutum, et secundum das:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt; # 2026-06-27T14:30:00Z
```

Forma textus praedefinita normam ISO 8601 sequitur: dies, littera `T`, tempus, et `Z` finalis pro zona temporis UTC.

`DateTime` accessum ad partes temporis praebet, praeter partes diei quas iam cognoscis:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt.hour;   # 14
say $dt.minute; # 30
```

Ad momentum praesens obtinendum, voca `DateTime.now`. Sicut cum `Date.today`, output eius non monstramus, quia mutat quotiens programma currit.

{% include nav.html %}
