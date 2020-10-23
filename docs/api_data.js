define({ "api": [
  {
    "type": "post",
    "url": "/users",
    "title": "👤 New user",
    "version": "0.1.0",
    "name": "Create_user",
    "group": "Users",
    "description": "<p>Cria um novo funcionário</p>",
    "permission": [
      {
        "name": "Coord"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Coord JWT key - token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id_user",
            "description": "<p>Id do funcionário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Formato de requisição válido",
          "content": "{\n  \"cpf\": \"000.000.251-55\",\n  \"email\": \"yanalmeidagarcia@gmail.com\",\n  \"name\": \"Yan Almeida Garcia\",\n  \"phone\": \"(61) 14444-4\",\n  \"sector\": 2,\n  \"gender\": 1\n}",
          "type": "json"
        },
        {
          "title": "Formato de requisição inválido",
          "content": "{\n  \"cpf\": \"\",\n  \"email\": \"yanalmeidagarciagmail\",\n  \"name\": \"12314\",\n  \"phone\": \"(61) 14444-4\",\n  \"sector\": \"a\",\n  \"gender\": \"b\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Válido",
          "content": "HTTP/1.1 (200) OK\n{\n  \"message\": \"Cadastro efetuado com sucesso.\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 200\n}",
          "type": "json"
        },
        {
          "title": "Inválido",
          "content": "HTTP/1.1 (400) OK\n{\n  \"message\": \"Requisição inválida.\",\n  \"data\": null,\n  \"metadata\": {\n    \"error\": {\n      \"cpf\": \"CPF obrigatório.\",\n      \"email\": \"Email não é válido.\",\n      \"name\": \"Nome não é válido.\",\n      \"phone\": \"Telefone não é válido.\",\n      \"sector\": \"Setor não é válido.\",\n      \"gender\": \"Sexo não é válido.\"\n    }\n  },\n  \"status\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/controllers/users.js",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataConflict",
            "description": "<p>Retorna um erro caso haja dado(s) já cadastrado(s).</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedJwtExpired",
            "description": "<p>JSON Web Token expirado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedSector",
            "description": "<p>Decoded token com dados inválidos.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedToken",
            "description": "<p>Token não passado via Bearer Authorization.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Conflict",
          "content": "HTTP/1.1 (409) Data Conflict\n{\n  \"message\": \"Dado(s) já cadastrado(s).\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 409\n}",
          "type": "json"
        },
        {
          "title": "Expired",
          "content": "HTTP/1.1 (401) Unauthorized Jwt\n{\n  \"message\": \"Invalid token - jwt expired\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        },
        {
          "title": "Sector",
          "content": "HTTP/1.1 (401) Unauthorized Decoded Sector\n{\n  \"message\": \"Invalid token - sector\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        },
        {
          "title": "Token",
          "content": "HTTP/1.1 (401) Unauthorized Token\n{\n  \"message\": \"Invalid token - token\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/id_user",
    "title": "👤 Edit user",
    "version": "0.1.0",
    "name": "Edit_user",
    "group": "Users",
    "description": "<p>Altera os dados de um funcionário</p>",
    "permission": [
      {
        "name": "Coord"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Coord JWT key - token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>funcionário.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "Sector",
            "description": "<p>Setor do funcionário (definirá as permissões dentro da aplicação).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Email",
            "description": "<p>E-mail do(s) funcionário(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "Gender",
            "description": "<p>Sexo do funcionário.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Phone",
            "description": "<p>Telefone de contato dos funcionários.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Formato de requisição válido",
          "content": "{\n  \"email\": \"yanalmeidagarcia@gmail.com\",\n  \"phone\": \"(61) 14444-4444\",\n  \"sector\": 2,\n  \"gender\": 1\n}",
          "type": "json"
        },
        {
          "title": "Formato de requisição inválido",
          "content": "{\n  \"email\": \"yanalmeidagarciagmail\",\n  \"phone\": \"(61) 14444-4\",\n  \"sector\": \"a\",\n  \"gender\": \"b\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Válido",
          "content": "HTTP/1.1 (200) OK\n{\n  \"message\": \"Dados alterados com sucesso.\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 200\n}",
          "type": "json"
        },
        {
          "title": "Inválido",
          "content": "HTTP/1.1 (400) OK\n{\n  \"message\": \"Requisição inválida.\",\n  \"data\": null,\n  \"metadata\": {\n    \"error\": {\n      \"email\": \"Email não é válido.\",\n      \"phone\": \"Telefone não é válido.\",\n      \"sector\": \"Setor não é válido.\",\n      \"gender\": \"Sexo não é válido.\"\n    }\n  },\n  \"status\": 400\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/controllers/users.js",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataConflict",
            "description": "<p>Retorna um erro caso haja dado(s) já cadastrado(s).</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedJwtExpired",
            "description": "<p>JSON Web Token expirado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedSector",
            "description": "<p>Decoded token com dados inválidos.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedToken",
            "description": "<p>Token não passado via Bearer Authorization.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Conflict",
          "content": "HTTP/1.1 (409) Data Conflict\n{\n  \"message\": \"Dado(s) já cadastrado(s).\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 409\n}",
          "type": "json"
        },
        {
          "title": "Expired",
          "content": "HTTP/1.1 (401) Unauthorized Jwt\n{\n  \"message\": \"Invalid token - jwt expired\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        },
        {
          "title": "Sector",
          "content": "HTTP/1.1 (401) Unauthorized Decoded Sector\n{\n  \"message\": \"Invalid token - sector\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        },
        {
          "title": "Token",
          "content": "HTTP/1.1 (401) Unauthorized Token\n{\n  \"message\": \"Invalid token - token\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "👥 All users",
    "version": "0.1.0",
    "name": "List",
    "group": "Users",
    "description": "<p>Retorna todos os funcionários</p>",
    "permission": [
      {
        "name": "Coord"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Coord JWT key - token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 (200) OK\n{\n  \"message\": \"Requisição efetuada com sucesso.\",\n  \"data\": {\n    \"total\": n,\n    \"users\": [\n      {\n        \"id\": 1,\n        \"name\": \"Yan Almeida Garcia\",\n        \"about\": \"Apenas um teste!\",\n        \"sector\": \"Direção\"\n      },\n        ...\n    ]\n  },\n  \"metadata\": {},\n  \"status\": 200\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/controllers/users.js",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Dado(s) solicitado(s) não encontrado(s).</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedJwtExpired",
            "description": "<p>JSON Web Token expirado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedSector",
            "description": "<p>Decoded token com dados inválidos.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedToken",
            "description": "<p>Token não passado via Bearer Authorization.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not found",
          "content": "HTTP/1.1 (404) Not Found\n{\n  \"message\": \"Não encontrado.\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 404\n}",
          "type": "json"
        },
        {
          "title": "Expired",
          "content": "HTTP/1.1 (401) Unauthorized Jwt\n{\n  \"message\": \"Invalid token - jwt expired\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        },
        {
          "title": "Sector",
          "content": "HTTP/1.1 (401) Unauthorized Decoded Sector\n{\n  \"message\": \"Invalid token - sector\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        },
        {
          "title": "Token",
          "content": "HTTP/1.1 (401) Unauthorized Token\n{\n  \"message\": \"Invalid token - token\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/id_user",
    "title": "👤 Unique user",
    "version": "0.1.0",
    "name": "List_One",
    "group": "Users",
    "description": "<p>Retorna um funcionário específico</p>",
    "permission": [
      {
        "name": "Coord"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Coord JWT key - token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>funcionário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 (200) OK\n{\n  \"message\": \"Requisição efetuada com sucesso.\",\n  \"data\": {\n   \"user\": [\n     {\n       \"id\": 1,\n       \"name\": \"Yan Almeida Garcia\",\n       \"email\": \"yan@almeida.com\",\n       \"cpf\": \"000.000.000-00\",\n       \"phone\": \"(00) 91234-5678\",\n       \"sector\": \"Direção\"\n       \"gender\": \"Não informar\"\n     },\n   ]\n },\n \"metadata\": {},\n \"status\": 200\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/controllers/users.js",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Dado(s) solicitado(s) não encontrado(s).</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedJwtExpired",
            "description": "<p>JSON Web Token expirado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedSector",
            "description": "<p>Decoded token com dados inválidos.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedToken",
            "description": "<p>Token não passado via Bearer Authorization.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Not found",
          "content": "HTTP/1.1 (404) Not Found\n{\n  \"message\": \"Não encontrado.\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 404\n}",
          "type": "json"
        },
        {
          "title": "Expired",
          "content": "HTTP/1.1 (401) Unauthorized Jwt\n{\n  \"message\": \"Invalid token - jwt expired\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        },
        {
          "title": "Sector",
          "content": "HTTP/1.1 (401) Unauthorized Decoded Sector\n{\n  \"message\": \"Invalid token - sector\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        },
        {
          "title": "Token",
          "content": "HTTP/1.1 (401) Unauthorized Token\n{\n  \"message\": \"Invalid token - token\",\n  \"data\": null,\n  \"metadata\": {},\n  \"status\": 401\n}",
          "type": "json"
        }
      ]
    }
  }
] });
