import { GET_ITEMS, INCREMENTAR, RESTAR, LIMPIAR_ITEMS, SELECT, ESPACIO, DESCUENTO, TOTAL} from './Types'

export default (state, action) => {
    const {payload, type} = action

    switch(type){
        case GET_ITEMS:
        case RESTAR:
        case INCREMENTAR:
            return{
                ...state,
                items: payload
            }
        case SELECT:
            return{
                ...state,
                select: payload
            }
        case ESPACIO:
            return{
                ...state,
                espacio: payload
            }
        case DESCUENTO:
            return{
                ...state,
                descuento: payload
            }
        case TOTAL:
            return{
                ...state,
                total: payload
            }
        case LIMPIAR_ITEMS:
            return{
                ...state,
                select: 0,
                espacio: 0,
                descuento: 0,
                total: 0
            }
        default:
            return state;
    }

}