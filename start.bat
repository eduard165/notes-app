@echo off
:: Verifica si Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js no está instalado. Por favor, instálalo antes de continuar.
    exit /b
)

:: Verifica si npm está instalado
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo npm no está instalado. Por favor, instálalo antes de continuar.
    exit /b
)

:: Instalar dependencias
echo Instalando dependencias...
npm install

:: Iniciar la aplicación
echo Iniciando la aplicación...
npm start
