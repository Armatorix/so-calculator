import { MenuItem } from "@mui/material"

export interface Converter {
    name: string
    values: number[]
}

export const Converters: Converter[] =
    [
        {
            name: "Klacze",
            values: [605.51, 605.51, 605.51, 605.51]
        },
        {
            name: "Ogiery, wałachy",
            values: [605.51, 605.51, 605.51, 605.51]
        },
        {
            name: "Źrebaki w wieku 2 lata i więcej",
            values: [605.51, 605.51, 605.51, 605.51]
        },
        {
            name: "Źrebaki w wieku 1-2 lata",
            values: [605.51, 605.51, 605.51, 605.51]
        },
        {
            name: "Źrebaki poniżej 1 roku",
            values: [605.51, 605.51, 605.51, 605.51]
        },
        {
            name: "Byczki i jałówki ubijane poniżej 1 roku",
            values: [353.35, 304.10, 377.28, 398.16]
        },
        {
            name: "Byczki i jałówki poniżej 1 roku do dalszej hodowli",
            values: [342.00, 345.58, 324.55, 333.77]
        },
        {
            name: "Byczki w wieku 1-2 lat",
            values: [467.61, 528.57, 478.13, 496.84]
        },
        {
            name: "Jałówki w wieku 1-2 lat",
            values: [155.37, 196.52, 188.07, 115.50]
        },
        {
            name: "Samce bydła w wieku 2 lat i więcej",
            values: [332.71, 328.05, 326.80, 334.54]
        },
        {
            name: "Jałówki „hodowlane” w wieku 2 lat i więcej",
            values: [312.23, 314.29, 270.67, 193.55]
        },
        {
            name: "Jałówki opasowe w wieku 2 lat i więcej",
            values: [270.75, 437.80, 367.75, 342.75]
        },
        {
            name: "Krowy mleczne",
            values: [1409.75, 1463.12, 1330.09, 1099.69]
        },
        {
            name: "Krowy mamki",
            values: [288.56, 309.12, 276.87, 296.93]
        },
        {
            name: "Owce maciorki",
            values: [46.98, 49.05, 42.76, 60.00]
        },
        {
            name: "Jagnięta poniżej 1 roku",
            values: [9.75, 13.21, 5.98, 14.58]
        },
        {
            name: "Pozostałe owce dorosłe (np. skopy)",
            values: [8.35, 8.78, 8.39, 6.64]
        },
        {
            name: "Kozy samice 1-roczne i starsze",
            values: [241.81, 286.19, 242.51, 264.35]
        },
        {
            name: "Pozostałe kozy - koźlęta, capy",
            values: [40.79, 40.79, 40.79, 40.79]
        },
        {
            name: "Prosięta o wadze do 20 kg",
            values: [86.95, 86.95, 86.95, 86.95]
        },
        {
            name: "Lochy o wadze 50 kg i więcej",
            values: [544.60, 518.45, 476.21, 546.77]
        },
        {
            name: "Tuczniki o wadze 50 kg i więcej",
            values: [348.39, 352.62, 392.05, 385.60]
        },
        {
            name: "Warchlaki o wadze 20-50 kg",
            values: [141.92, 148.02, 145.02, 108.59]
        },
        {
            name: "Brojlery kurze",
            values: [9.88, 9.88, 9.88, 9.88]
        },
        {
            name: "Kury nioski do produkcji jaj konsumpcyjnych",
            values: [14.82, 15.35, 15.79, 14.69]
        },
        {
            name: "Kury nioski do produkcji jaj wylęgowych",
            values: [32.53, 29.16, 29.98, 32.15]
        },
        {
            name: "Indyki nioski",
            values: [33.90, 33.90, 33.90, 33.90]
        },
        {
            name: "Brojlery indycze",
            values: [33.90, 33.90, 33.90, 33.90]
        },
        {
            name: "Kaczki nioski",
            values: [14.77, 14.77, 14.77, 14.77]
        },
        {
            name: "Brojlery kacze",
            values: [14.77, 14.77, 14.77, 14.77]
        },
        {
            name: "Gęsi nioski",
            values: [32.08, 32.08, 32.08, 32.08]
        },
        {
            name: "Brojlery gęsie",
            values: [32.08, 32.08, 32.08, 32.08]
        },
        {
            name: "Przepiórki",
            values: [13.94, 13.94, 13.94, 13.94]
        },
        {
            name: "Strusie",
            values: [235.95, 235.95, 235.95, 235.95]
        },
        {
            name: "Króliki - samice",
            values: [152.86, 152.86, 152.86, 152.86]
        },
        {
            name: "Brojlery królicze",
            values: [0.00, 0.00, 0.00, 0.00]
        },
        {
            name: "Pnie pszczele",
            values: [82.92, 82.92, 82.92, 82.92]
        },
        {
            name: "Pozostały drób",
            values: [13.94, 13.94, 13.94, 13.94]
        },
        {
            name: "Brojlery kurze w chowie EKOLOGICZNYM",
            values: [9.88, 9.88, 9.88, 9.88]
        },
        {
            name: "Kury nioski do produkcji jaj konsumpcyjnych w chowie EKOLOGICZNYM",
            values: [14.82, 15.35, 15.79, 14.69]
        },
        {
            name: "Kury nioski do produkcji jaj wylęgowych w chowie EKOLOGICZNYM",
            values: [32.53, 29.16, 29.98, 32.15]
        },
        {
            name: "Indyki nioski w chowie EKOLOGICZNYM",
            values: [33.90, 33.90, 33.90, 33.90]
        },
        {
            name: "Brojlery indycze w chowie EKOLOGICZNYM",
            values: [33.90, 33.90, 33.90, 33.90]
        },
        {
            name: "Kaczki nioski w chowie EKOLOGICZNYM",
            values: [14.77, 14.77, 14.77, 14.77]
        },
        {
            name: "Brojlery kacze w chowie EKOLOGICZNYM",
            values: [14.77, 14.77, 14.77, 14.77]
        },
        {
            name: "Gęsi nioski w chowie EKOLOGICZNYM",
            values: [32.08, 32.08, 32.08, 32.08]
        },
        {
            name: "Brojlery gęsie w chowie EKOLOGICZNYM",
            values: [32.08, 32.08, 32.08, 32.08]
        },
        {
            name: "Przepiórki w chowie EKOLOGICZNYM",
            values: [13.94, 13.94, 13.94, 13.94]
        },
        {
            name: "Strusie w chowie EKOLOGICZNYM",
            values: [235.95, 235.95, 235.95, 235.95]
        },
        {
            name: "Pozostały drób w chowie EKOLOGICZNYM",
            values: [13.94, 13.94, 13.94, 13.94]
        },
        {
            name: "Zwierzęta futerkowe - samice hodowlane",
            values: [183.44, 183.44, 183.44, 183.44]
        },
        {
            name: "Rośliny in vitro",
            values: [1394.03, 1394.03, 1394.03, 1394.03]
        },
        {
            name: "Entomofagi - powierzchnia upraw żywicielskich",
            values: [1160.45, 1160.45, 1160.45, 1160.45]
        },
        {
            name: "Dżdżownice",
            values: [580.29, 580.29, 580.29, 580.29]
        },
        {
            name: "Ślimaki",
            values: [6.21, 6.21, 6.21, 6.21]
        },
        {
            name: "Raki",
            values: [24326.07, 24326.07, 24326.07, 24326.07]
        },
        {
            name: "Alpaki",
            values: [33.89, 35.28, 30.20, 46.71]
        },
        {
            name: "Jelenie",
            values: [605.51, 605.51, 605.51, 605.51]
        },
        {
            name: "Daniele",
            values: [605.51, 605.51, 605.51, 605.51]
        },
        {
            name: "Osły",
            values: [605.51, 605.51, 605.51, 605.51]
        },
        {
            name: "Agrest",
            values: [2496.83, 3259.53, 3175.60, 2943.38]
        },
        {
            name: "Anyż • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Anyż • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Arbuz • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Arbuz • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Arbuz • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Arcydzięgiel litwor • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Arcydzięgiel litwor • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Arnika łąkowa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Arnika łąkowa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Aronia czarnoowocowa",
            values: [676.83, 779.23, 1046.24, 1089.03]
        },
        {
            name: "Babka lancetowata • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Babka lancetowata • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Babka płesznik • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Babka płesznik • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Barbula szara • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Barbula szara • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Batat",
            values: [225.51, 225.51, 225.51, 225.51]
        },
        {
            name: "Bazylia pospolita • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Bazylia pospolita • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Berberys zwyczajny • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Berberys zwyczajny • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Bergenia grubolistna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Bergenia grubolistna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Bez czarny",
            values: [2408.78, 2408.78, 2408.78, 2408.78]
        },
        {
            name: "Bieluń dziędzierzawa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Bieluń dziędzierzawa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Bieluń indiański • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Bieluń indiański • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Bobik • strączkowe • na ziarno",
            values: [697.17, 809.58, 717.89, 695.23]
        },
        {
            name: "Bobik • strączkowe • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Bodziszek iberyjski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Bodziszek iberyjski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Bodziszek leśny • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Bodziszek leśny • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Borówka brusznica",
            values: [1234.16, 2090.74, 3148.36, 2174.85]
        },
        {
            name: "Borówka niska",
            values: [10963.46, 11926.80, 11601.67, 12812.73]
        },
        {
            name: "Borówka średnia",
            values: [10963.46, 11926.80, 11601.67, 12812.73]
        },
        {
            name: "Borówka wysoka",
            values: [10963.46, 11926.80, 11601.67, 12812.73]
        },
        {
            name: "Bób • strączkowe • na ziarno",
            values: [3591.83, 3580.91, 3147.10, 3813.71]
        },
        {
            name: "Bób • strączkowe • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Bób • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Bób • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Bób • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Brokuł włoski • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Brokuł włoski • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Brokuł włoski • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Brukiew • uprawy pastewne",
            values: [624.90, 624.90, 624.90, 624.90]
        },
        {
            name: "Brukiew • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Brukiew • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Brukiew • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Brzoskwinia zwyczajna",
            values: [1381.69, 2153.72, 1662.68, 1308.06]
        },
        {
            name: "Burak cukrowy • na korzeń",
            values: [1644.65, 1684.89, 1533.19, 1490.82]
        },
        {
            name: "Burak cukrowy • plantacje nasienne",
            values: [2808.50, 2752.14, 2827.71, 2646.20]
        },
        {
            name: "Burak cukrowy • uprawy pastewne",
            values: [656.85, 656.85, 656.85, 656.85]
        },
        {
            name: "Burak ćwikłowy • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Burak ćwikłowy • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [3470.93, 3347.00, 3359.78, 3280.91]
        },
        {
            name: "Burak ćwikłowy • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3470.93, 3347.00, 3359.78, 3280.91]
        },
        {
            name: "Burak liściowy • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Burak liściowy • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Burak liściowy • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Burak pastewny • uprawy pastewne",
            values: [656.85, 656.85, 656.85, 656.85]
        },
        {
            name: "Bylica boże drzewko • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Bylica boże drzewko • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Bylica estragon • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Bylica estragon • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Bylica piołun • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Bylica piołun • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Cebula kartoflanka • plantacje nasienne",
            values: [8727.60, 8727.60, 8727.60, 8727.60]
        },
        {
            name: "Cebula kartoflanka • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Cebula kartoflanka • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Cebula kartoflanka • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Cebula perłowa • plantacje nasienne",
            values: [8727.60, 8727.60, 8727.60, 8727.60]
        },
        {
            name: "Cebula perłowa • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Cebula perłowa • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Cebula perłowa • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Cebula wielopiętrowa • plantacje nasienne",
            values: [8727.60, 8727.60, 8727.60, 8727.60]
        },
        {
            name: "Cebula wielopiętrowa • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Cebula wielopiętrowa • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Cebula wielopiętrowa • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Cebula zwyczajna • plantacje nasienne",
            values: [8727.60, 8727.60, 8727.60, 8727.60]
        },
        {
            name: "Cebula zwyczajna • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Cebula zwyczajna • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Cebula zwyczajna • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Chaber bławatek • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Chaber bławatek • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Chaber driakiewnik • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Chaber driakiewnik • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Chaber górski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Chaber górski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Chaber nadreński • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Chaber nadreński • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Chaber wielogłówkowy • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Chaber wielogłówkowy • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Chmiel",
            values: [4913.36, 4913.36, 4913.36, 4913.36]
        },
        {
            name: "Choinki bożonarodzeniowe",
            values: [7819.09, 7819.09, 7819.09, 7819.09]
        },
        {
            name: "Chrzan pospolity • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Chrzan pospolity • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Chrzan pospolity • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Ciecierzyca pospolita • strączkowe • na ziarno",
            values: [751.96, 874.25, 1023.22, 1274.64]
        },
        {
            name: "Ciecierzyca pospolita • strączkowe • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Cis",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Cukinia • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 0.00]
        },
        {
            name: "Cukinia • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Cukinia • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Cykoria siewna",
            values: [1382.11, 1382.11, 1382.11, 1382.11]
        },
        {
            name: "Cykoria warzywna • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Cykoria warzywna • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Cykoria warzywna • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Czarnuszka siewna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Czarnuszka siewna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Cząber górski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Cząber górski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Cząber ogrodowy • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Cząber ogrodowy • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Czereśnia",
            values: [2587.47, 3811.54, 4179.99, 3701.00]
        },
        {
            name: "Czosnek niedźwiedzi • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Czosnek niedźwiedzi • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Czosnek pospolity • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Czosnek pospolity • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Czosnek pospolity • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Dalia zmienna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Dalia zmienna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Dereń jadalny",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Drapacz lekarski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Drapacz lekarski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Dynia figolistna • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Dynia figolistna • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Dynia figolistna • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Dynia olbrzymia • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Dynia olbrzymia • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Dynia olbrzymia • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Dynia oleista • na ziarno",
            values: [797.74, 797.74, 797.74, 797.74]
        },
        {
            name: "Dynia pastewna • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Dynia piżmowa • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Dynia piżmowa • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Dynia piżmowa • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Dynia zwyczajna • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Dynia zwyczajna • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Dynia zwyczajna • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Dzielżan jesienny • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Dzielżan jesienny • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Dziewanna wielkokwiatowa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Dziewanna wielkokwiatowa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Dzięgiel leśny • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Dzięgiel leśny • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Dziurawiec zwyczajny • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Dziurawiec zwyczajny • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Dzwonek ogrodowy • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Dzwonek ogrodowy • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Endywia • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Endywia • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Endywia • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Esparceta siewna • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Esparceta siewna • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Facelia błękitna • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Facelia błękitna • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Fasola wielokwiatowa • strączkowe • na ziarno",
            values: [3334.34, 3104.74, 2463.28, 2883.60]
        },
        {
            name: "Fasola wielokwiatowa • strączkowe • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Fasola wielokwiatowa • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Fasola wielokwiatowa • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Fasola wielokwiatowa • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Fasola zwykła • strączkowe • na ziarno",
            values: [3334.34, 3104.74, 2463.28, 2883.60]
        },
        {
            name: "Fasola zwykła • strączkowe • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Fasola zwykła • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Fasola zwykła • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Fasola zwykła • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Fiołek trójbarwny • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Fiołek trójbarwny • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Glistnik jaskółcze ziele • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Glistnik jaskółcze ziele • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Głóg",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Gorczyca biała • na ziarno",
            values: [796.38, 796.38, 796.38, 796.38]
        },
        {
            name: "Gorczyca czarna • na ziarno",
            values: [796.38, 796.38, 796.38, 796.38]
        },
        {
            name: "Gorczyca sarepska • na ziarno",
            values: [796.38, 796.38, 796.38, 796.38]
        },
        {
            name: "Grindelia szorstka • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Grindelia szorstka • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Groch zwyczajny (siewny) • strączkowe • na ziarno",
            values: [1657.16, 1866.42, 1229.42, 1593.33]
        },
        {
            name: "Groch zwyczajny (siewny) cukrowy • strączkowe • na ziarno",
            values: [1657.16, 1866.42, 1229.42, 1593.33]
        },
        {
            name: "Groch zwyczajny (siewny) cukrowy • strączkowe • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Groch zwyczajny łuskowy • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Groch zwyczajny łuskowy • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Groch zwyczajny łuskowy • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Groszek leśny • kwiaty i rośliny ozdobne • pod osłonami",
            values: [18.99, 18.99, 18.99, 18.99]
        },
        {
            name: "Groszek leśny • kwiaty i rośliny ozdobne • w uprawie polowej",
            values: [25274.29, 25274.29, 25274.29, 25274.29]
        },
        {
            name: "Grusza azjatycka",
            values: [1801.17, 2488.35, 3257.41, 2378.32]
        },
        {
            name: "Grusza domowa",
            values: [1801.17, 2488.35, 3257.41, 2378.32]
        },
        {
            name: "Gryka zwyczajna • zboża • na ziarno",
            values: [319.68, 610.81, 547.18, 621.72]
        },
        {
            name: "Gryka zwyczajna • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Grzyby jadalne",
            values: [122.01, 119.46, 115.24, 116.62]
        },
        {
            name: "Hyzop lekarski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Hyzop lekarski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Jabłoń domowa",
            values: [1146.62, 2294.84, 3370.36, 2477.05]
        },
        {
            name: "Jagoda kamczacka",
            values: [1234.16, 2090.74, 3148.36, 2174.85]
        },
        {
            name: "Jarmuż • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Jarmuż • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Jarmuż • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Jarząb pospolity",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Jasnota biała • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Jasnota biała • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Jeżówka purpurowa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Jeżówka purpurowa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Jeżyna",
            values: [1234.16, 2090.74, 3148.36, 2174.85]
        },
        {
            name: "Jęczmień jary • zboża • na ziarno",
            values: [513.85, 602.78, 570.10, 590.62]
        },
        {
            name: "Jęczmień jary • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Jęczmień ozimy • zboża • na ziarno",
            values: [655.81, 764.88, 601.22, 646.32]
        },
        {
            name: "Jęczmień ozimy • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Języczka pomarańczowa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Języczka pomarańczowa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Kabaczek • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Kabaczek • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Kabaczek • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Kalafior • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Kalafior • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [6146.69, 6358.82, 6093.16, 6926.62]
        },
        {
            name: "Kalafior • warzywa • w płodozmianie z uprawami rolnymi",
            values: [6146.69, 6358.82, 6093.16, 6926.62]
        },
        {
            name: "Kalarepa • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Kalarepa • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Kalarepa • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Kapusta brukselska • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Kapusta brukselska • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Kapusta brukselska • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Kapusta chińska • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Kapusta chińska • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Kapusta chińska • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Kapusta głowiasta biała • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Kapusta głowiasta biała • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4053.36, 3986.78, 3714.44, 4075.40]
        },
        {
            name: "Kapusta głowiasta biała • warzywa • w płodozmianie z uprawami rolnymi",
            values: [4053.36, 3986.78, 3714.44, 4075.40]
        },
        {
            name: "Kapusta głowiasta czerwona • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Kapusta głowiasta czerwona • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4053.36, 3986.78, 3714.44, 4075.40]
        },
        {
            name: "Kapusta głowiasta czerwona • warzywa • w płodozmianie z uprawami rolnymi",
            values: [4053.36, 3986.78, 3714.44, 4075.40]
        },
        {
            name: "Kapusta pastewna • uprawy pastewne",
            values: [624.90, 624.90, 624.90, 624.90]
        },
        {
            name: "Kapusta pekińska • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Kapusta pekińska • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Kapusta pekińska • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Kapusta włoska • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Kapusta włoska • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Kapusta włoska • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Karczoch zwyczajny • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Karczoch zwyczajny • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Karczoch zwyczajny • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Kard hiszpański • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Kard hiszpański • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Kard hiszpański • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Katran abisyński • na ziarno",
            values: [797.74, 797.74, 797.74, 797.74]
        },
        {
            name: "Kiwi drobnoowocowe",
            values: [1234.16, 2090.74, 3148.36, 2174.85]
        },
        {
            name: "Kminek zwyczajny • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Kminek zwyczajny • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Kocanki piaskowe • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Kocanki piaskowe • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Kolendra siewna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Kolendra siewna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Komonica błotna • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Komonica błotna • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Komonica zwyczajna • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Komonica zwyczajna • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Komosa ryżowa • zboża • na ziarno",
            values: [554.38, 679.37, 574.60, 598.71]
        },
        {
            name: "Koniczyna biała • na zielonkę",
            values: [576.82, 576.82, 576.82, 576.82]
        },
        {
            name: "Koniczyna biała • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Koniczyna białoróżowa • na zielonkę",
            values: [576.82, 576.82, 576.82, 576.82]
        },
        {
            name: "Koniczyna białoróżowa • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Koniczyna czerwona • na zielonkę",
            values: [576.82, 576.82, 576.82, 576.82]
        },
        {
            name: "Koniczyna czerwona • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Koniczyna egipska • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Koniczyna egipska • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Koniczyna krwistoczerwona • na zielonkę",
            values: [576.82, 576.82, 576.82, 576.82]
        },
        {
            name: "Koniczyna krwistoczerwona • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Koniczyna perska • na zielonkę",
            values: [576.82, 576.82, 576.82, 576.82]
        },
        {
            name: "Koniczyna perska • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Konopie siewne",
            values: [339.03, 339.03, 339.03, 339.03]
        },
        {
            name: "Konwalia majowa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Konwalia majowa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Koper ogrodowy • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Koper ogrodowy • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Koper ogrodowy • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Koper włoski (fenkuł) • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Koper włoski (fenkuł) • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Kozieradka pospolita • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Kozieradka pospolita • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Kozłek lekarski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Kozłek lekarski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Krokosz barwierski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Krokosz barwierski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Krwawnica pospolita • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Krwawnica pospolita • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Krwawnik pospolity • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Krwawnik pospolity • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Krwiściąg mniejszy • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Krwiściąg mniejszy • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Kuklik zwisły • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Kuklik zwisły • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Kukurydza cukrowa • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Kukurydza cukrowa • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Kukurydza cukrowa • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Kukurydza pękająca • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Kukurydza pękająca • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Kukurydza pękająca • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Kukurydza woskowata • na zielonkę",
            values: [979.55, 979.55, 979.55, 979.55]
        },
        {
            name: "Kukurydza woskowata • zboża • na ziarno",
            values: [889.50, 1117.73, 1057.10, 1175.78]
        },
        {
            name: "Kukurydza zwyczajna • na zielonkę",
            values: [979.55, 979.55, 979.55, 979.55]
        },
        {
            name: "Kukurydza zwyczajna • zboża • na ziarno",
            values: [889.50, 1117.73, 1057.10, 1175.78]
        },
        {
            name: "Kwiaty i rośliny ozdobne gruntowe",
            values: [25274.29, 25274.29, 25274.29, 25274.29]
        },
        {
            name: "Kwiaty i rośliny ozdobne pod osłonami",
            values: [18.99, 18.99, 18.99, 18.99]
        },
        {
            name: "Lawenda wąskolistna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Lawenda wąskolistna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Lebiodka pospolita • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Lebiodka pospolita • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Len oleisty • na ziarno",
            values: [839.81, 839.81, 839.81, 839.81]
        },
        {
            name: "Len włóknisty",
            values: [441.07, 441.07, 441.07, 441.07]
        },
        {
            name: "Lepiężnik różowy • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Lepiężnik różowy • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Leszczyna (orzechy laskowe)",
            values: [1044.49, 2114.81, 2358.15, 2526.10]
        },
        {
            name: "Lewkonia dwurożna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Lewkonia dwurożna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Lewkonia letnia • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Lewkonia letnia • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Lędźwian • strączkowe • na ziarno",
            values: [751.96, 874.25, 1023.22, 1274.64]
        },
        {
            name: "Lędźwian • strączkowe • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Lnianka pospolita • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Lnianka pospolita • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Lnianka siewna • na ziarno",
            values: [797.74, 797.74, 797.74, 797.74]
        },
        {
            name: "Lnica pospolita • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Lnica pospolita • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Lubczyk ogrodowy • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Lubczyk ogrodowy • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Lucerna chmielowa • na zielonkę",
            values: [576.82, 576.82, 576.82, 576.82]
        },
        {
            name: "Lucerna chmielowa • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Lucerna mieszańcowa • na zielonkę",
            values: [576.82, 576.82, 576.82, 576.82]
        },
        {
            name: "Lucerna mieszańcowa • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Lucerna sierpowata • na zielonkę",
            values: [576.82, 576.82, 576.82, 576.82]
        },
        {
            name: "Lucerna sierpowata • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Lucerna siewna • na zielonkę",
            values: [576.82, 576.82, 576.82, 576.82]
        },
        {
            name: "Lucerna siewna • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Lukrecja gładka • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Lukrecja gładka • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Lulek czarny • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Lulek czarny • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Łąka przemienna • na zielonkę",
            values: [500.63, 500.63, 500.63, 500.63]
        },
        {
            name: "Łąki i pastwiska trwałe w dobrej kulturze rolnej",
            values: [498.87, 498.87, 498.87, 498.87]
        },
        {
            name: "Łąki i pastwiska trwałe wyłączone z produkcji, do których przysługują dopłaty",
            values: [0.00, 0.00, 0.00, 0.00]
        },
        {
            name: "Łopian większy • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Łopian większy • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Łubin biały • strączkowe • na ziarno",
            values: [724.80, 676.30, 624.79, 1046.60]
        },
        {
            name: "Łubin biały • strączkowe • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Łubin wąskolistny • strączkowe • na ziarno",
            values: [225.51, 225.51, 225.51, 225.51]
        },
        {
            name: "Łubin wąskolistny • strączkowe • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Łubin żółty • strączkowe • na ziarno",
            values: [724.80, 676.30, 624.79, 1046.60]
        },
        {
            name: "Łubin żółty • strączkowe • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Łyszczec wiechowaty • kwiaty i rośliny ozdobne • pod osłonami",
            values: [18.99, 18.99, 18.99, 18.99]
        },
        {
            name: "Łyszczec wiechowaty • kwiaty i rośliny ozdobne • w uprawie polowej",
            values: [25274.29, 25274.29, 25274.29, 25274.29]
        },
        {
            name: "Łyszczec wiechowaty • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Łyszczec wiechowaty • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Macierzanka piaskowa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Macierzanka piaskowa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Macierzanka zwyczajna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Macierzanka zwyczajna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Majeranek ogrodowy • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Majeranek ogrodowy • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Mak lekarski • na ziarno",
            values: [797.74, 797.74, 797.74, 797.74]
        },
        {
            name: "Mak wschodni • kwiaty i rośliny ozdobne • pod osłonami",
            values: [18.99, 18.99, 18.99, 18.99]
        },
        {
            name: "Mak wschodni • kwiaty i rośliny ozdobne • w uprawie polowej",
            values: [25274.29, 25274.29, 25274.29, 25274.29]
        },
        {
            name: "Mak wschodni • na ziarno",
            values: [797.74, 797.74, 797.74, 797.74]
        },
        {
            name: "Malina",
            values: [1677.38, 1997.67, 3698.52, 2056.24]
        },
        {
            name: "Malwa czarna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Malwa czarna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Marchew jadalna • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Marchew jadalna • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [5168.58, 4964.17, 4615.31, 4423.79]
        },
        {
            name: "Marchew jadalna • warzywa • w płodozmianie z uprawami rolnymi",
            values: [5168.58, 4964.17, 4615.31, 4423.79]
        },
        {
            name: "Marchew pastewna • uprawy pastewne",
            values: [521.80, 521.80, 521.80, 521.80]
        },
        {
            name: "Marzanka wonna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Marzanka wonna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Marzanna barwierska • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Marzanna barwierska • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Mącznica lekarska • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Mącznica lekarska • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Melisa lekarska • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Melisa lekarska • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Melon • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Melon • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Melon • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Mieszanka jednoroczna traw • na zielonkę",
            values: [500.63, 500.63, 500.63, 500.63]
        },
        {
            name: "Mieszanka jednoroczna traw z motylkowatymi drobnonasiennymi • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Mieszanka strączkowa (np. łubin żółty z seradelą) • strączkowe • na ziarno",
            values: [442.07, 741.70, 649.99, 802.78]
        },
        {
            name: "Mieszanka strączkowo-gorczycowa (np. wyka siewna z gorczycą sarepską) • strączkowe • na ziarno",
            values: [442.07, 741.70, 649.99, 802.78]
        },
        {
            name: "Mieszanka strączkowo-słonecznikowa (np. peluszka ze słonecznikiem) • strączkowe • na ziarno",
            values: [442.07, 741.70, 649.99, 802.78]
        },
        {
            name: "Mieszanka strączkowo-zbożowa • jara • na ziarno",
            values: [343.08, 464.88, 401.09, 413.01]
        },
        {
            name: "Mieszanka strączkowo-zbożowa • ozima • na ziarno",
            values: [343.08, 464.88, 401.09, 413.01]
        },
        {
            name: "Mieszanka wieloletnia traw • na zielonkę",
            values: [500.63, 500.63, 500.63, 500.63]
        },
        {
            name: "Mieszanka wieloletnia traw z motylkowatymi drobnonasiennymi • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Mieszanka zbożowa jara • zboża • na ziarno",
            values: [395.90, 479.10, 457.39, 474.85]
        },
        {
            name: "Mieszanka zbożowa ozima • zboża • na ziarno",
            values: [445.99, 529.43, 455.56, 469.67]
        },
        {
            name: "Mieszanka zbóż z roślinami strączkowymi • jara • na ziarno",
            values: [343.08, 464.88, 401.09, 413.01]
        },
        {
            name: "Mieszanka zbóż z roślinami strączkowymi • ozima • na ziarno",
            values: [343.08, 464.88, 401.09, 413.01]
        },
        {
            name: "Mięta długolistna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Mięta długolistna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Mięta kędzierzawa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Mięta kędzierzawa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Mięta okrągłolistna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Mięta okrągłolistna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Mięta pieprzowa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Mięta pieprzowa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Mikołajek płaskolistny • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Mikołajek płaskolistny • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Miłek wiosenny • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Miłek wiosenny • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Miłorząb japoński • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Miłorząb japoński • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Miodunka plamista • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Miodunka plamista • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Miskant olbrzymi • na cele energetyczne",
            values: [608.60, 608.60, 608.60, 608.60]
        },
        {
            name: "Mniszek lekarski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Mniszek lekarski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Morela pospolita",
            values: [1234.16, 2090.74, 3148.36, 2174.85]
        },
        {
            name: "Mydlnica lekarska • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Mydlnica lekarska • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Nagietek lekarski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Nagietek lekarski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Naparstnica purpurowa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Naparstnica purpurowa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Naparstnica wełnista • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Naparstnica wełnista • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Nawłoć pospolita • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Nawłoć pospolita • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Nektaryna",
            values: [1234.16, 2090.74, 3148.36, 2174.85]
        },
        {
            name: "Nostrzyk biały • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Nostrzyk biały • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Nostrzyk żółty • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Nostrzyk żółty • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Oberżyna • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Oberżyna • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Oberżyna • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Ogórecznik lekarski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Ogórecznik lekarski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Ogórek • warzywa • pod osłonami",
            values: [12.47, 12.47, 12.47, 12.47]
        },
        {
            name: "Ogórek • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [3952.05, 4073.88, 5006.56, 4562.37]
        },
        {
            name: "Ogórek • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3952.05, 4073.88, 5006.56, 4562.37]
        },
        {
            name: "Ogórek kiwano • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Ogórek kiwano • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Ogórek kiwano • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Oman wielki • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Oman wielki • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Orlik pospolity • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Orlik pospolity • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Orzech włoski",
            values: [532.33, 532.33, 532.33, 532.33]
        },
        {
            name: "Ostropest plamisty • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Ostropest plamisty • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Ostrzeń pospolity • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Ostrzeń pospolity • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Owies bizantyjski • zboża • na ziarno",
            values: [397.37, 478.99, 419.53, 476.38]
        },
        {
            name: "Owies bizantyjski • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Owies nagi • zboża • na ziarno",
            values: [397.37, 478.99, 419.53, 476.38]
        },
        {
            name: "Owies nagi • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Owies siewny • zboża • na ziarno",
            values: [397.37, 478.99, 419.53, 476.38]
        },
        {
            name: "Owies siewny • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Owies szorstki • zboża • na ziarno",
            values: [397.37, 478.99, 419.53, 476.38]
        },
        {
            name: "Owies szorstki • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Papryka roczna • warzywa • pod osłonami",
            values: [6.39, 6.39, 6.39, 6.39]
        },
        {
            name: "Papryka roczna • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Papryka roczna • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Pasternak zwyczajny • uprawy pastewne",
            values: [624.90, 624.90, 624.90, 624.90]
        },
        {
            name: "Pasternak zwyczajny • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Pasternak zwyczajny • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Pasternak zwyczajny • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Pastwiska trwałe w dobrej kulturze rolnej - nieuprawiane tereny do wypasu",
            values: [393.36, 393.36, 393.36, 393.36]
        },
        {
            name: "Pastwisko przemienne",
            values: [500.63, 500.63, 500.63, 500.63]
        },
        {
            name: "Patison • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Patison • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Patison • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Peluszka • strączkowe • na ziarno",
            values: [549.47, 902.83, 822.19, 991.57]
        },
        {
            name: "Peluszka • strączkowe • na zielonkę",
            values: [372.53, 372.53, 372.53, 372.53]
        },
        {
            name: "Perko • na ziarno",
            values: [941.33, 974.03, 840.53, 892.39]
        },
        {
            name: "Perko • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Pietruszka korzeniowa • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Pietruszka korzeniowa • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [7594.29, 8448.12, 8495.22, 6958.59]
        },
        {
            name: "Pietruszka korzeniowa • warzywa • w płodozmianie z uprawami rolnymi",
            values: [7594.29, 8448.12, 8495.22, 6958.59]
        },
        {
            name: "Pietruszka naciowa • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Pietruszka naciowa • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [7594.29, 8448.12, 8495.22, 6958.59]
        },
        {
            name: "Pietruszka naciowa • warzywa • w płodozmianie z uprawami rolnymi",
            values: [7594.29, 8448.12, 8495.22, 6958.59]
        },
        {
            name: "Pięciornik kurze ziele • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Pięciornik kurze ziele • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Pigwa pospolita",
            values: [1234.16, 2090.74, 3148.36, 2174.85]
        },
        {
            name: "Pigwowiec japoński",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Pigwowiec okazały • pod osłonami",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Pigwowiec pośredni • pod osłonami",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Plantacja wierzby energetycznej • na cele energetyczne",
            values: [608.60, 608.60, 608.60, 608.60]
        },
        {
            name: "Pluskwica cuchnąca • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Pluskwica cuchnąca • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Pokrzyk wilcza jagoda • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Pokrzyk wilcza jagoda • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Pokrzywa zwyczajna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Pokrzywa zwyczajna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Pomidor • warzywa • pod osłonami",
            values: [15.99, 15.99, 15.99, 15.99]
        },
        {
            name: "Pomidor • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [2575.12, 3918.58, 3712.32, 3067.05]
        },
        {
            name: "Pomidor • warzywa • w płodozmianie z uprawami rolnymi",
            values: [2575.12, 3918.58, 3712.32, 3067.05]
        },
        {
            name: "Pomidor skórzasty • warzywa • pod osłonami",
            values: [15.99, 15.99, 15.99, 15.99]
        },
        {
            name: "Pomidor skórzasty • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [2575.12, 3918.58, 3712.32, 3067.05]
        },
        {
            name: "Pomidor skórzasty • warzywa • w płodozmianie z uprawami rolnymi",
            values: [2575.12, 3918.58, 3712.32, 3067.05]
        },
        {
            name: "Por • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Por • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [8565.44, 7862.28, 8739.49, 6628.07]
        },
        {
            name: "Por • warzywa • w płodozmianie z uprawami rolnymi",
            values: [8565.44, 7862.28, 8739.49, 6628.07]
        },
        {
            name: "Porzeczka",
            values: [1399.76, 1931.48, 2630.28, 1945.54]
        },
        {
            name: "Poziomka • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Poziomka • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Poziomka • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Pozostałe plantacje nasienne",
            values: [2808.50, 2752.14, 2827.71, 2646.20]
        },
        {
            name: "Pozostałe rośliny okopowe i kapustne pastewne",
            values: [624.90, 624.90, 624.90, 624.90]
        },
        {
            name: "Pozostałe rośliny oleiste • na ziarno",
            values: [797.74, 797.74, 797.74, 797.74]
        },
        {
            name: "Pozostałe rośliny przemysłowe",
            values: [708.64, 708.64, 708.64, 708.64]
        },
        {
            name: "Pozostałe rośliny trwałe na cele energetyczne",
            values: [608.60, 608.60, 608.60, 608.60]
        },
        {
            name: "Pozostałe sady i plantacje owoców jagodowych",
            values: [1234.16, 2090.74, 3148.36, 2174.85]
        },
        {
            name: "Pozostałe strączkowe jadalne i pastewne • na ziarno",
            values: [751.96, 874.25, 1023.22, 1274.64]
        },
        {
            name: "Pozostałe strączkowe na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Pozostałe szkółki",
            values: [15740.85, 15740.85, 15740.85, 15740.85]
        },
        {
            name: "Pozostałe uprawy • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Pozostałe uprawy na gruntach ornych",
            values: [225.51, 225.51, 225.51, 225.51]
        },
        {
            name: "Pozostałe uprawy pastewne • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Pozostałe uprawy trwałe",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Pozostałe uprawy trwałe • pod osłonami",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Pozostałe warzywa pod wysokimi osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Pozostałe warzywa w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Pozostałe warzywa w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Pozostałe zboża jare • na ziarno",
            values: [554.38, 679.37, 574.60, 598.71]
        },
        {
            name: "Pozostałe zboża jare • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pozostałe zboża ozime • na ziarno",
            values: [554.38, 679.37, 574.60, 598.71]
        },
        {
            name: "Pozostałe zboża ozime • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pozostałe zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Pozostałe zioła i przyprawy pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Prawoślaz lekarski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Prawoślaz lekarski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Proso • zboża • na ziarno",
            values: [193.16, 416.07, 528.24, 747.51]
        },
        {
            name: "Proso • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Przelot pospolity • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Przelot pospolity • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Pszczelnik mołdawski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Pszczelnik mołdawski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Pszenica orkisz f. jara • zboża • na ziarno",
            values: [654.92, 715.43, 647.08, 660.14]
        },
        {
            name: "Pszenica orkisz f. jara • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pszenica orkisz f. ozima • zboża • na ziarno",
            values: [912.71, 952.79, 751.75, 738.19]
        },
        {
            name: "Pszenica orkisz f. ozima • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pszenica płaskurka f. jara • zboża • na ziarno",
            values: [654.92, 715.43, 647.08, 660.14]
        },
        {
            name: "Pszenica płaskurka f. jara • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pszenica płaskurka f. ozima • zboża • na ziarno",
            values: [912.71, 952.79, 751.75, 738.19]
        },
        {
            name: "Pszenica płaskurka f. ozima • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pszenica samopsza f. jara • zboża • na ziarno",
            values: [654.92, 715.43, 647.08, 660.14]
        },
        {
            name: "Pszenica samopsza f. jara • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pszenica samopsza f. ozima • zboża • na ziarno",
            values: [912.71, 952.79, 751.75, 738.19]
        },
        {
            name: "Pszenica samopsza f. ozima • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pszenica twarda f. jara • zboża • na ziarno",
            values: [654.92, 715.43, 647.08, 660.14]
        },
        {
            name: "Pszenica twarda f. jara • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pszenica twarda f. ozima • zboża • na ziarno",
            values: [912.71, 952.79, 751.75, 738.19]
        },
        {
            name: "Pszenica twarda f. ozima • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pszenica zwyczajna f. jara • zboża • na ziarno",
            values: [654.92, 715.43, 647.08, 660.14]
        },
        {
            name: "Pszenica zwyczajna f. jara • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pszenica zwyczajna f. ozima • zboża • na ziarno",
            values: [912.71, 952.79, 751.75, 738.19]
        },
        {
            name: "Pszenica zwyczajna f. ozima • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pszenżyto jare • zboża • na ziarno",
            values: [581.49, 682.11, 574.58, 588.33]
        },
        {
            name: "Pszenżyto jare • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Pszenżyto ozime • zboża • na ziarno",
            values: [581.49, 682.11, 574.58, 588.33]
        },
        {
            name: "Pszenżyto ozime • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Rabarbar ogrodowy • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Rabarbar ogrodowy • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Rabarbar ogrodowy • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Rdest wężownik • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rdest wężownik • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Rezeda wonna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rezeda wonna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Rezeda żółta • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rezeda żółta • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Robinia akacjowa • pod osłonami",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Rodzynek brazylijski • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Rodzynek brazylijski • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Rodzynek brazylijski • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Rokambuł • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Rokambuł • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Rokambuł • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Rokietta siewna • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Rokietta siewna • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Rokietta siewna • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Rokitnik zwyczajny",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Roszponka warzywna • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Roszponka warzywna • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Roszponka warzywna • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Rozchodnik okazały • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rozchodnik okazały • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Rożniak przerośnięty • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rożniak przerośnięty • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Róża bezkolcowa • na cele energetyczne",
            values: [608.60, 608.60, 608.60, 608.60]
        },
        {
            name: "Róża dzika",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Róża pomarszczona",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Różeniec górski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Różeniec górski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Rukiew siewna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rukiew siewna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Rumian rzymski • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rumian rzymski • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Rumianek pospolity • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rumianek pospolity • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Ruta zwyczajna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Ruta zwyczajna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Rutewka orlikolistna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rutewka orlikolistna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Rutwica lekarska • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rutwica lekarska • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Rzepa • uprawy pastewne",
            values: [624.90, 624.90, 624.90, 624.90]
        },
        {
            name: "Rzepa • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Rzepa • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Rzepa • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Rzepak jary • na ziarno",
            values: [941.33, 974.03, 840.53, 892.39]
        },
        {
            name: "Rzepak jary • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Rzepak ozimy • na ziarno",
            values: [941.33, 974.03, 840.53, 892.39]
        },
        {
            name: "Rzepak ozimy • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Rzepik jary • na ziarno",
            values: [941.33, 974.03, 840.53, 892.39]
        },
        {
            name: "Rzepik jary • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Rzepik ozimy • na ziarno",
            values: [941.33, 974.03, 840.53, 892.39]
        },
        {
            name: "Rzepik ozimy • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Rzepik pospolity • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rzepik pospolity • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Rzewień dłoniasty • kwiaty i rośliny ozdobne • pod osłonami",
            values: [18.99, 18.99, 18.99, 18.99]
        },
        {
            name: "Rzewień dłoniasty • kwiaty i rośliny ozdobne • w uprawie polowej",
            values: [25274.29, 25274.29, 25274.29, 25274.29]
        },
        {
            name: "Rzewień dłoniasty • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rzewień dłoniasty • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Rzeżucha ogrodowa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Rzeżucha ogrodowa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Rzodkiew zwyczajna (rzodkiew oleista) • na ziarno",
            values: [797.74, 797.74, 797.74, 797.74]
        },
        {
            name: "Rzodkiew zwyczajna [w tym rzodkiew oleista, czarna, rzodkiewka] • uprawy pastewne",
            values: [624.90, 624.90, 624.90, 624.90]
        },
        {
            name: "Rzodkiew zwyczajna [w tym rzodkiew oleista, czarna, rzodkiewka] • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Rzodkiew zwyczajna [w tym rzodkiew oleista, czarna, rzodkiewka] • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Rzodkiew zwyczajna [w tym rzodkiew oleista, czarna, rzodkiewka] • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Salsefia • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Salsefia • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Salsefia • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Sałata głowiasta • warzywa • pod osłonami",
            values: [8.24, 8.24, 8.24, 8.24]
        },
        {
            name: "Sałata głowiasta • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Sałata głowiasta • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Sałata listkowa • warzywa • pod osłonami",
            values: [8.24, 8.24, 8.24, 8.24]
        },
        {
            name: "Sałata listkowa • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Sałata listkowa • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Sałata łodygowa • warzywa • pod osłonami",
            values: [8.24, 8.24, 8.24, 8.24]
        },
        {
            name: "Sałata łodygowa • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Sałata łodygowa • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Sałata rzymska • warzywa • pod osłonami",
            values: [8.24, 8.24, 8.24, 8.24]
        },
        {
            name: "Sałata rzymska • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Sałata rzymska • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Seler korzeniowy • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Seler korzeniowy • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [7018.30, 7503.82, 7598.25, 6907.44]
        },
        {
            name: "Seler korzeniowy • warzywa • w płodozmianie z uprawami rolnymi",
            values: [7018.30, 7503.82, 7598.25, 6907.44]
        },
        {
            name: "Seler naciowy • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Seler naciowy • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Seler naciowy • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Seradela uprawna • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Seradela uprawna • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Serdecznik pospolity • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Serdecznik pospolity • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Siedmiolatka • plantacje nasienne",
            values: [8727.60, 8727.60, 8727.60, 8727.60]
        },
        {
            name: "Siedmiolatka • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Siedmiolatka • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Siedmiolatka • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Siekiernica górska • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Siwiec żółty • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Siwiec żółty • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Skorzonera • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Skorzonera • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Skorzonera • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Słonecznik zwyczajny • na ziarno",
            values: [691.45, 691.45, 691.45, 691.45]
        },
        {
            name: "Słonecznik zwyczajny • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Słonecznik zwyczajny na kwiaty • pod osłonami",
            values: [18.99, 18.99, 18.99, 18.99]
        },
        {
            name: "Słonecznik zwyczajny na kwiaty • w uprawie polowej",
            values: [25274.29, 25274.29, 25274.29, 25274.29]
        },
        {
            name: "Soczewica jadalna • strączkowe • na ziarno",
            values: [1648.30, 1648.30, 1648.30, 1648.30]
        },
        {
            name: "Soja zwyczajna • oleista • na ziarno",
            values: [606.34, 606.34, 606.34, 606.34]
        },
        {
            name: "Soja zwyczajna • strączkowe • na ziarno",
            values: [751.96, 874.25, 1023.22, 1274.64]
        },
        {
            name: "Sorgo • zboża • na ziarno",
            values: [554.38, 679.37, 574.60, 598.71]
        },
        {
            name: "Sorgo • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Sparceta piaskowa • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Sparceta piaskowa • plantacje nasienne",
            values: [510.60, 704.16, 706.34, 649.31]
        },
        {
            name: "Spartina preriowa • na cele energetyczne",
            values: [608.60, 608.60, 608.60, 608.60]
        },
        {
            name: "Stewia rebaudiana",
            values: [708.64, 708.64, 708.64, 708.64]
        },
        {
            name: "Stulisz miotłowy • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Stulisz miotłowy • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Szalotka • plantacje nasienne",
            values: [8727.60, 8727.60, 8727.60, 8727.60]
        },
        {
            name: "Szalotka • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Szalotka • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Szalotka • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Szałwia lekarska • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Szałwia lekarska • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Szałwia okręgowa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Szałwia okręgowa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Szanta zwyczajna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Szanta zwyczajna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Szarłat (amarantus) • zboża • na ziarno",
            values: [1090.20, 1090.20, 1090.20, 1090.20]
        },
        {
            name: "Szarłat (amarantus) • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Szczaw zwyczajny • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Szczaw zwyczajny • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Szczaw zwyczajny • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Szczeć leśna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Szczeć leśna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Szczeć sukiennicza • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Szczeć sukiennicza • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Szczodrak krokoszowy • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Szczodrak krokoszowy • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Szczypiorek • plantacje nasienne",
            values: [8727.60, 8727.60, 8727.60, 8727.60]
        },
        {
            name: "Szczypiorek • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Szczypiorek • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Szczypiorek • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3879.51, 4543.75, 4342.97, 3598.91]
        },
        {
            name: "Szkółki drzew leśnych do celów handlowych",
            values: [8355.14, 8355.14, 8355.14, 8355.14]
        },
        {
            name: "Szkółki drzew owocowych",
            values: [24798.94, 24798.94, 24798.94, 24798.94]
        },
        {
            name: "Szkółki drzew ozdobnych",
            values: [24390.61, 24390.61, 24390.61, 24390.61]
        },
        {
            name: "Szkółki krzewów owocowych",
            values: [10108.97, 10108.97, 10108.97, 10108.97]
        },
        {
            name: "Szkółki krzewów ozdobnych",
            values: [8708.98, 8708.98, 8708.98, 8708.98]
        },
        {
            name: "Szparag lekarski • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Szparag lekarski • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Szparag lekarski • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Szpinak zwyczajny • warzywa • pod osłonami",
            values: [11.95, 11.95, 11.95, 11.95]
        },
        {
            name: "Szpinak zwyczajny • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [4265.76, 4524.10, 4392.69, 4404.41]
        },
        {
            name: "Szpinak zwyczajny • warzywa • w płodozmianie z uprawami rolnymi",
            values: [3988.02, 4505.52, 3888.71, 4151.65]
        },
        {
            name: "Ślaz dziki • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Ślaz dziki • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Ślaz maurytański • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Ślaz maurytański • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Ślazowiec pensylwański • na cele energetyczne",
            values: [608.60, 608.60, 608.60, 608.60]
        },
        {
            name: "Ślazówka ogrodowa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Ślazówka ogrodowa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Ślazówka turyngska • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Ślazówka turyngska • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Śliwa domowa",
            values: [1034.85, 1546.72, 1939.26, 1153.88]
        },
        {
            name: "Śliwa japońska",
            values: [1034.85, 1546.72, 1939.26, 1153.88]
        },
        {
            name: "Śliwa tarnina",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Świdośliwa",
            values: [2512.93, 2512.93, 2512.93, 2512.93]
        },
        {
            name: "Topinambur • na cele energetyczne",
            values: [608.60, 608.60, 608.60, 608.60]
        },
        {
            name: "Topinambur • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Trawy jednoroczne • na zielonkę",
            values: [500.63, 500.63, 500.63, 500.63]
        },
        {
            name: "Trawy w siewie czystym z przeznaczeniem na nasiona • trawy • plantacje nasienne",
            values: [1358.26, 1132.40, 1285.35, 947.65]
        },
        {
            name: "Trawy wieloletnie na gruntach ornych • na zielonkę",
            values: [500.63, 500.63, 500.63, 500.63]
        },
        {
            name: "Trędownik bulwiasty • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Trędownik bulwiasty • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Trojeść krwista • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Trojeść krwista • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Truskawka • warzywa • pod osłonami",
            values: [3.44, 3.44, 3.44, 3.44]
        },
        {
            name: "Truskawka • warzywa • w płodozmianie z uprawami ogrodniczymi",
            values: [2539.54, 2262.11, 2619.84, 2048.49]
        },
        {
            name: "Truskawka • warzywa • w płodozmianie z uprawami rolnymi",
            values: [2539.54, 2262.11, 2619.84, 2048.49]
        },
        {
            name: "Turówka leśna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Turówka leśna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Turówka wonna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Turówka wonna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Tymianek pospolity • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Tymianek pospolity • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Tysiącznik pospolity • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Tysiącznik pospolity • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Tytoń",
            values: [1848.52, 2900.43, 3364.49, 2845.94]
        },
        {
            name: "Ugór czarny",
            values: [0.00, 0.00, 0.00, 0.00]
        },
        {
            name: "Ugór zielony",
            values: [0.00, 0.00, 0.00, 0.00]
        },
        {
            name: "Uprawy energetyczne poza ur",
            values: [608.60, 608.60, 608.60, 608.60]
        },
        {
            name: "Uprawy na przyoranie (nawóz zielony)",
            values: [0.00, 0.00, 0.00, 0.00]
        },
        {
            name: "Werbena pospolita • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Werbena pospolita • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Wierzba purpurowa",
            values: [1808.71, 1808.71, 1808.71, 1808.71]
        },
        {
            name: "Wierzba wiciowa",
            values: [1808.71, 1808.71, 1808.71, 1808.71]
        },
        {
            name: "Wierzbownica drobnokwiatowa • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Wierzbownica drobnokwiatowa • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Wierzbówka kiprzyca • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Wierzbówka kiprzyca • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Wiesiołek dwuletni • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Wiesiołek dwuletni • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Wiesiołek dziwny • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Wiesiołek dziwny • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Wiesiołek lamarka • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Wiesiołek lamarka • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Wiklina",
            values: [1808.71, 1808.71, 1808.71, 1808.71]
        },
        {
            name: "Wilżyna ciernista • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Wilżyna ciernista • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Winorośl",
            values: [1749.99, 1749.99, 1749.99, 1749.99]
        },
        {
            name: "Winorośl • pod osłonami",
            values: [2.62, 2.62, 2.62, 2.62]
        },
        {
            name: "Wiśnia pospolita",
            values: [1273.20, 1898.28, 2884.37, 1792.99]
        },
        {
            name: "Wrotycz maruna • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Wrotycz maruna • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Wyka kosmata • strączkowe • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Wyka siewna • strączkowe • na ziarno",
            values: [590.41, 541.31, 490.33, 783.55]
        },
        {
            name: "Wyka siewna • strączkowe • na zielonkę",
            values: [536.47, 536.47, 536.47, 536.47]
        },
        {
            name: "Zagajnik brzoza",
            values: [608.60, 608.60, 608.60, 608.60]
        },
        {
            name: "Zagajnik topola czarna",
            values: [608.60, 608.60, 608.60, 608.60]
        },
        {
            name: "Zagajnik wierzba",
            values: [608.60, 608.60, 608.60, 608.60]
        },
        {
            name: "Ziemniak • jadalny",
            values: [4377.04, 4394.08, 3487.56, 3372.92]
        },
        {
            name: "Ziemniak • pastewny",
            values: [4377.04, 4394.08, 3487.56, 3372.92]
        },
        {
            name: "Ziemniak • przemysłowy",
            values: [1274.29, 1170.63, 1211.71, 1329.08]
        },
        {
            name: "Złocień dalmatyński • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Złocień dalmatyński • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Żeń-szeń prawdziwy • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Żeń-szeń prawdziwy • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Żmijowiec zwyczajny • zioła i przyprawy",
            values: [1689.14, 1612.35, 2216.87, 2384.42]
        },
        {
            name: "Żmijowiec zwyczajny • zioła i przyprawy • pod osłonami",
            values: [7.90, 7.90, 7.90, 7.90]
        },
        {
            name: "Żurawina",
            values: [1234.16, 2090.74, 3148.36, 2174.85]
        },
        {
            name: "Żyto jare • zboża • na ziarno",
            values: [554.38, 679.37, 574.60, 598.71]
        },
        {
            name: "Żyto jare • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Żyto krzyca • zboża • na ziarno",
            values: [554.38, 679.37, 574.60, 598.71]
        },
        {
            name: "Żyto krzyca • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
        {
            name: "Żyto ozime • zboża • na ziarno",
            values: [485.48, 493.29, 418.67, 484.80]
        },
        {
            name: "Żyto ozime • zboża • na zielonkę",
            values: [450.31, 450.31, 450.31, 450.31]
        },
    ]