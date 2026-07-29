---
title: 'Розв''язання: Секція Pod'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod

say $=pod[0].contents.elems;
```

🦋 Вихідний код можна знайти у файлі [a-pod-section.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/a-pod-section.raku).

## Вивід

```
2
```

## Коментарі

1. `$=pod` містить Pod файлу у вигляді списку блоків; `$=pod[0]` є єдиним блоком `=begin pod`.

1. Його `.contents` — це блоки, вкладені всередину: заголовок `=head1` та абзац, — тож `.contents.elems` дорівнює `2`. Саме так, заходячи в структуру, програма читає власну документацію як дані.

{% include nav.html %}
