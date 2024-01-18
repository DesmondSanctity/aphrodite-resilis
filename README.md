# aphrodite-resilis
A simple CRUD API services design to demo integration with Resilis to optimize your APIs for global low-latency with no code and reduce infrastructure expenses.

### How to set up and run project
1. Clone the project using `git clone https://github.com/resilis/aphrodite-resilis.git`
2. Create a `.env` file in the root of the project and add the following variables:
```bash
PORT=5000
JWT_SECRET=<your-jwt-secret>
DB_URL=<your-db-url>
```
> The DB_URL should be a relational database like Postgres or MySQL

3. Install dependencies using `npm install`.
4. Run the project using `npm start`.