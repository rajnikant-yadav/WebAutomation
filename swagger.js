// swagger/swaggerDocument.js
const swagger = {
    openapi: '3.0.3',
    info: {
      title: 'Web Automation',
      version: '1.0.0',
    },
    paths: {
      '/ping': {
        get: {
          summary: 'Get the root of the API',
          responses: {
            '200': {
              description: 'Success',
              content: {
                'text/plain': {
                  example: 'pong',
                },
              },
            },
          },
        },
      },
      '/automation/user/:id': {
        get: {
          summary: 'Get the new endpoint',
          responses: {
            '200': {
              description: 'Success',
              content: {
                'text/plain': {
                  example: 'New, Rajnikant!',
                },
              },
            },
          },
        },
      },
    },
  };



  export default swagger