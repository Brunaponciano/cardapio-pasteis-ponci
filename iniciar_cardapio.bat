@echo off
title Pastéis Ponci - Cardápio Digital
color 0E

echo =========================================================
echo             PASTEIS PONCI - CARDAPIO DIGITAL
echo =========================================================
echo  Iniciando o servidor local do cardapio...
echo.

python server.py

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Ops! Nao foi possivel iniciar via Python.
    echo Abrindo diretamente o arquivo index.html no seu navegador...
    start index.html
)

pause
