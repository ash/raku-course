---
title: 'Розв''язання: Heredoc'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $name  = 'Anna';
my $item  = 'Raku Book';
my $price = 25;
my $count = 3;

print qq:to/END/;
    Dear $name,
    You ordered $count copies of "$item".
    That comes to {$count * $price} dollars.
    Thank you!
    END
```

🦋 Вихідний код можна знайти у файлі [a-heredoc.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/a-heredoc.raku).

## Вивід

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Коментарі

1. Heredoc починається з `qq:to`, а не з `q:to`, тож він інтерполює. Як і рядок `qq`, він підставляє скаляри — `$name`, `$count`, `$item` — *і* виконує вбудований код: блок `{$count * $price}` обчислює `3 * 25`, тож підсумок `75` з'являється просто в тексті.

1. Подвійні лапки навколо `"$item"` тут є просто буквальними символами; усередині heredoc-а немає роздільника, який треба екранувати, тож вони виводяться як записано, а `$item` усе одно інтерполюється.

1. Тіло й закривальне `END` мають однаковий відступ у чотири пробіли. Відступ термінатора прибирається з кожного рядка, тож ці чотири пробіли ніколи не потрапляють у рядок — вивід починається з лівого краю.

1. Heredoc уже закінчується переходом рядка, тож використано `print`, а не `say`, щоб не додати другого порожнього рядка.

{% include nav.html %}
