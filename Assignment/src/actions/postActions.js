import { FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://rickandmortyapi.com/api/character/ ')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

