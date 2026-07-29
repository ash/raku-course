---
title: Відображення Pod
translations_gpt:
---

{% include menu.html %}

Щойно файл несе Pod, компілятор може перетворити його на форматований текст, не виконуючи програми, за допомогою опції `--doc`:

```
raku --doc mymodule.raku
```

Для наведеного раніше прикладу із заголовком та абзацом це виводить приблизно таке:

```
My Module

This module does something useful.
```

Списки й блоки коду теж відображаються. Візьмімо такий Pod:

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

Відображений через `raku --doc`, він виводить:

```
Shopping list

Things to buy:

  * Apples

  * Bread

  * Cheese

Run it like this:

    say 'hello';
```

Кожен `=item` стає пунктом списку, а блок `=begin code … =end code` показується дослівно й з відступом, точно як записано.

## Відображення в HTML

Той самий механізм може давати й інші формати. Для HTML ви одноразово встановлюєте модуль-форматувальник, а потім називаєте його після `--doc`:

```
zef install Pod::To::HTML
raku --doc=HTML mymodule.raku > mymodule.html
```

Тепер той самий документ виходить як HTML: заголовок стає `<h1>`, список — `<ul>` із `<li>`, а блок коду — `<pre>`:

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

(Інструмент загортає це в повноцінну HTML-сторінку.) Саме так офіційну документацію Raku на [docs.raku.org](https://docs.raku.org) створюють із Pod у власному вихідному коді Rakudo.

{% include nav.html %}
