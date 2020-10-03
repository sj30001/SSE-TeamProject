Party API
-----------

# Party - Read all data for every party stored in the database

## Method
> GET

## URL
> /party

## Example usage
http://localhost/api/party

## Request parameter
This request do not have any parameters

## Response parameter
|Field|Type|Description|
|:----- |:------|:----------------------------- |
|id | int |
|partyName | string | 
|createdAt|string
|updatedAt|string

## Response example
```
{
    "party": [
        {
            "id": 1,
            "partyName": "aaa party",
            "createdAt": "2020-09-29T07:23:50.811Z",
            "updatedAt": "2020-09-30T06:19:47.244Z"
        },
        {
            "id": 2,
            "partyName": "Fire Party",
            "createdAt": "2020-10-01T06:06:40.417Z",
            "updatedAt": "2020-10-01T06:08:35.242Z"
        }
    ]
}
```

# Party - Create a new party

## Method
> POST

## URL
> /party

## Example usage
http://localhost/api/party

## Request parameter
This request do not have any parameters

## Request exapmle
```
_csrf     9KdH2zjl-rFGzytxMt3KB57_S_xjTPDE-fOM
partyName River party
```

## Response parameter
|Field|Type|Description|
|:--- |:---|---|
|status |string|
|description|string|Give the reason why failed
|id |int|option

## Response example - Success
```
{
    "status": "success",
    "party": {
        "id": 3
    }
}
```

## Response example - Fail
```
{
    "status": "error",
    "description": "Party name already exist in database"
}
```

## Response example - Fail
```
{
    "status": "error",
    "msg": "driver license, passport or email already exist in database"
}
```

# Party - Update the party information

## Method
> PUT

## URL
> /party

## Example usage
http://localhost/api/party

## Request parameter
This request do not have any parameters

## Request exapmle
```
_csrf     9KdH2zjl-rFGzytxMt3KB57_S_xjTPDE-fOM
partyName River party
newName   Road party
```

## Response parameter
|Field|Type|Description|
|:--- |:---|---|
|status |string|
|description|string|Give the reason why failed


## Response example - Success
```
{
    "status": "success"
}
```

## Response example - Fail
```
{
    "status": "error",
    "description": "Can not find party name"
}
```

## Response example - Fail
```
{
    "status": "error",
    "msg": "driver license, passport or email already exist in database"
}
```