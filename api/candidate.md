Candidate API
-----------

# Candidate - Read all data for every candidates stored in the database

## Method
> GET

## URL
> /candidates/:name

## Example usage
http://localhost/api/party/10

## Request parameter
|Field|Type|Description|
|:--- |:---|---|
|name |string|

## Response parameter
|Field|Type|Description|
|:----- |:------|:----------------------------- |
|id | int |
|name | string | 
|party | string |
|votes|string
|createdAt|string
|updatedAt|string

## Response example
```
{
    "candidates": {
        "id": 10,
        "name": "Foo Bar",
        "party": "Torrence River Party",
        "votes": 0,
        "createdAt": "2020-10-01T05:58:27.740Z",
        "updatedAt": "2020-10-01T06:03:21.089Z"
    }
}
```

# Candidate - Create a new party

## Method
> POST

## URL
> /candidates

## Example usage
http://localhost/api/candidates/

## Request parameter
This request do not have any parameters

## Request exapmle
```
_csrf     9KdH2zjl-rFGzytxMt3KB57_S_xjTPDE-fOM
candidateName  Andy1
partyID        3
```

## Response parameter
|Field|Type|Description|
|:--- |:---|---|
|status |string|
|description|string|Give the reason why failed
|id |int|
|name |string|
|partyName | string | 
|createdAt|string
|updatedAt|string
|votes |string|


## Response example - Success
```
{
    "status": "success",
    "candidates": {
        "candidates": {
            "id": 14,
            "name": "Ornn",
            "party": "Fire Party",
            "updatedAt": "2020-10-03T07:51:48.202Z",
            "createdAt": "2020-10-03T07:51:48.202Z",
            "votes": 0
        }
    }
}

```

## Response example - Fail
```
{
    "status": "error",
    "description": "candidate's name  already exist in database"
}
```


# Candidate - Update the Candidate information

## Method
> PUT

## URL
> /candidates

## Example usage
http://localhost/api/candidates/

## Request parameter
This request do not have any parameters

## Request exapmle
```
_csrf     9KdH2zjl-rFGzytxMt3KB57_S_xjTPDE-fOM
candidateName  Andy1
partyID        4
newpartyID     3
```

## Response parameter
|Field|Type|Description|
|:--- |:---|---|
|status |string|
|description|string|Show the status of successful update or give the reason why failed

## Response example - Success
```
{
    "status": "success",
    "description": "Update Completed"
}
```

## Response example - Fail
```
{
    "status": "error",
    "description": "Can not find party name"
}
```
