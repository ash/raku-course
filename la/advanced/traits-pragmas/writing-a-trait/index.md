---
title: Proprietatem scribere
---

{% include menu.html %}

Traits sunt ordinariae multi-subroutinae nomine speciali, itaque tuum proprium scribere potes. Ad trait addendum quod `is something` scribitur, defini `multi sub trait_mod:<is>` cuius parametra dicunt cui applicetur et trait nominant:

Hic est unus ex partibus magis provectis Raku, itaque noli sollicitari si intricatum videtur. Traits incorporatos perfecte uti potes sine scientia quomodo facti sint, et raro tuum proprium scribere debebis — hanc paginam tracta ut inspectionem sub tegumento.

```raku
my @traced;

multi sub trait_mod:<is>(Routine:D $r, :$traced!) {
    @traced.push($r.name);
}

sub foo() is traced { }
sub bar() is traced { }

say @traced; # [foo bar]
```

Lege signaturam: primum parametrum, `Routine:D $r`, est res cui trait adiunctum est — hic subroutina. `:D` est typus _smiley_ qui valorem **definitum** requirit — obiectum routinae actuale, non typum nudum, indefinitum `Routine` ipsum. (Socii eius sunt `:U`, qui obiectum typi indefinitum requirit, et `:_`, qui utrumque accipit.) Parametrum nominatum `:$traced!` est nomen proprium trait; eius praesentia est quod `is traced` hanc sub vocat. Quia traits tempore **compilationis** currunt, tam `foo` quam `bar` registrantur dum declarantur, itaque `@traced` iam eos enumerat antequam programma currit — etiam lineam `say @traced` supra duas definitiones `sub` movere posses et adhuc `[foo bar]` imprimeret.

Hic parvus trait tantum nomina registrat, sed idem mechanismus multo plus facere potest: routinam involvere ad logificationem addendam, attributum validare, vel metadata adiungere. Primum parametrum scribendo ut `Attribute` vel `Variable` loco `Routine`, trait attributis vel variabilibus applicari permittit. Traits sunt quomodo Raku syntaxin declarationis suae apertam servat — `is rw` et tuum proprium `is traced` eodem modo constructa sunt.

{% include nav.html %}
