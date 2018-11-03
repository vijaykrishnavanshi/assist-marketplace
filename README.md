# Assist Marketplace

This is a two-sided marketplace where domestic helpers can get on-boarded directly or through an agency. On the other hand, the users will be able to find an appropriate helper based on a number of different criterion

## Basic Feature

- [X] Any new member of this application can sign up either as a domestic helper offering their services or as a normal user. You will need to create a complete user login and authentication system

- [X] A domestic helper will have to go through an on-boarding process which might include things like proving their identity, entering their preferred work areas, their service charges (hourly or weekly or monthly)

- [X] The normal users will see a list of domestic helpers available in their area and will be able to sort them based on various filters

- [X] Once the users have selected a helper, they can make them an offer to work.

- [X] The helpers will get an email notification, and can accept or reject offers. The helpers should be able to choose only one offer for a specified time period. The application should restrict them from double booking

- [X] Once a helper accepts an offer to work, the user who offered the work should also get an email notification

- [X] The code should have adequate test coverage

- [X] The code should have regular and frequent git commits and informative commit messages

## Development

This marketplace has two actors

- User (USER)
- Domestic Helper (HELPER)

Actors have email as their mode of communication.

## Run the project locally

Run the following command and the APIs will the available locally for testing and development.

```closure
git clone https://github.com/vijaykrishnavanshi/assist-marketplace.git
cd assist-marketplace
npm install
npm start
```

## Lint Project

```closure
npm run lint  # for cheking the lint error
npm run lint-fix # for fixing the minor lint error
```

## Run Tests

Used [Mocha](https://mochajs.org/)

```closure
npm run test  # for running tests
```

## Generate Documentation

Used [API Docs](http://apidocjs.com/)

```closure
npm run generate-docs  # for generating documentation
```
