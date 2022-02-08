import {
    SELECT_FIGHTER,
    SET_FIGHTER,
} from './types'

export const select_fighter = (id, character_data, is_selected) => {
    return {
        type: SELECT_FIGHTER,
        id,
        character_data,
        is_selected
    };
};

export const setFighter = fighter => {
    return {
        type: SET_FIGHTER,
        fighter
    };
};