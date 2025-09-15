/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(1, new Field({
    "cost": 10,
    "hidden": true,
    "id": "password901924565",
    "max": 32,
    "min": 8,
    "name": "password",
    "pattern": "",
    "presentable": false,
    "required": true,
    "system": true,
    "type": "password"
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "users[a-z]{7}",
    "hidden": false,
    "id": "text4166911607",
    "max": 12,
    "min": 4,
    "name": "username",
    "pattern": "^[a-z]+$",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(1, new Field({
    "cost": 10,
    "hidden": true,
    "id": "password901924565",
    "max": 0,
    "min": 8,
    "name": "password",
    "pattern": "",
    "presentable": false,
    "required": true,
    "system": true,
    "type": "password"
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "users[0-9]{6}",
    "hidden": false,
    "id": "text4166911607",
    "max": 150,
    "min": 3,
    "name": "username",
    "pattern": "^[\\w][\\w\\.\\-]*$",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
