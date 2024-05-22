import {ADD_PERSON} from "../FormType";

const initState = [{key: "001", name: "tom", age: 18}];
const personReducers = (pre = initState, action) => {
    console.log(action);
    const {type, data} = action;
    switch (type) {
        case "add_person" :
            return [data, ...pre];
        default:
            return pre
    }
};

export default personReducers;


