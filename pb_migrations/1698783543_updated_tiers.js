/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8c3j04bzdoqp2nc")

  collection.createRule = "@request.auth.isAdmin = true"
  collection.updateRule = "@request.auth.isAdmin = true"
  collection.deleteRule = "@request.auth.isAdmin = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8c3j04bzdoqp2nc")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
