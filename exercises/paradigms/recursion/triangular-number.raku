multi tri(0)  { 0 }
multi tri($n) { $n + tri($n - 1) }

say tri(5);
