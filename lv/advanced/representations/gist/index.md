---
title: 'Metode `.gist`'
---

{% include menu.html %}

Metode `.gist` atgriež **cilvēkam draudzīgu** vērtības attēlojumu — formu, ko jūs vēlētos *lasīt*. Tieši to izdrukā `say` (un `note`): tās izsauc `.gist` katram argumentam.

```raku
say 42.gist;     # 42
say 'Raku'.gist; # Raku
```

Vienkāršām vērtībām kopsavilkums ir vienkārši pati vērtība. Saliktu datu gadījumā `.gist` pievieno nelielu formatējumu, lai struktūra paliktu lasāma:

```raku
my @a = 'alpha', 'beta', 'gamma';
say @a.gist; # [alpha beta gamma]
```

Tipa objekts — vērtība, kas apzīmē pašu tipu — tiek attēlots kā tā nosaukums iekavās, kas atvieglo tā pamanīšanu izvadē:

```raku
say Int.gist; # (Int)
```

{% include nav.html %}
