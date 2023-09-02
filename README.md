# Back End CRUD

in this Project, we will create an Api from the nosql database, namely Mongodb.

## Database Structure

Database Schema

![Image](https://github.com/valendion/FullStack-Js-BackEnd-CRUD/blob/main/note_db.png?raw=true)

## Project Structure

This software uses the following open source packages:

- /controller stores the functions that will be used in api creation
- /models save database schema
- /routes saves the route in the api

## Note Endpoint

#### GET/notes (getAllNotes)
- URL PARAMS
    None
- Data PARAMS
    None
```
[
    {
        "_id": "64eafbfff7b369c6187ea583",
        "date": "2023-08-26T16:00:00.000Z",
        "title": "Fist Note",
        "description": "My Note",
        "__v": 0
    }
]
```
#### GET/notes/:id (getNoteById)
- URL PARAMS
    _id
- Data PARAMS
    None
```
{
    "_id": "64eafbfff7b369c6187ea583",
    "date": "2023-08-26T16:00:00.000Z",
    "title": "Fist Note",
    "description": "My Note",
    "__v": 0
}
```
#### POST/notes (postNote)
- URL PARAMS
    None
- Data PARAMS
    date, title and description
```
{
    "date": "2023-09-29T00:00:00.000Z",
    "title": "Ini adalah tes",
    "description": "SAya tahu",
    "_id": "64f2c730076b9a0594bc027a",
    "__v": 0
}
```
#### PATCH/notes (updateNoteById)
- URL PARAMS
    _id
- Data PARAMS
    date, title and description
```
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}
```

#### DELETE/notes (deleteById)
- URL PARAMS
    _id
- Data PARAMS
    None
```
{
    "acknowledged": true,
    "deletedCount": 1
}
```

## How to use

Clone this repository
```
$ git clone https://github.com/valendion/FullStack-Js-BackEnd-CRUD
```
Go into the repository
```
$ cd FullStack-Js-BackEnd-CRUD
```
Install dependencies
```
$ pnpm install
```
Run the app
```
$ pnpm run dev
```
