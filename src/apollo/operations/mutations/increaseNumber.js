import { countVar } from "../../cache";

export default countVar => () => countVar(countVar() + 1 );