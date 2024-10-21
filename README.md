![DevHubs](./public/logos/devhubs-logo.png)


DevHubs is a marketplace for developers to showcase and monetize their projects or offer them for free. Users can browse, view demos, download free projects, or purchase paid ones. 

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with email/password and OAuth (Google, GitHub)
- Marketplace for developers to showcase their projects
- Rating system for projects (In progress)
- Search functionality for easy project discovery (In progress)
- Responsive design for mobile and desktop users
- Newsletter subscription form (In progress)

## Technologies Used

- **Frontend**: React, TypeScript, TailwindCSS, Shadcn UI
- **Backend**: Next.js
- **Database**: PostgreSQL | Prisma | Supabase
- **Package Manager**: pnpm | yarn | npm
- **Authentication**: KindeAuth
- **Payment Provider**: Stripe
- **File Manager**: Uploadthing
- **Hosting**: Vercel


## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Next.js](https://nextjs.org/docs/getting-started/installation)
- [PostgreSQL](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql)
- [Stripe](https://docs.stripe.com/sdks/set-version)

### Step 1: Clone the Repository

```bash
git clone https://github.com/happychuks/devhubs.git
cd devhubs
```

### Step 2: Setup frontend

```bash
yarn install  #Provide all required environment variable listed in .env.example
yarn dev
npx prisma db push #Run on a new terminal for db migration to prisma
npx prisma studio # Run on a new terminal to open database studio
```

### Step 3: Usage
- You can browser through projects on: `http://localhost:3000/`

**Stripe Onboarding**
- To add your project, setup your stripe profile here first: `http://localhost:3000/billing`

- To pay for a project, use stripe Test details: 
    - Email: < your email>
    - Payment method: Card
    - Card Info: 4242 4242 4242 4242
    - Exp: 04 / 42
    - CVC: 424
    - Full name: < any name>
    - Country / Region: < any >


**Live Demo**: Visit the live project url [here](https://devhubs.vercel.app)


## Contributing

If you want to contribute to this project, please read the [contribution guide](./CONTRIBUTING.md).

### Pull Request Process

- Create a new branch for your feature or fix
- Submit a pull request with a clear description

## License and Credits

- Licensed under the MIT License - see the [License](./LICENSE) file for details.
- Uses third-party libraries: React, etc.

Thank you for checking this awesome project out!!!
