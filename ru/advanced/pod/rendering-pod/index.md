---
title: Рендеринг Pod
translations_gpt:
---

{% include menu.html %}

Если файл содержит Pod, компилятор может превратить его в форматированный текст без запуска программы, используя опцию `--doc`:

```
raku --doc mymodule.raku
```

Для примера с заголовком и абзацем из предыдущей темы это выведет что-то вроде:

```
My Module

This module does something useful.
```

Списки и блоки кода тоже отрисовываются. Возьмём такой Pod:

```raku
=begin pod

=head1 Shopping list

Things to buy:

=item Apples
=item Bread
=item Cheese

Run it like this:

=begin code
say 'hello';
=end code

=end pod
```

При отрисовке с помощью `raku --doc` будет выведено:

```
Shopping list

Things to buy:

  * Apples

  * Bread

  * Cheese

Run it like this:

    say 'hello';
```

Каждый `=item` превращается в маркер списка, а блок `=begin code … =end code` отображается дословно с отступом, именно так, как написан.

## Отрисовка в HTML

Тот же механизм может создавать другие форматы. Для HTML нужно один раз установить модуль-форматтер, а затем указать его после `--doc`:

```
zef install Pod::To::HTML
raku --doc=HTML mymodule.raku > mymodule.html
```

Теперь тот же самый документ выводится как HTML — заголовок становится элементом `<h1>`, список — `<ul>` из `<li>`, а блок кода — `<pre>`:

```html
<h1>Shopping list</h1>
<p>Things to buy:</p>
<ul>
  <li>Apples</li>
  <li>Bread</li>
  <li>Cheese</li>
</ul>
<p>Run it like this:</p>
<pre class="pod-block-code">say 'hello';</pre>
```

(Инструмент оборачивает это в полную HTML-страницу.) Именно так создаётся официальная документация Raku на [docs.raku.org](https://docs.raku.org) из Pod в исходном коде Rakudo.

{% include nav.html %}
