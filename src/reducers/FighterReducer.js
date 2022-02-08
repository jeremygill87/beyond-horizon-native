import { SELECT_FIGHTER } from '../actions/types';

import character_data from '../data/Characters_Data';

const INITIAL_STATE = {
    fighter: character_data,
    selected_fighter: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_FIGHTER:
            let fighter = [...state.fighter];
            let selected_fighter = [...state.selected_fighter]

            const is_selected = action.is_selected;

            if (!state.selected_fighter) {
                let fighters = fighter.map(item => {
                    if (item.id == action.id) {
                        item.is_selected = !is_selected;
                    }
                    return item;
                })

                return {...state, fighter, selected_fighter}

            }
            default: 
            return state;
            
    }
}