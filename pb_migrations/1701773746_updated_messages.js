/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i2iracs6xus87")

  collection.createRule = "@request.auth.id = user"
  collection.updateRule = "@request.auth.id = user"
  collection.deleteRule = "@request.auth.id = user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("86i2iracs6xus87")

  collection.createRule = "user = @request.auth.id"
  collection.updateRule = "user = @request.auth.id"
  collection.deleteRule = "user = @request.auth.id"

  return dao.saveCollection(collection)
})
