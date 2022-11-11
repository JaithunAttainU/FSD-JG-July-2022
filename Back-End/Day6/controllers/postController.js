const editPost = (request, response) => {
  //sign in check
  //log
  const { postId } = request.params

  const index = posts.findIndex((post) => {
    return post.id === Number(postId)
  })

  if (index == -1) {
    response.status(404).send({ status: 'error', msg: 'Posts not found!' })
  } else {
    const newPostData = request.body //{title: 'dfs'}
    if (newPostData) {
      // posts = posts.map(post => {
      //   if (post.id === Number(postId)) {
      //     return newPostData
      //   } else {
      //     return post
      //   }
      // })
      const oldPostData = posts[index] //{id: '1', title: 'dfs'}

      posts[index] = {
        ...oldPostData,
        ...newPostData
      }
      response.send({ status: 'success', msg: 'Posts Edited Successfully', data: newPostData })
    } else {
      response.status(400).send({ status: 'error', msg: 'Invalid Data!' })
    }
  }
}

const addPost = (request, response) => {
  //sign in check
  //log
  const postData = request.body

  if (postData) {
    posts.push(postData)
    response.send({ status: 'success', msg: 'Posts Added Successfully', data: postData })
  } else {
    response.status(400).send({ status: 'error', msg: 'Invalid Input Data' })
  }
}

const deletePost = (request, response) => {
  //sign in check
  //log
  const { postId } = request.params

  // posts = posts.filter(post => {
  //   return post.id === Number(postId) ? false : true
  // })

  const index = posts.findIndex((post) => {
    return post.id === Number(postId)
  })

  if (index == -1) {
    response.status(404).send({ status: 'error', msg: 'Data not found!' })
  } else {
    const deletedPosts = posts[index]
    posts.splice(index, 1)
    response.send({ status: 'success', msg: 'Deleted Successfully', data: deletedPosts })
  }
}

const getAllPost = (request, response) => {

  //sign in check
  //log
  const { userId, title } = request.query

  // const userId = queryParams.userId
  // const title = queryParams.title

  let responseData = posts //100

  if (userId) { //10
    responseData = responseData.filter((post) => {
      return post.userId === Number(userId)
    })
  }

  if (title) { //1
    responseData = responseData.filter((post) => {
      return title == post.title
    })
  }
  response.send({ status: 'success', data: responseData })
}

const getPostById = (request, response) => {
  // const { postId } = request.params //{ postId: '1' }

  const params = request.params
  const requestPost = posts.filter((post) => {
    return post.id === Number(params.postId)
  })

  if (requestPost.length == 0) {
    response.status(404).send({ status: 'error', msg: 'Data Not Found!' })
  } else {
    response.status(200).send({ status: 'success', data: requestPost[0] })
  }
}

module.exports = {
  editPost,
  addPost,
  deletePost,
  getAllPost,
  getPostById
}