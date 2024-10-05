# DevHubs

DevHubs is a marketplace for developers to showcase and monetize their projects or offer them for free. Consumers can browse, view demos, download free projects, or purchase paid ones. It features a rating system and personalized recommendations.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with email/password and OAuth (Google, GitHub)
- Marketplace for developers to showcase their projects
- Rating system for projects
- Search functionality for easy project discovery
- Responsive design for mobile and desktop users
- Newsletter subscription form

## Technologies Used

- **Frontend**: React, Vite, TypeScript, TailwindCSS
- **Backend**: Django Rest Framework (DRF)
- **Database**: PostgreSQL
- **Package Manager**: pnpm

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Python](https://www.python.org/downloads/) (v3.8 or higher)
- [Django](https://www.djangoproject.com/) (v3.2 or higher)
- [PostgreSQL](https://www.postgresql.org/download/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/happychuks/devhubs-frontend.git
cd devhubs-frontend
```

### Step 2: Setup frontend

```bash
pnpm install #if you do no have pnpm, run npm install -g pnpm
pnpm run dev
```

### Step 3: Usage
- Visit: `http://localhost:5173/`


## Contributing

If you want to contribute to this project, please read the [contribution guide](./CONTRIBUTING.md).

### Pull Request Process

- Create a new branch for your feature or fix
- Submit a pull request with a clear description

## License and Credits

- Licensed under the MIT License - see the [License](./LICENSE) file for details.
- Uses third-party libraries: React, etc.

Thank you for checking this awesome project out!!!