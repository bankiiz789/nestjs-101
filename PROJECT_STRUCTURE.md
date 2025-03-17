src/
├── modules/
│ └── users/
│ ├── domain/
│ │ ├── user.entity.ts
│ │ └── user.repository.ts
│ ├── dto/
│ │ └── (DTOs for request/response)
│ ├── infrastructure/
│ │ └── controller/
│ │ └── user.controller.ts
│ ├── services/
│ │ └── user.service.ts
│ ├── use-case/
│ │ ├── findAllUser.use-case.ts
│ │ ├── findUserById.use-case.ts
│ │ └── index.ts
│ └── user.module.ts
├── shared/
│ └── (shared utilities, interfaces, etc.)
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts

## Architectural Layers

### 1. Controller Layer (Infrastructure)

- **Location**: `infrastructure/controller/`
- **Purpose**: Handle HTTP requests and responses
- **Responsibilities**:
  - Define API endpoints
  - Parse request data
  - Call appropriate use cases
  - Return HTTP responses
- **Example**: `user.controller.ts`

### 2. Use Case Layer

- **Location**: `use-case/`
- **Purpose**: Implement application-specific business rules
- **Responsibilities**:
  - Execute a single application action
  - Orchestrate flow between controllers and services
  - Return domain objects
- **Examples**: `findAllUser.use-case.ts`, `findUserById.use-case.ts`

### 3. Service Layer

- **Location**: `services/`
- **Purpose**: Implement domain business logic
- **Responsibilities**:
  - Contain core business rules
  - Coordinate multiple repositories if needed
  - Perform validations
- **Example**: `user.service.ts`

### 4. Repository Layer (Domain)

- **Location**: `domain/`
- **Purpose**: Abstract data access
- **Responsibilities**:
  - Provide methods to access and manipulate data
  - Return domain entities
  - Hide database implementation details
- **Example**: `user.repository.ts`

### 5. Entity Layer (Domain)

- **Location**: `domain/`
- **Purpose**: Represent business objects
- **Responsibilities**:
  - Define structure of business objects
  - Contain essential business rules
- **Example**: `user.entity.ts`

### 6. DTO Layer

- **Location**: `dto/`
- **Purpose**: Define data transfer objects
- **Responsibilities**:
  - Define structure for request/response data
  - Provide validation rules
- **Example**: Request/response DTOs

## Data Flow

1. **Request** → Controller
2. Controller → **Use Case**
3. Use Case → **Service**
4. Service → **Repository**
5. Repository → **Database/In-Memory Store**
6. Repository → Service → Use Case → Controller → **Response**

## How to Use

### Adding a New Entity

1. Create entity class in `domain/`
2. Create repository in `domain/`
3. Create service in `services/`
4. Create use cases in `use-case/`
5. Add use cases to `use-case/index.ts`
6. Create controller in `infrastructure/controller/`
7. Create module file
8. Add module to `app.module.ts`

### Adding a New Use Case

1. Create use case file in `use-case/`
2. Add use case to `USER_USE_CASES` array in `use-case/index.ts`
3. Add endpoint in controller

### Testing Without Database

The current implementation uses in-memory storage for testing purposes:

- TypeORM decorators are commented out
- Repository methods use an in-memory array
- No database connection is required

To enable database connectivity:

1. Uncomment TypeORM decorators in entity
2. Uncomment TypeORM imports and configuration
3. Uncomment repository implementation

## Best Practices

1. **Single Responsibility**: Each class should have only one reason to change
2. **Dependency Injection**: Use NestJS's DI system for loose coupling
3. **Error Handling**: Use exceptions and filters for consistent error handling
4. **Validation**: Use DTOs with class-validator for input validation
5. **Testing**: Write unit tests for each layer

## Future Enhancements

1. Add authentication and authorization
2. Implement logging
3. Add pagination for list endpoints
4. Add Swagger documentation
5. Implement caching
6. Add health checks and monitoring
