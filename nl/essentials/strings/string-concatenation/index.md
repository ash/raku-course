---
title: String concatenation in Raku
---

{% include menu.html %}

Als je twee strings hebt, kun je ze samenvoegen en een nieuwe, langere string krijgen. Deze actie wordt stringconcatenatie genoemd. In Raku concateneer je strings met—gok eens?—de concatenatie-operator. Deze operator is een tilde: `~`. Om twee strings te concateneren, plaats je `~` ertussen:

```raku
say 'Hello, ' ~ 'World!';
```

Als onze strings in variabelen worden bewaard, kunnen we 'variabelen concateneren', nou ja, eigenlijk de strings concateneren die die variabelen bevatten:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';

say $greeting ~ $who;
```

Of je kunt een nieuwe variabele maken met de geconcateneerde waarde:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';
my $message = $greeting ~ $who;

say $message;
```

## Concatenatie met toewijzing

Wanneer je de variabele moet bijwerken en de nieuwe string eraan moet toevoegen, gebruik je de volgende vorm:

```raku
# In plaats van 
$str = $str ~ $another-str;

# gebruik:
$str ~= $another-str;
```

{% include nav.html %}