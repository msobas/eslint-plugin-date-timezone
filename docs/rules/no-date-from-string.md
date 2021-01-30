# This rule will not allow to create new Date with string argument (no-date-from-string)

Creating new Date in js has it's issues when you want to use date without time or timezone,
for example "2020-01-01".
Depending on client timezone it would create different Date object.

```js
new Date("2020-01-01")
Wed Jan 01 2020 01:00:00 GMT+0100 (Central European Standard Time)
new Date(2020, 0, 1)
Wed Jan 01 2020 00:00:00 GMT+0100 (Central European Standard Time)
new Date("2020-01-01")
Tue Dec 31 2019 16:00:00 GMT-0800 (Pacific Standard Time)
new Date(2020, 0, 1)
Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)
new Date("2020-01-01")
Wed Jan 01 2020 13:00:00 GMT+1300 (New Zealand Daylight Time)
new Date(2020, 0, 1)
Wed Jan 01 2020 00:00:00 GMT+1300 (New Zealand Daylight Time)
```

## Rule Details

This rule aims to force developers to use integer arguments instead ow string.

Examples of **incorrect** code for this rule:

```js
new Date("2020-01-01");
```

Examples of **correct** code for this rule:

```js
new Date(2020, 0, 1);
```
