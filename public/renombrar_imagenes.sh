#!/bin/bash

# Contador para los nuevos nombres
count=1

# Bucle para renombrar todas las imágenes
for img in *.jpg *.png *.jpeg; do
  # Verifica si hay archivos que renombrar
  if [ -e "$img" ]; then
    # Renombrar la imagen a un nuevo nombre secuencial
    mv "$img" "$count.jpg"
    # Incrementar el contador
    ((count++))
  fi
done

echo "Renombrado completo: $((count - 1)) imágenes renombradas."
