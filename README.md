# Ranking Muzyczny

Aplikacja do losowania utworów z Deezer, zapisywania ich w bazie, głosowania użytkowników i wyświetlania rankingu Top10.

# Ranking Muzyczny — krótkie instrukcje dla użytkownika

Witaj! Ta aplikacja pozwala losować utwory (z serwisu Deezer), zapisywać je, głosować i oglądać ranking Top10.

Co możesz zrobić (krok po kroku):

- **Zarejestrować konto** — przejdź do formularza Rejestracja, podaj email i hasło.
- **Zalogować się** — po zalogowaniu serwer ustawi cookie z tokenem (nie musisz podawać tokena ręcznie).
- **Losować utwór** — w głównej sekcji kliknij przycisk losuj; aplikacja pobierze losowy utwór z Deezer i zapisze go w bazie.
- **Głosować na utwór** — będąc zalogowanym, naciśnij przycisk głosowania przy wybranym utworze.
- **Zobaczyć ranking** — w sekcji Leaderboard zobaczysz Top10 utworów (najwięcej głosów).

Jak uruchomić aplikację lokalnie (jeśli chcesz testować):

- Backend (server API):

```powershell
cd backend
npm install
# Uzupełnij plik .env (przykład niżej)
npm run dev
```

- Frontend (interfejs):

```powershell
cd frontend
npm install
npm start
```

Frontend otworzy się pod `http://localhost:3000` i użyje proxy do backendu na `http://localhost:5000`.

Co musisz przygotować samodzielnie (konfiguracja):

- Zainstalować i uruchomić PostgreSQL.
- Utworzyć bazę danych (np. `Ranking_Muzyczny`) i użytkownika z uprawnieniami.
- W katalogu `backend` utworzyć plik `.env` z danymi połączenia i tajnym kluczem JWT.

Przykład minimalnego `backend/.env` (ZASTĄP wartości swoimi):

```
PORT=5000
PGHOST=localhost
PGUSER=postgres
PGPASSWORD=TwojeHaslo
PGPORT=5432
PGDATABASE=Ranking_Muzyczny
JWT_SECRET=jakis_bardzo_tajny_klucz
```

Utworzenie tabeli (raz):

1. Uruchom skrypt SQL, który doda tabele:

```powershell
psql -U postgres -d Ranking_Muzyczny -f backend/db/init.sql
```

2. Po wykonaniu skryptu aplikacja będzie mogła zapisywać utwory i głosy.

Najczęstsze problemy i szybkie naprawy:

- **Brak połączenia z bazą** — sprawdź wartości w `backend/.env` i czy PostgreSQL działa.
- **Błąd `undefined.id` przy zapisie utworu** — oznacza że Deezer czasem zwraca niepełne dane; spróbuj ponownie losować lub sprawdź logi backendu. Aplikacja ma podstawową ochronę przed takim błędem.
- **Nie mogę głosować (401)** — upewnij się, że jesteś zalogowany i cookie `token` jest ustawione. Jeśli korzystasz z narzędzia API, dołącz cookie lub token zgodnie z implementacją.

Kilka dodatkowych wskazówek:

- Jeśli chcesz, by aplikacja zapobiegała wielokrotnemu głosowaniu, upewnij się, że masz uruchomiony skrypt `backend/db/init.sql` — tworzy on unikatowy indeks zapobiegający powtórnym głosom tego samego użytkownika na ten sam utwór.
- W razie problemów sprawdź logi backendu (konsola, gdzie działa `npm run dev`).

Pliki, które warto znać:

- `backend/.env` — konfiguracja środowiska
- `backend/db/init.sql` — skrypt tworzący tabele bazy danych
- `backend/savesong.js` — zapis pobranego utworu do DB
- `backend/src/auth.js` — middleware obsługujący JWT
- `frontend/src/Leaderboard_Components/leaderboard.jsx` — komponent wyświetlający ranking
