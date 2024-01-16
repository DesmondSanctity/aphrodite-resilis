import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Aprodite Resilis API',
      description: "A simple CRUD API services design to demo integration with Resilis to optimize your APIs for global low-latency with no code and reduce infrastructure expenses.",
      contact: {
        name: "Desmond",
        email: "desmond.obisi.g20@gmail.com",
        url: "https://github.com/DesmondSanctity/twilio-log-alert",
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: "http://localhost:5000/",
        description: "Local server"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{
      bearerAuth: []
    }],
  },
  // looks for configuration in specified directories
  apis: ['./src/routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)

function swaggerDocs(app, port) {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}

export default swaggerDocs