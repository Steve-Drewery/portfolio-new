export default function reducer(state, action) {
  switch (action.type) {
    case "setPosts": {
      return {
        ...state,
        posts: [...state.posts, action.data],
      };
    }
    case "deletePost": {
      return {
        ...state,
        // reviews: state.reviews.filter((review, id) => id !== action.data),
        posts: [
          ...state.posts.slice(0, action.data),
          ...state.posts.slice(action.data + 1),
        ],
      };
    }
    case "initialiseEditBox": {
      return {
        ...state,
        isShowEditBox: true,
        editBoxMessage: state.posts[action.data].description,
        selectedPostId: action.data,
      };
    }
    case "updateEditBoxMessage": {
      return {
        ...state,
        editBoxMessage: action.data,
      };
    }
    case "saveMessage": {
      const updatedPosts = state.posts.slice();
      updatedPosts[state.selectedPostId].description = state.editBoxMessage;

      return {
        ...state,
        posts: updatedPosts,
        isShowEditBox: false,
      };
    }

    default:
      return state;
  }
}
