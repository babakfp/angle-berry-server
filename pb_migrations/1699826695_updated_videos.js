/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qa9kh8x2ce5zzx6")

  collection.deleteRule = "@request.auth.isAdmin = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qa9kh8x2ce5zzx6")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
