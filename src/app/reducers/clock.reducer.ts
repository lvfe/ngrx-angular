export const clock = (state = new Date(), {type, payload}={type:'', payload: ''}) => {
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
const initialPeople = [
    {name: 'wangli', time: clock()},
    {name: 'zhangjiang', time: clock()}
];
export const people = (state = initialPeople, {type, payload}) => {
    switch(type){
        case 'advance': {
            return state.map(person => {
                if(person == payload) {
                    return {...person, time:clock()};
                }
                return person;
            })
        }
        case 'reset':{
            return state.map(person => {
                return {...person, time: payload};
            })
        }
        default: {
            return state;
        }
    }
}