---
title: 'Solutio: Tempore exsecutionis onerare'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

Programma, `require-import.raku`:

```raku
sub MAIN(Bool :$quiet) {
    if $quiet {
        say 'Silence.';
    }
    else {
        require Greeting <&hello>;
        say hello('Sam');
    }
}
```

🦋 Utrumque archivum fontem in directoria [exercises/advanced/modules-basics/require-at-runtime](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/require-at-runtime) invenies.

## Exitus

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Commentarii

1. `require` modulum tempore exsecutionis potius quam tempore compilationis onerat. Per se nihil importat, quapropter nudum `hello` ignotum esset.

1. Index `<&hello>` `require` iubet illud unum symbolum importare, itaque post enuntiatum `hello('Sam')` directe vocari potest, unde `Hello, Sam!`.

1. Hoc est id cui `require` *servit*: quia tempore exsecutionis currit, intra `if` sedere potest. Cum `--quiet` datur, ille ramus praetermittitur et modulus numquam oneratur — quod `use` tempore compilationis vitare non posset.

{% include nav.html %}
