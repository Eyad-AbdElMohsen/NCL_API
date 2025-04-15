export const swaggerComponents = {
    securitySchemes: {
        // BearerAuth: {
        //     type: "http",
        //     scheme: "bearer",
        //     bearerFormat: "JWT",
        // },
    },
    schemas: {
        // User: {
        //     type: "object",
        //     properties: {
        //         id: { type: "string", example: "b3d3f91b-5e4b-4c9a-9e6f-1d5b8c2f5e7a" },
        //         name: { type: "string", example: "Eyad Abdelmohsen" },
        //         email: { type: "string", format: "email", example: "eyad@example.com" },
        //         picture: { type: "string", format: "uri", example: "https://example.com/profile.jpg" },
        //         googleId: { type: "string", example: "11223344556677889900" },
        //     },
        // },
    },
    responses: {
        BadRequest: {
            description: "Invalid request body",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: { type: "string", example: "Error" },
                            message: { type: "string", example: "Validation failed" },
                        },
                    },
                },
            },
        },
        Unauthorized: {
            description: "Unauthorized - Missing or invalid token",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: { type: "string", example: "Error" },
                            message: { type: "string", example: "Token is invalid or expired" },
                        },
                    },
                },
            },
        },
        Forbidden: {
            description: "Forbidden - You don't have permission to access this resource",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: { type: "string", example: "Error" },
                            message: { type: "string", example: "This user does not have access for this action" },
                        },
                    },
                },
            },
        },
        NotFound: {
            description: "Resource not found",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: { type: "string", example: "Error" },
                            message: { type: "string", example: "Requested resource not found" },
                        },
                    },
                },
            },
        },
    },
    parameters: {
    //     Sort: {
    //         in: "query",
    //         name: "sort",
    //         schema: { type: "string" },
    //         description: "Sort by a specific field (e.g., createdAt or -balance)",
    //     },
    //     Limit: {
    //         in: "query",
    //         name: "limit",
    //         schema: { type: "integer", example: 10 },
    //         description: "Limit the number of results returned",
    //     },
    //     Page: {
    //         in: "query",
    //         name: "page",
    //         schema: { type: "integer", example: 1 },
    //         description: "Specify the page number for pagination",
    //     },
    //     Fields: {
    //         in: "query",
    //         name: "fields",
    //         schema: { type: "string" },
    //         description: "Select specific fields to return (e.g., name,balance)",
    //     },
    //     Filter: {
    //         in: "query",
    //         name: "filter",
    //         schema: { type: "string" },
    //         description: "Apply filters, e.g., { 'balance': { '$gte': 1000 } }",
    //     },
    },
};
