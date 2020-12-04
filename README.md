 # PROSTA SORTOWNIA 
Projekt zakłada rozpoznawanie i oddzielanie butelek plastikowych od butelek szklanych i puszek. Butelki szklany będą jeszcze dodatkowo sortowanie pod wzgledem    koloru szkła. Jest to wstępna wersja projektu zakładajacego przyszłościowe rozdzielanie wyrzucanych śmieci na wysypiskach czy w sortowniach, aby zautomatyzować pracę. Jednakże projekt możnaby dalej także rozwinąć w automatycznego barmana lub przy większej liczbie obiektów w automatycznego sprzedawcę sklepowego.

### ZESPÓŁ

- Magdalena Kuna
github: https://github.com/MagdalenaKuna
- Dawid Lubera
github: https://github.com/Delpod

### ZADANIA

1. porównanie - w projekcie zostaną porównane ze sobą działanie servisu Custom Vision na portalu Azure z naszym algorytmem napisanym z wykorzystaniem jezyka python oraz conajmniej jednej z biblitek: scikit-image/tensorflow/opencv. Porównaa zostanie jakość abu rozwiązań, szybkosć, poniesione koszta oraz zajętość pamięciowa. 
2. wykrywanie obiektów - wykrywanie buletek i puszek na zdjęciu 
3. selekcja - rozróżnienie i zetykietowanie obiektów
4.douczanie - do przemyślenia 

### SCHEMAT
WARIANT 1: Wynik będzie pokazywany na stronie internetowej specjalnie stworzonej, tam też będzie można wgrać zdjecie. Następnie planujemy połączenie poprzez Function App do serwisu Custom Vision. Function App będzie się takze łaczyło z Dockerem na którym będzie nasz algorytm. 

WARIANT 2: Wytrenowany model z serwisu Custom Vision ściągamy, aby używac go lokalnie - ściaga się do tensorflow. 

### ARCHITEKTURA
Wariant 1: 

![alt text](https://github.com/ProjektCustomVisionKL/projekt-custom-vision-kl/blob/master/W1.png)

Wariant 2: 

![alt text](https://github.com/ProjektCustomVisionKL/projekt-custom-vision-kl/blob/master/W2.png)

### TECHNOLOGIE
- servis Custom Vision - Azure
 - scikit-image/tensorflow/opencv
 - docker

### PLAN 
1. Znalezienie zdjęć - Dawid - do 13.12
2. Nauczenie Custom vision - Magda + Dawid - 30.12
3. Opracowanie własnego algorytmu - Magda + Dawid - 8.01
4. Wstępny 2 check-point do potwierdzenia - 10.01
5. Posklejanie wszystkiego w całość + prezentacja - Magda - 16.10 
6. Przedstawienie wyników pracy.
