---
title: 'Cuestionario: Una barra invertida en la salida'
---

{% include menu.html %}

De las siguientes cadenas, selecciona aquellas que tendrán precisamente una barra invertida `\` en la salida si las imprimes.

{:.quiz}
0 | &quot;Level\n\t2&quot;
0 | &quot;Level\n\nTwo&quot;
1 | &apos;Storey\nTwo&apos;
1 | &apos;Tab is \t&apos;
0 | &quot;Using a tab\there&quot;
1 | &quot;//\\\\&quot; | La salida es `//\`
1 | &apos;//\\\\&apos; | Una barra invertida escapa a la otra aquí: `//\`.
1 | &apos;\&quot;&apos; | No hay escape aquí, la cadena aparece tal cual: `\"`.

{% include quiz.html %}

## Comentarios

Lo principal a observar aquí son las comillas. Determinan la forma en que los caracteres con prefijo `\` son escapados.

{% include nav.html %}