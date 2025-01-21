export const ADD_FAVOURITES = 'ADD_FAVOURITES'
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES'



export const addToFavouritesAction = (data) =>{
return({
        type: ADD_FAVOURITES,
        payload: data
      })
}

export const removeToFavouritesAction = (data) =>{
    return({
        type: REMOVE_FAVOURITES,
        payload: data._id
          })
    }