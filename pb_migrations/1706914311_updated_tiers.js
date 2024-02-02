/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8c3j04bzdoqp2nc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "krz44gmw",
    "name": "visibility",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "public",
        "private"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8c3j04bzdoqp2nc")

  // remove
  collection.schema.removeField("krz44gmw")

  return dao.saveCollection(collection)
})
