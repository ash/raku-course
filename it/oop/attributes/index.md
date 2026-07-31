---
title: Attributi
translations_gpt:
---

{% include menu.html %}

Una classe vuota non è molto utile. Per permettere a un oggetto di portare con sé dati propri, si danno alla classe degli _attributi_. Un attributo si dichiara dentro la classe con la parola chiave `has`:

```raku
class Dog {
    has $.name;
    has $.age;
}
```

Ogni oggetto della classe riceve la propria copia di questi attributi. I loro valori si impostano quando crei l'oggetto, passandoli a `new` come argomenti nominati:

```raku
class Dog {
    has $.name;
    has $.age;
}

my $rex = Dog.new(name => 'Rex', age => 3);
```

Il `$.` in `has $.name` fa due cose insieme: dichiara un attributo e crea un metodo con lo stesso nome — un _accessore_ — che restituisce il valore dell'attributo:

```raku
say $rex.name; # Rex
say $rex.age;  # 3
```

Oggetti diversi contengono valori propri, indipendenti l'uno dall'altro:

```raku
my $rex  = Dog.new(name => 'Rex',  age => 3);
my $fido = Dog.new(name => 'Fido', age => 5);

say $rex.name;  # Rex
say $fido.name; # Fido
```

Gli argomenti che seguono mostrano come rendere modificabili gli attributi e come dare loro dei valori predefiniti. (C'è anche un modo per dichiarare attributi _privati_, nascosti all'esterno; ci torneremo una volta introdotti i metodi.)

{% include nav.html %}
