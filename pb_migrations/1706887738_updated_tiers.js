/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8c3j04bzdoqp2nc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "chfqybaz",
    "name": "invites",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1000,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8c3j04bzdoqp2nc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "chfqybaz",
    "name": "invites",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1000,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
