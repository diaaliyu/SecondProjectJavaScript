function factorielleRecursive(n) {
    if (n === 0) {
      return 1; // Cas de base : la factorielle de 0 est 1
    } else {
      return n * factorielleRecursive(n - 1);
    }
  }