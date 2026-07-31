---
title: Ejecutar desde REPL
---

{% include menu.html %}

REPL significa _Read–eval–print loop_ (bucle de leer-evaluar-imprimir). Es un modo de shell incorporado donde puedes escribir instrucciones y obtener resultados intermedios en la pantalla, incluyendo el estado de las variables y la salida que genera tu programa.

Para iniciar el shell de Rakudo, simplemente escribe:

```console
$ raku
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.

You may want to `zef install Readline` or `zef install Linenoise` or use rlwrap for a line editor

To exit type 'exit' or '^D'
> 
```

La salida puede depender de la versión actualmente instalada del compilador. En la salida anterior, el shell recomienda instalar algunos módulos para una mejor experiencia de usuario, por lo que ves el mensaje correspondiente.

Al final, hay un carácter de prompt `>` donde puedes escribir tu programa o sus partes. El shell lo compilará línea por línea tan pronto como presiones Enter.

    > say 'Hello, World';
    Hello, World
    > 

{% include nav.html %}