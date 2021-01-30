# eslint-plugin-date-timezone

This plugin allows to validate usage of Date to work appriopriatly with timezones

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-date-timezone`:

```
$ npm install eslint-plugin-date-timezone --save-dev
```

## Usage

Add `date-timezone` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["date-timezone"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "date-timezone/no-date-from-string": 2
  }
}
```
