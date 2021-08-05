export const reducer=(state,action)=>{
    if(action.type==="REMOVE_ITEM"){
        return {
            ...state,
            item: state.item.filter((currElm)=>{
                    return currElm.id != action.payload
            })
        }
    }
    if(action.type==="CLEAR_CART"){
        return {
            ...state,
                item:[]
            }
    }
    if(action.type==="INCREMENT"){
                let updateCart = state.item.map((currElm)=>{
                    if(currElm.id===action.payload){
                        return {
                            ...currElm,
                            quantity: currElm.quantity+1

                            }
                    }
                    return currElm
                })    
                return {
                    ...state,
                    item: updateCart

                }             
    }

    if(action.type==="DECREMENT"){
        let updateCart = state.item.map((currElm)=>{
            if(currElm.id===action.payload){
                return {
                    ...currElm,
                    quantity: currElm.quantity-1

                    }
            }
            return currElm
        }).filter((currElm)=>currElm.quantity !=0);    
        return {
            ...state,
            item: updateCart

        }             
}

    return state
}