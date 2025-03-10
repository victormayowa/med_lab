# Diagnostic Test Management Web Application

This project is a simple CRUD application designed to help medical laboratories efficiently manage diagnostic test results. Built using **Next.js**, **TypeScript**, **Prisma ORM**, **PostgreSQL**, **React**, and **Tailwind CSS**, it allows laboratories to easily add, view, update, and delete diagnostic test results.

---

## 🚀 Features
- Add new diagnostic test results.
- View a list of all diagnostic test results.
- Update existing test results.
- Delete test results.
- Responsive and user-friendly UI.

---

## 🛠️ Technologies Used
- **Next.js** - Server-side rendering and frontend framework.
- **TypeScript** - Type safety and modern JavaScript features.
- **Prisma ORM** - Database modeling and management.
- **PostgreSQL** - Relational database.
- **React** - UI library.
- **Tailwind CSS** - Styling framework.
- **Zod** - Data validation.

---

## 📂 Project Structure
```
src/
├── components/      # Reusable UI components
├── pages/           # Next.js pages
│   └── api/         # API routes for CRUD operations
├── prisma/          # Prisma schema and migration files
├── styles/          # Global styles and Tailwind configuration
└── utils/           # Helper functions and data validation
```

---

## ⚙️ Installation and Setup

### Prerequisites
- Node.js (>= 18.x)
- npm or yarn
- PostgreSQL

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/diagnostic-test-management.git
cd diagnostic-test-management
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory:
```
DATABASE_URL=postgresql://user:password@localhost:5432/diagnosticdb
```

### 4. Migrate the Database
```bash
npx prisma migrate dev --name init
```

### 5. Seed the Database (Optional)
```bash
npx prisma db seed
```

### 6. Run the Development Server
```bash
npm run dev
# or
yarn dev
```
Visit `http://localhost:3000` in your browser.

---

## 📝 API Endpoints

### Create a Diagnostic Test Result
**POST** `/api/tests`
```json
{
  "patientName": "John Doe",
  "testType": "Blood Test",
  "result": "Positive",
  "testDate": "2024-08-05",
  "notes": "Follow-up required"
}
```

### Get a Test Result by ID
**GET** `/api/tests/:id`

### Update a Test Result
**PUT** `/api/tests/:id`
```json
{
  "patientName": "John Doe",
  "testType": "Blood Test",
  "result": "Negative",
  "testDate": "2024-08-06",
  "notes": "Patient is recovering"
}
```

### Delete a Test Result
**DELETE** `/api/tests/:id`

### List All Test Results
**GET** `/api/tests`

---

## 🖥️ Deployment
Deploy the application on **Vercel**:
1. Connect your GitHub repository to Vercel.
2. Set environment variables on Vercel.
3. Deploy the project.

---

## 📌 Important Commands

- Run Prisma Studio:
  ```bash
  npx prisma studio
  ```
- Generate Prisma Client:
  ```bash
  npx prisma generate
  ```
- Format code:
  ```bash
  npm run format
  ```
- Lint code:
  ```bash
  npm run lint
  ```

---

## 📝 License
This project is licensed under the MIT License.

---

## 📧 Contact
For any questions or issues, please contact:
- [Your Name](mailto:yourname@example.com)
EOF

# Make the README.md readable for verification
echo "README.md file has been generated successfully!"
```

---

### ✅ **Usage Instructions**
1. Copy the script into a file named `generate_readme.sh`.  
2. Run the script using the following command:
   ```bash
   bash generate_readme.sh
   ```
3. The `README.md` file will be created in the current directory.
