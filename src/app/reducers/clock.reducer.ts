export const clock = (state = new Date(), {type, payload}) => {
    switch(type){
        case 'hour': {
            state.setHours(state.getHours()+(+payload));
            state = new Date(state);
            return state;
        }
        case 'second': {
            state.setSeconds(state.getSeconds()+(+payload));
            state = new Date(state); // why
            return state;
        }
        default:{
            return state;
        }
    }
}