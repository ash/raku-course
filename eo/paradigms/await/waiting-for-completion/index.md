---
title: Atendi la finon
translations_gpt:
---

{% include menu.html %}

`await` estas la eksplicita maniero atendi, sed reaktiva kodo ankaŭ atendas — nur implicite. Bloko `react` ne finiĝas, ĝis ĉiuj supply, kiujn ĝi observas, estas finitaj, kio donas al vi la saman garantion «ĉio kompletiĝis»:

```raku
my @values;

react {
    whenever Supply.from-list(2, 4, 6) {
        @values.push($_);
    }
}

say [+] @values; # 12
```

La `say` plenumiĝas nur **post** kiam la bloko react finiĝis, do `@values` jam tenas ĉiun eligitan valoron. Efektive, la bloko `react` atendis la fluon por vi.

Jen utila ŝablono: uzu blokon `react` por kolekti ĉion, kion supply eligas, kaj poste laboru per la kolektita rezulto sur la sekva linio, certa, ke la fluo estas kompleta. Ĉu vi atendas promeson per `await` aŭ fluon per `react`, la principo estas la sama — paŭzu, ĝis la samtempa laboro estas farita, poste daŭrigu per ĝiaj rezultoj.

{% include nav.html %}
