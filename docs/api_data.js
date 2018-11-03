define({ "api": [
  {
    "type": "post",
    "url": "/helper-onboarding",
    "title": "Onboarding Helper [POST]",
    "group": "Authentication",
    "description": "<p>This api is used after the user has signed up on our platform using email.</p>",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "Array",
            "optional": false,
            "field": "service",
            "description": "<p>(Optional) Services provided by the user.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>(Optional) photo link of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Enjoy your token !!\",\n   \"data\": {\n     email: <email>,\n     name: <name>,\n     address: <address>,\n     role: <role>,\n     service: <services>\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to signup.\n{\n   \"success\": \"false\",\n   \"message\": \"Unable to signup\",\n   \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n   \"success\": \"false\",\n   \"message\": \"Something went wrong\",\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/user-module/user.route.js",
    "groupTitle": "Authentication",
    "name": "PostHelperOnboarding"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login [POST]",
    "group": "Authentication",
    "description": "<p>This api is used by login the user using email and password.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Enjoy your token !!\",\n   \"data\": {\n     \"token\": \"JWT Token\",\n     \"id\": \"User Id\",\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to login.\n{\n  \"success\": \"false\",\n  \"message\": \"Unable to login\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n  \"success\": \"false\",\n  \"message\": \"Something went wrong\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/user-module/user.route.js",
    "groupTitle": "Authentication",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "Signup [POST]",
    "group": "Authentication",
    "description": "<p>This api is used by signup the user using email.</p>",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of the user.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the user.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the user.</p>"
          },
          {
            "group": "body",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>(Optional) Coordinates of the user.{lattitude: <lat>, longitude: <long> }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Enjoy your token !!\",\n   \"data\": {\n     \"token\": \"JWT Token\",\n     \"id\": \"User Id\",\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to signup.\n{\n   \"success\": \"false\",\n   \"message\": \"Unable to signup\",\n   \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n   \"success\": \"false\",\n   \"message\": \"Something went wrong\",\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/user-module/user.route.js",
    "groupTitle": "Authentication",
    "name": "PostSignup"
  },
  {
    "type": "post",
    "url": "/hire-assist",
    "title": "Hire [POST]",
    "group": "Hire",
    "description": "<p>This api is used by user to hire the Helper on assist merket place.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client",
            "description": "<p>Client MongoID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "helper",
            "description": "<p>helper MongoID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start",
            "description": "<p>start date time.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end",
            "description": "<p>end date time.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Hire is requested to the helper.\",\n   \"data\": {\n     client: <client-mongoID>,\n     helper: <helper-mongoID>,\n     start: <start-date-in-utc>,\n     end: <end-date-in-utc>,\n     status: <status>\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to search.\n{\n  \"success\": \"false\",\n  \"message\": \"Unable to login\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n  \"success\": \"false\",\n  \"message\": \"Something went wrong\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/hire-module/hire.route.js",
    "groupTitle": "Hire",
    "name": "PostHireAssist"
  },
  {
    "type": "post",
    "url": "/hire-status",
    "title": "Hire Status [POST]",
    "group": "Hire",
    "description": "<p>This api is used by the user or helper on assist merket place.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hireId",
            "description": "<p>Hire MongoID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of Hire [&quot;ACCEPTED&quot;, &quot;REJECTED&quot;].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Hire status is updated.\",\n   \"data\": {\n     hireId: <hire-mongoID>,\n     status: <status>\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to search.\n{\n  \"success\": \"false\",\n  \"message\": \"Unable to login\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n  \"success\": \"false\",\n  \"message\": \"Something went wrong\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/hire-module/hire.route.js",
    "groupTitle": "Hire",
    "name": "PostHireStatus"
  },
  {
    "type": "post",
    "url": "/search",
    "title": "Search [POST]",
    "group": "Hire",
    "description": "<p>This api is used by user to search for the Helper on assist merket place.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "term",
            "description": "<p>partial name/email/address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coordinates",
            "description": "<p>location based coordinate array [<lat>, <long>].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Enjoy your token !!\",\n   \"data\": {\n     helperList: [{\n       email: \"<email>\",\n       name: \"<name>\",\n       address: <address>,\n       location: <location>\n     }]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to search.\n{\n  \"success\": \"false\",\n  \"message\": \"Unable to login\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n  \"success\": \"false\",\n  \"message\": \"Something went wrong\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/hire-module/hire.route.js",
    "groupTitle": "Hire",
    "name": "PostSearch"
  },
  {
    "type": "get",
    "url": "/profile",
    "title": "Profile [GET]",
    "group": "Profile",
    "description": "<p>This api is used by get the details of the logged in user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Users JWT Token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Success\",\n   \"data\": {\n     email: <email>,\n     name: <name>,\n     address: <address>,\n     role: <role>,\n     service: <services>\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to get user.\n{\n  \"success\": \"false\",\n  \"message\": \"Unable to get user\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n  \"success\": \"false\",\n  \"message\": \"Something went wrong\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/user-module/user.route.js",
    "groupTitle": "Profile",
    "name": "GetProfile"
  },
  {
    "type": "post",
    "url": "/profile",
    "title": "Profile [POST]",
    "group": "Profile",
    "description": "<p>This api is used by update the details of the logged in user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Users JWT Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>(optional) Address of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Success\",\n   \"data\": {\n     email: <email>,\n     name: <name>,\n     address: <address>,\n     role: <role>,\n     service: <services>\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to get user.\n{\n  \"success\": \"false\",\n  \"message\": \"Unable to get user\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n  \"success\": \"false\",\n  \"message\": \"Something went wrong\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/user-module/user.route.js",
    "groupTitle": "Profile",
    "name": "PostProfile"
  },
  {
    "type": "get",
    "url": "/forgot-password",
    "title": "ForgotPassword [GET]",
    "group": "Recovery",
    "description": "<p>This api is used to reset password of the user using email.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Success\",\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to reset password.\n{\n  \"success\": \"false\",\n  \"message\": \"Unable to reset password\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n  \"success\": \"false\",\n  \"message\": \"Something went wrong\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/user-module/user.route.js",
    "groupTitle": "Recovery",
    "name": "GetForgotPassword"
  },
  {
    "type": "post",
    "url": "/change-password",
    "title": "ChangePassword [POST]",
    "group": "Recovery",
    "description": "<p>This api is used by the frontend to change the password of the user using the token and password.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token recieved by the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password set by the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Success\"\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to change password.\n{\n  \"success\": \"false\",\n  \"message\": \"Unable to change password\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n  \"success\": \"false\",\n  \"message\": \"Something went wrong\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/user-module/user.route.js",
    "groupTitle": "Recovery",
    "name": "PostChangePassword"
  },
  {
    "type": "post",
    "url": "/verify-token",
    "title": "VerifyToken [POST]",
    "group": "Recovery",
    "description": "<p>This api is used by the frontend to verify the recieved user token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token recieved by the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Success\",\n   \"data\": {\n     \"email\": \"String\",\n     \"name\": \"String\",\n     \"token\": \"String\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Token not verified.\n{\n  \"success\": \"false\",\n  \"message\": \"Token not verified\",\n  \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n  \"success\": \"false\",\n  \"message\": \"Something went wrong\",\n  \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/user-module/user.route.js",
    "groupTitle": "Recovery",
    "name": "PostVerifyToken"
  }
] });
