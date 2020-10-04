User API
-----------

# User - Read data of a User

## Method
> GET

## URL
> /user/:id

## Example usage
http://localhost/user/21

## Request parameter
|Field|Type|Description|
|:--- |:---|---|
|id |string|

## Response parameter
|Field|Type|Description|
|:----- |:------|:----------------------------- |
|id | int |
|name | string | 
|birthday | string |
|passport|int|
|driverLicense|string
|address|string
|email|string
|createdAt|string
|updatedAt|string

## Response example
```
{
    "user": {
        "id": 21,
        "name": " Foo Bar",
        "birthday": "1991-12-31",
        "passport": " eh000000",
        "driverLicense": 123456,
        "address": " 22 Tecoma",
        "email": " 12345@123.com",
        "phoneNumber": 432811111,
        "createdAt": "2020-09-26T08:52:29.358Z",
        "updatedAt": "2020-09-26T08:52:29.358Z"
    }
}
```

# User - Create a new User

## Method
> POST

## URL
> /user

## Example usage
http://localhost/user

## Request parameter
|Field|Type|Description|
|:----- |:------|:----------------------------- |
|name | string | 
|birthday | string |
|passport|int|
|driverLicense|string
|address|string
|password|string
|email|string
|phoneNumber|int

## Request exapmle
```
{
    "user": {
        "name": "Foo Bar",
        "birthday": "1992-01-01",
        "passport": "eh000000",
        "driverLicense": 123456,
        "address": "22 Tecoma",
        "password": "abc123",
        "email": "1234@123.com",
        "phoneNumber": 0432811111
    }
}
```

## Response parameter
|Field|Type|Description|
|:--- |:---|---|
|status |string|
|msg|string|Give the reason why failed
|id |int|option

## Response example - Success
```
{
    "status": "success",
    "user": {
        "id": 21
    }
}
```

## Response example - Fail
```
{
    "status": "error",
    "msg": "input not correct or database connection error"
}
```

## Response example - Fail
```
{
    "status": "error",
    "msg": "driver license, passport or email already exist in database"
}
```