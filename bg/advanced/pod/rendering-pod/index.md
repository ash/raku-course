---
title: Рендериране на Pod
translations_gpt:
---

{% include menu.html %}

Когато файлът съдържа Pod, компилаторът може да го превърне във форматиран текст, без да изпълнява програмата, като използва опцията `--doc`:

```
raku --doc mymodule.raku
```

За примера със заглавие и параграф от по-рано, това отпечатва нещо подобно на:

```
My Module

This module does something useful.
```

Списъците и кодовите блокове също се визуализират. Вземете този Pod:

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

Визуализиран с `raku --doc`, той отпечатва:

```
Shopping list

Things to buy:

  * Apples

  * Bread

  * Cheese

Run it like this:

    say 'hello';
```

Всеки `=item` става точка от списък, а блокът `=begin code … =end code` се показва без промяна и с отстъп, точно както е написан.

## Визуализиране като HTML

Същият механизъм може да произведе и други формати. За HTML инсталирате веднъж модул-форматиращ, след което го посочвате след `--doc`:

```
zef install Pod::To::HTML
raku --doc=HTML mymodule.raku > mymodule.html
```

Сега същият документ излиза като HTML — заглавието става `<h1>`, списъкът — `<ul>` с `<li>`, а кодовият блок — `<pre>`:

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

(Инструментът обвива това в пълна HTML страница.) Именно по този начин се създава официалната документация на Raku на [docs.raku.org](https://docs.raku.org) от Pod в изходния код на Rakudo.

{% include nav.html %}
