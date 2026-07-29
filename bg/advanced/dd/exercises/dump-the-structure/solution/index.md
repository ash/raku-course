---
title: 'Solution: Изведете структурата от данни'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');

dd @data;
say "Structure: { @data.raku }";
```

🦋 Можете да намерите пълния код във файла [dump-the-structure.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-the-structure.raku).

## Резултат

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Коментари

1. `dd @data` отпечатва кодоподобно представяне на съдържанието на масива. То отива в стандартния поток за грешки.

1. Методът `.raku` връща същото представяне като низ, който след това е вграден в нормално съобщение чрез интерполация на код и е отпечатан с `say` в стандартния изход.

1. Двата реда изглеждат еднакво тук, но минават през различни изходни потоци: първият идва от `dd` (стандартна грешка), вторият от `say` (стандартен изход). Сравнете следното:

```console
$ raku t.raku > /dev/null
["Raku", [1, 2, 3], :key("value")]

$ raku t.raku 2&> /dev/null
Structure: ["Raku", [1, 2, 3], :key("value")]
```

{% include nav.html %}
