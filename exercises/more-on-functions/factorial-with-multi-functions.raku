multi factorial(1)  { 1 }
multi factorial($n) { $n * factorial($n - 1) }

say factorial(@*ARGS[0].Int);
