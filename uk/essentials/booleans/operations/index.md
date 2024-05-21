---
title: Булеві операції
---

{% include menu.html %}

Ви можете виконувати всі стандартні операції з булевими значеннями: булеве І (AND), АБО (OR) та виключне АБО (або XOR):

```raku
say False && True; # AND
say False || True; # OR
say False ^^ True; # XOR
```

Ця програма виводить наступні результати:

    False
    True
    True

## Заперечення

Щоб заперечити булеве значення, використовуйте префіксний оператор `!`:

```raku
say !False; # True
```

Булеві значення можуть зберігатися в скалярних змінних:

```raku
my $did = True;
my $didn't = !$did;
```

{% include nav.html %}