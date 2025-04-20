# 🕒 Project Manager – Tidsrapportering & Fakturering med Next.js + Prisma + PostgreSQL

Detta är ett fullstack-projekt byggt med **Next.js**, **TypeScript**, **Prisma** och **PostgreSQL**. Systemet hanterar användare, tidsrapportering och fakturering.

---

## 🚀 Kom igång

### 1. Klona projektet

```bash
git clone https://github.com/ditt-repo/project-manager.git
cd project-manager
```

### 2. Installera beroenden

```bash
npm install
```

### 3. Skapa `.env`-fil

```env
DATABASE_URL="postgresql://<användare>:<lösenord>@localhost:5432/<databasnamn>"
```

Byt ut `<användare>`, `<lösenord>`, och `<databasnamn>` efter din setup.

### 4. Skapa databas + kör migration

```bash
npx prisma migrate dev --name init
```

### 5. Starta utvecklingsserver

```bash
npm run dev
```

---

## 🧪 Testa API

### Hämta alla användare (GET)

```
GET /api/users
```

### Skapa användare (POST)

```
POST /api/users
Content-Type: application/json
```

```json
{
  "name": "Niklas",
  "email": "niklas@example.com",
  "username": "niklas123"
}
```

---

## 📚 Teknikstack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- API-routes (Node.js via Next.js)
- `src/`-struktur (best practice)

---

## 🧠 Prisma-kommandon

| Kommando                               | Beskrivning                                  |
| -------------------------------------- | -------------------------------------------- |
| `npx prisma generate`                  | Genererar Prisma-klienten                    |
| `npx prisma migrate dev --name <namn>` | Skapar och kör en migration                  |
| `npx prisma studio`                    | Öppnar Prisma Studio (GUI för databasen)     |
| `npx prisma db pull`                   | Synkar `schema.prisma` med befintlig databas |

---

## ✨ TODO / framtida förbättringar

- [ ] Autentisering med NextAuth
- [ ] UI för rapporteringstid
- [ ] Adminpanel för fakturor
- [ ] PDF-export av fakturor
- [ ] Dashboard med grafer

---

## 🧑‍💻 Av: Niklas
