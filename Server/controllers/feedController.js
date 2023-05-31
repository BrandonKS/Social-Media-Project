const result =database.addPost(data)
result.status(201).json({result: "Post created!", databaseLength:result}) //201 = updated content?