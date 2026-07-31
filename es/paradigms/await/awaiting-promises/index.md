---
title: Esperar una promesa
translations_gpt:
---

{% include menu.html %}

`await` recibe una promesa, espera a que se complete y devuelve su resultado:

```raku
my $p = start { 7 * 6 };
say await $p; # 42
```

El programa se detiene en `await` solo el tiempo necesario, y después continúa con el valor que produjo la promesa.

Dadas varias promesas, `await` espera a **todas** y devuelve sus resultados en el mismo orden que las promesas de la lista:

```raku
my @jobs = (start { 5 }), (start { 10 }), (start { 15 });
say await @jobs;     # (5 10 15)
say [+] await @jobs; # 30
```

Los trabajos corren de forma concurrente, pero `await @jobs` no retorna hasta que todos han terminado. Cada resultado ocupa entonces la misma posición que su promesa en `@jobs`, sin importar cuál acabara primero.

Si una promesa esperada quedó **rota** — su bloque lanzó una excepción —, `await` relanza esa excepción en el punto del `await`. Esto significa que los errores del trabajo en segundo plano afloran allí donde lo esperas, así que puedes tratarlos con los `try` / `CATCH` de siempre de la parte sobre excepciones:

```raku
my $p = start { die 'no such file' };

my $result = try await $p;
say $result // "the job failed: $!";
```

Esto imprime:

```
the job failed: no such file
```

El `die` ocurre en un hilo en segundo plano, pero la excepción viaja con la promesa y sale a la luz en el `await`. El `try` la captura allí, dejando `$result` indefinido y el error en `$!`, de modo que un fallo en trabajo concurrente se trata exactamente igual que cualquier otra excepción. Esperar, por tanto, no va solo de obtener un valor: es el momento en que el trabajo concurrente vuelve a unirse al flujo principal, con sus resultados y sus errores por igual.

{% include nav.html %}
