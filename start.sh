#!/bin/bash

# Verifica si Node.js está instalado
if ! command -v node &> /dev/null
then
    echo "Node.js no está instalado. Por favor, instálalo antes de continuar."
    exit
fi

# Verifica si npm está instalado
if ! command -v npm &> /dev/null
then
    echo "npm no está instalado. Por favor, instálalo antes de continuar."
    exit
fi

# Instala dependencias
echo "Instalando dependencias..."
npm install

# Inicia la aplicación
echo "Iniciando la aplicación..."
npm start
