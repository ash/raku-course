---
title: Cerrar un canal
translations_gpt:
---

{% include menu.html %}

Cuando un productor no tiene más valores que enviar, llama a `.close` sobre el canal. Cerrar señala al consumidor que el flujo ha terminado.

La manera más cómoda de consumir un canal cerrado es `.list`, que te da todos los valores restantes y acaba en cuanto el canal está cerrado:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.send(3);
$c.close;

say $c.list; # (1 2 3)
```

Como `.list` espera a que el canal se cierre, es perfecta para «recoge todo lo que envíe el productor». Puedes tratar el resultado como cualquier otra lista: sumarlo, contarlo, etcétera.

```raku
my $c = Channel.new;
$c.send($_) for 1..5;
$c.close;

say [+] $c.list; # 15
```

Cerrar es como un consumidor sabe cuándo parar. Sin ello, `.list` (o un bucle de `.receive`) esperaría para siempre un valor que nunca llega. Cierra siempre un canal cuando el envío haya terminado.

{% include nav.html %}
