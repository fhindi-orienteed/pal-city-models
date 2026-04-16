# Pal City Models

Shared TypeScript data models for the **Pal City** platform. This package provides a centralized, type-safe model layer used across the Pal City ecosystem — including the dashboard, mobile app, and backend services.

## Installation

```bash
npm install pal-city-models
```

## Quick Start

```typescript
import { EventModel, BusinessModel, AddressModel } from "pal-city-models";

// Create an event from API data
const event = new EventModel(apiResponse);
console.log(event.title, event.startDate);

// Create a business with an address
const business = new BusinessModel({
  id: 1,
  identifier: "cafe-123",
  status: "active",
  type: "restaurant",
  title: "Downtown Café",
  summary: "A cozy café in the heart of the city.",
  description: "Full description here...",
  coverImage: "/images/cafe.jpg",
  tags: ["coffee", "brunch"],
  address: {
    country: "Palestine",
    state: "West Bank",
    city: "Ramallah",
    addressLine1: "Main Street 12",
    addressLine2: "",
    zipCode: "00970",
  },
});
```

## Models

### Events

| Model        | Description                                                                              |
| ------------ | ---------------------------------------------------------------------------------------- |
| `EventModel` | Represents a platform event with scheduling, media, registration, and ticketing details. |

**Key properties:** `id`, `identifier`, `category`, `tags`, `status`, `visibility`, `type`, `title`, `shortDescription`, `longDescription`, `startDate`, `endDate`, `isFullDay`, `coverImage`, `media`, `registrationStatus`, `ticketType`, `sequence`

### Entities

All entity models extend the base `EntityModel`.

| Model           | Extends       | Description                                                                                   |
| --------------- | ------------- | --------------------------------------------------------------------------------------------- |
| `EntityModel`   | —             | Base model with `id`, `identifier`, `status`, and `type`.                                     |
| `BusinessModel` | `EntityModel` | A business entity with title, description, cover image, tags, and an optional `AddressModel`. |
| `BuildingModel` | `EntityModel` | Represents a building entity.                                                                 |
| `PlaceModel`    | `EntityModel` | Represents a place / point-of-interest entity.                                                |
| `ProfileModel`  | `EntityModel` | Represents a user profile entity.                                                             |

### Address

| Model          | Description                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------- |
| `AddressModel` | Structured address with `country`, `state`, `city`, `addressLine1`, `addressLine2`, and `zipCode`. |

## Project Structure

```
src/
├── index.ts              # Package entry – re-exports all models
├── address/
│   └── Address.model.ts  # AddressModel
├── entities/
│   ├── Entity.model.ts   # Base EntityModel
│   ├── Business.model.ts # BusinessModel (extends Entity)
│   ├── Building.model.ts # BuildingModel (extends Entity)
│   ├── Place.model.ts    # PlaceModel (extends Entity)
│   └── Profile.model.ts  # ProfileModel (extends Entity)
└── events/
    └── Event.model.ts    # EventModel
```

## Development

### Prerequisites

- **Node.js** ≥ 18
- **TypeScript** ≥ 6.0

### Build

```bash
npm run build
```

Compiles TypeScript from `src/` to `dist/` with declaration files (`.d.ts`).

### Configuration

| Setting           | Value        |
| ----------------- | ------------ |
| Target            | ES2019       |
| Module            | ESNext       |
| Strict mode       | ✅ Enabled   |
| Declaration files | ✅ Generated |

## License

Private — Pal City © 2026
