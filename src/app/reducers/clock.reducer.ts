export const HOUR = 'hour';
export const SECOND = 'second';
export const ADVANCE = 'advance';
export const RESET = 'reset';
export const clock = (state = new Date(), {type, payload}={type:'', payload: ''}) => {
    switch(type){
        case HOUR: {
            state.setHours(state.getHours()+(+payload));
            state = new Date(state);
            return state;
        }
        case SECOND: {
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
        case ADVANCE: {
            return state.map(person => {
                if(person == payload) {
                    return {...person, time:clock()};
                }
                return person;
            })
        }
        case RESET:{
            return state.map(person => {
                return {...person, time: payload};
            })
        }
        default: {
            return state;
        }
    }
}