 # PROSTA SORTOWNIA 
Projekt zakłada rozpoznawanie i oddzielanie butelek plastikowych od butelek szklanych i puszek. Butelki szklane będą jeszcze dodatkowo sortowane pod wzgledem koloru szkła. Jest to wstępna wersja projektu zakładajacego przyszłościowe rozdzielanie wyrzucanych śmieci na wysypiskach czy w sortowniach, aby zautomatyzować pracę. Jednakże projekt możnaby także rozwinąć w stronę automatycznego barmana lub przy większej liczbie obiektów w automatycznego sprzedawcę sklepowego.

### ZESPÓŁ

- Magdalena Kuna - GithHub: https://github.com/MagdalenaKuna
- Dawid Lubera - GitHub: https://github.com/Delpod

### ZADANIA

1. Porównanie - w projekcie porównane zostaną ze sobą działania serwisu Custom Vision na portalu Azure z naszym algorytmem napisanym z wykorzystaniem jezyka Python oraz conajmniej jednej z biblitek: OpenCV/TensorFlow/scikit-image. Porównana zostanie jakość abu rozwiązań, szybkosć, poniesione koszta oraz zajętość pamięciowa 
2. Wykrywanie obiektów - wykrywanie buletek i puszek na zdjęciu 
3. Selekcja - rozróżnienie i zetykietowanie obiektów
4. Douczanie - do przemyślenia 

### SCHEMAT
WARIANT 1: Wynik będzie pokazywany na specjalnie stworzonej stronie internetowej, gdzie będzie można wgrać zdjęcie i uzyskać wyniki z obu rozwiązań. Z naszego algorytmu będzie można skorzystać z pomocą aplikacji napisanej z użyciem biblioteki Flask, która będzie w kontenerze Dockera. Połączenie strona - Custom Vision i strona - Docker planujemy rozwiązać z pomocą Fuction App. 

WARIANT 2: Wytrenowany model z serwisu Custom Vision ściągamy, aby używac go lokalnie - używa  się go w TensorFlow.

### ARCHITEKTURA
Wariant 1: 

![Wariant 1 - sieciowy](W1.png)

Wariant 2: 

![Wariant 2 - lokalny](W2.png)

### TECHNOLOGIE
- Custom Vision Service - Azure
- OpenCV/TensorFlow/scikit-image
- Docker
- App Service

### PLAN 
1. Znalezienie zdjęć - Dawid - do 13.12
2. Nauczenie Custom vision - Magda + Dawid - 30.12
3. Opracowanie własnego algorytmu - Magda + Dawid - 08.01
4. Wstępny 2 check-point do potwierdzenia - 10.01
5. Posklejanie wszystkiego w całość + prezentacja - Magda - 16.10 
6. Przedstawienie wyników pracy
