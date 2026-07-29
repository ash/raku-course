---
title: 'Розв''язання: Всеїдні іменовані аргументи'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub describe($name, *%opts) {
    my $details = %opts.sort.map({ "{.key}={.value}" }).join(', ');
    "$name: $details";
}

say describe('Anna', colour => 'red', size => 5);
```

🦋 Вихідний код можна знайти у файлі [slurpy-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/slurpy-hash.raku).

## Вивід

```
Anna: colour=red, size=5
```

## Коментарі

1. Сталий позиційний параметр `$name` заповнюється першим, а всеїдний `*%opts` далі збирає кожен іменований аргумент, що лишився, у хеш.

1. `%opts.sort` упорядковує пари за ключем, тож вивід є детермінованим — `colour` іде перед `size`. `.map` перетворює кожну пару на рядок `key=value` за допомогою `.key` та `.value`, а `.join(', ')` склеює їх разом.

1. Підсумковий рядок інтерполює `$name` і зібраний `$details`, даючи `Anna: colour=red, size=5`.

{% include nav.html %}
